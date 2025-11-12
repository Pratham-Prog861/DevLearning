"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm your learning assistant powered CodeWithPratham. 👋\n\nHow can I help you with your learning journey today? You can ask me about:\n\n• Recommendations for learning paths\n• Explanations of programming concepts\n• Guidance on which tutorial to start with\n• Help with understanding code examples\n\nWhat would you like to learn?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll immediately when messages change
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    // Also scroll when chat opens
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Format AI response to convert markdown to HTML-like formatting
  const formatMessage = (text: string) => {
    // Split by lines to handle different formatting
    const lines = text.split('\n');
    const formatted: React.ReactNode[] = [];
    
    lines.forEach((line, index) => {
      // Handle bold text (**text** or __text__)
      let formattedLine = line;
      
      // Bold
      formattedLine = formattedLine.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      formattedLine = formattedLine.replace(/__(.+?)__/g, '<strong>$1</strong>');
      
      // Italic
      formattedLine = formattedLine.replace(/\*(.+?)\*/g, '<em>$1</em>');
      formattedLine = formattedLine.replace(/_(.+?)_/g, '<em>$1</em>');
      
      // Code blocks
      formattedLine = formattedLine.replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-xs">$1</code>');
      
      // Check for headings
      if (line.startsWith('### ')) {
        formatted.push(
          <h4 key={index} className="font-semibold text-base mt-2 mb-1" dangerouslySetInnerHTML={{ __html: formattedLine.replace('### ', '') }} />
        );
      } else if (line.startsWith('## ')) {
        formatted.push(
          <h3 key={index} className="font-bold text-lg mt-2 mb-1" dangerouslySetInnerHTML={{ __html: formattedLine.replace('## ', '') }} />
        );
      } else if (line.startsWith('# ')) {
        formatted.push(
          <h2 key={index} className="font-bold text-xl mt-2 mb-1" dangerouslySetInnerHTML={{ __html: formattedLine.replace('# ', '') }} />
        );
      }
      // Bullet points
      else if (line.trim().startsWith('• ') || line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const content = line.trim().substring(2);
        const formattedContent = content
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/__(.+?)__/g, '<strong>$1</strong>')
          .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-xs">$1</code>');
        formatted.push(
          <li key={index} className="ml-4 mb-1" dangerouslySetInnerHTML={{ __html: formattedContent }} />
        );
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(line.trim())) {
        const content = line.trim().replace(/^\d+\.\s/, '');
        const formattedContent = content
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/__(.+?)__/g, '<strong>$1</strong>')
          .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-xs">$1</code>');
        formatted.push(
          <li key={index} className="ml-4 mb-1 list-decimal" dangerouslySetInnerHTML={{ __html: formattedContent }} />
        );
      }
      // Empty lines
      else if (line.trim() === '') {
        formatted.push(<br key={index} />);
      }
      // Regular text
      else {
        formatted.push(
          <p key={index} className="mb-1" dangerouslySetInnerHTML={{ __html: formattedLine }} />
        );
      }
    });
    
    return <div className="space-y-1">{formatted}</div>;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Use Netlify function in production, Next.js API route in development
      const apiEndpoint = process.env.NODE_ENV === 'production' 
        ? '/.netlify/functions/chat'
        : '/api/chat';

      // Call Gemini AI API
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage.trim(),
          conversationHistory: messages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please make sure the API is configured correctly. You can still browse our tutorials manually!",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#A435F0] to-[#8c2ad1] text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 ${
          isOpen ? "rotate-0" : "hover:rotate-12"
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-500 items-center justify-center">
              <Sparkles className="h-3 w-3 text-white" />
            </span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-8 duration-300"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#A435F0] to-[#8c2ad1] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
                </div>
                <div>
                  <h3 className="font-semibold">Learning Assistant</h3>
                  <p className="text-xs text-white/80">Powered by CodeWithPratham</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="rounded-full p-1 hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={messagesContainerRef} 
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-[#A435F0] text-white rounded-br-sm"
                      : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                  }`}
                >
                  <div className="text-sm break-words">
                    {message.sender === "ai" ? formatMessage(message.text) : (
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    )}
                  </div>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-white/70"
                        : "text-gray-400"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-[#A435F0]" />
                    <span className="text-sm text-gray-500">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#A435F0] focus:border-transparent text-sm text-gray-800"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-[#A435F0] text-white rounded-full p-2 hover:bg-[#8c2ad1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Press Enter to send
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
