import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function POST(request: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is not configured" },
        { status: 500 }
      );
    }

    const { message, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // System prompt to guide the AI behavior
    const systemPrompt = `You are a helpful learning assistant for CodeWithPratham, an educational platform for developers. 

Your role is to:
- Help users choose the right learning path (Frontend, Backend, Data Analytics, DSA, UI/UX, GitHub, DevOps)
- Explain programming concepts clearly and concisely
- Recommend appropriate tutorials based on user's skill level and interests
- Answer questions about HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, Python, NumPy, Pandas, Matplotlib, Java, C++, Git/GitHub and DevOps
- Be encouraging and supportive of the user's learning journey
- Keep responses concise but informative (2-4 paragraphs maximum)
- Suggest relevant tutorials from the platform when appropriate

Available learning paths on the platform:
1. Frontend Development (HTML, CSS, JavaScript, React.js, Next.js)
2. Backend Development (Node.js, Express.js, MongoDB, All-in-One Tutorial)
3. Data Analytics (Python, NumPy, Pandas, Matplotlib)
4. DSA (Python, JavaScript, Java, C++)
5. UI/UX Design
6. GitHub Tutorial
7. DevOps (Docker, Kubernetes, AWS, Terraform, CI/CD)
8. AI & ML ( Python , AI Web Apps, Computer Vision, Machine Learning , NLP , TensorFlow and Pytorch )
9. Mobile App Development ( Flutter, React Native, Kotlin, UI & UX Design , Swift and Deployment )

Always be helpful, friendly, and educational. If a user seems lost, guide them to the /choose page to explore learning paths.`;

    // Build the conversation history with system prompt
    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      {
        role: "model",
        parts: [{ text: "I understand. I'll help users with their learning journey on CodeWithPratham by providing guidance, answering questions, and recommending appropriate tutorials." }],
      },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    // Call Gemini API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API error:", errorData);
      return NextResponse.json(
        { error: "Failed to get response from Gemini AI" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Extract the AI response
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      return NextResponse.json(
        { error: "No response generated" },
        { status: 500 }
      );
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
