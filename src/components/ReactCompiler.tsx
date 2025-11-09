"use client";
import React, { useState, useEffect } from "react";
import { X, Play } from "lucide-react";

interface ReactCompilerProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode: string;
  title?: string;
}

const ReactCompiler: React.FC<ReactCompilerProps> = ({
  isOpen,
  onClose,
  initialCode,
  title = "React Compiler",
}) => {
  const [code, setCode] = useState(initialCode);
  const [compiledOutput, setCompiledOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const runCode = () => {
    setError("");
    setIsLoading(true);
    
    try {
      // Encode code as base64 to avoid any escaping issues
      const encodedCode = btoa(unescape(encodeURIComponent(code)));

      // Create the HTML with React environment
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
            <style>
              body {
                margin: 16px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                background: #A435F0;
                color: white;
                border: none;
                border-radius: 4px;
                transition: background 0.3s;
                margin: 5px;
              }
              button:hover {
                background: #8c2ad1;
              }
              .card {
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
                margin: 10px 0;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .card img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                object-fit: cover;
              }
              .card h2 {
                margin: 10px 0;
              }
              .card p {
                color: #666;
              }
              h1 {
                color: #333;
                border-bottom: 2px solid #A435F0;
                padding-bottom: 10px;
              }
              article {
                max-width: 800px;
              }
              .post-list {
                list-style: none;
                padding: 0;
              }
              .post-list li {
                padding: 15px;
                margin: 10px 0;
                background: #f9f9f9;
                border-left: 4px solid #A435F0;
                border-radius: 4px;
              }
              .error {
                color: #dc2626;
                padding: 12px;
                background: #fee;
                border-radius: 4px;
                margin: 10px 0;
                font-family: monospace;
              }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              const { useState, useEffect } = React;
              
              try {
                // Decode the user code from base64
                const encodedCode = '${encodedCode}';
                const userCode = decodeURIComponent(escape(atob(encodedCode)));
                
                // Transform and execute the user code in global scope
                const transformedCode = Babel.transform(userCode, { presets: ['react'] }).code;
                (0, eval)(transformedCode); // Indirect eval executes in global scope
                
                // Auto-detect and render the component
                const root = ReactDOM.createRoot(document.getElementById('root'));
                
                // Try to find the last function component defined
                const functionMatch = userCode.match(/function\\s+(\\w+)/g);
                if (functionMatch) {
                  const lastFunction = functionMatch[functionMatch.length - 1].split(' ')[1];
                  // Access from window since it's now global
                  if (window[lastFunction]) {
                    root.render(React.createElement(window[lastFunction]));
                  } else {
                    document.getElementById('root').innerHTML = '<div class="error">Component "' + lastFunction + '" not found.</div>';
                  }
                } else {
                  document.getElementById('root').innerHTML = '<div class="error">No component found. Define a function component to render.</div>';
                }
              } catch (err) {
                document.getElementById('root').innerHTML = '<div class="error">Error: ' + err.message + '</div>';
                console.error(err);
              }
            <\/script>
          </body>
        </html>
      `;

      // Small delay to show loading state
      setTimeout(() => {
        setCompiledOutput(html);
        setIsLoading(false);
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setIsLoading(false);
    }
  };

  // Update code when initialCode changes and reset
  useEffect(() => {
    setCode(initialCode);
    setCompiledOutput("");
  }, [initialCode]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
      onWheel={(e) => e.stopPropagation()}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-sm w-full max-w-6xl h-[80vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-[#000000]">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
          >
            <X className="text-black" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Editor */}
          <div className="flex-1 flex flex-col border-r border-gray-200">
            <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">React Code</span>
              <button
                onClick={runCode}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#A435F0] text-white rounded-sm hover:bg-[#8c2ad1] transition-colors text-sm"
              >
                <Play size={14} />
                Run
              </button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none bg-gray-50 text-black"
              spellCheck={false}
            />
          </div>

          {/* Preview */}
          <div className="flex-1 flex flex-col">
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">Preview</span>
            </div>
            <div className="flex-1 overflow-auto bg-white">
              {error && (
                <div className="p-4 bg-red-50 text-red-600 text-sm font-mono">
                  Error: {error}
                </div>
              )}
              {!compiledOutput && !error && !isLoading && (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <Play size={48} className="mx-auto mb-4 text-gray-400" />
                    <p>Click &quot;Run&quot; to see the output</p>
                  </div>
                </div>
              )}
              {isLoading && (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A435F0] mx-auto mb-4"></div>
                    <p>Running code...</p>
                  </div>
                </div>
              )}
              {compiledOutput && !isLoading && (
                <iframe
                  key={compiledOutput.substring(0, 100)}
                  srcDoc={compiledOutput}
                  className="w-full h-full border-0 animate-in fade-in duration-300"
                  title="React Preview"
                  sandbox="allow-scripts"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCompiler;
