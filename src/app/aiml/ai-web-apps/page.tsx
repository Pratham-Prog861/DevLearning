"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { PythonCompiler } from "@/components/PythonCompiler";

const AIWebAppsTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [compilerCode, setCompilerCode] = useState("");

  const openCompiler = (code: string) => {
    setCompilerCode(code);
    setIsCompilerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = "unset";
  };

  const tutorials = [
    {
      title: "Introduction to AI Integration",
      content:
        "Integrating AI models into web applications allows you to create intelligent, interactive experiences. You can use pre-trained models, APIs, or deploy your own custom models.",
      examples: [
        {
          code: `# Ways to integrate AI in web apps:
1. REST APIs (OpenAI, Hugging Face, Google Cloud AI)
2. Client-side ML (TensorFlow.js, ONNX.js)
3. Server-side inference (Flask, FastAPI)
4. Edge deployment (TensorFlow Lite, ONNX Runtime)
5. Cloud services (AWS SageMaker, Azure ML, Google Vertex AI)`,
          description: "Different approaches to AI integration",
        },
      ],
    },
    {
      title: "Using OpenAI API",
      content:
        "OpenAI provides powerful APIs for GPT models, DALL-E, and Whisper. Learn to integrate ChatGPT into your web application.",
      examples: [
        {
          code: `# Install OpenAI SDK
pip install openai`,
          description: "Install OpenAI Python library",
        },
        {
          code: `from openai import OpenAI

# Initialize client
client = OpenAI(api_key='your-api-key-here')

# Chat completion
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    temperature=0.7,
    max_tokens=150
)

print(response.choices[0].message.content)`,
          description: "Basic ChatGPT integration",
        },
        {
          code: `# Streaming responses for better UX
stream = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a short story"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")`,
          description: "Stream responses for real-time output",
        },
      ],
    },
    {
      title: "Building a Flask API for ML Models",
      content:
        "Create a REST API using Flask to serve your machine learning models. This allows your web app to make predictions via HTTP requests.",
      examples: [
        {
          code: `# Install Flask
pip install flask flask-cors`,
          description: "Install Flask and CORS support",
        },
        {
          code: `from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for web apps

# Load pre-trained model
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from request
        data = request.get_json()
        features = np.array(data['features']).reshape(1, -1)
        
        # Make prediction
        prediction = model.predict(features)
        probability = model.predict_proba(features)
        
        return jsonify({
            'prediction': int(prediction[0]),
            'probability': probability[0].tolist(),
            'status': 'success'
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)`,
          description: "Complete Flask API for ML model",
        },
      ],
    },
    {
      title: "FastAPI for High-Performance ML APIs",
      content:
        "FastAPI is a modern, fast framework for building APIs. It's ideal for ML applications with automatic API documentation.",
      examples: [
        {
          code: `# Install FastAPI and Uvicorn
pip install fastapi uvicorn python-multipart`,
          description: "Install FastAPI dependencies",
        },
        {
          code: `from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = FastAPI(title="Image Classification API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = tf.keras.models.load_model('image_classifier.h5')
class_names = ['cat', 'dog', 'bird']

@app.post("/classify")
async def classify_image(file: UploadFile = File(...)):
    # Read and preprocess image
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    image = image.resize((224, 224))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)
    
    # Make prediction
    predictions = model.predict(image_array)
    predicted_class = class_names[np.argmax(predictions[0])]
    confidence = float(np.max(predictions[0]))
    
    return {
        "class": predicted_class,
        "confidence": confidence,
        "all_predictions": {
            class_names[i]: float(predictions[0][i])
            for i in range(len(class_names))
        }
    }

# Run with: uvicorn main:app --reload`,
          description: "FastAPI image classification endpoint",
        },
      ],
    },
    {
      title: "TensorFlow.js - Client-Side ML",
      content:
        "TensorFlow.js allows you to run ML models directly in the browser, enabling real-time predictions without server calls.",
      examples: [
        {
          code: `<!-- Include TensorFlow.js -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet"></script>

<input type="file" id="imageUpload" accept="image/*">
<img id="preview" style="max-width: 400px;">
<div id="predictions"></div>

<script>
  let model;
  
  // Load pre-trained MobileNet model
  async function loadModel() {
    model = await mobilenet.load();
    console.log('Model loaded');
  }
  
  // Classify image
  async function classifyImage(img) {
    const predictions = await model.classify(img);
    
    // Display predictions
    const predDiv = document.getElementById('predictions');
    predDiv.innerHTML = '<h3>Predictions:</h3>';
    predictions.forEach(pred => {
      predDiv.innerHTML += \`
        <p>\${pred.className}: \${(pred.probability * 100).toFixed(2)}%</p>
      \`;
    });
  }
  
  // Handle file upload
  document.getElementById('imageUpload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const img = document.getElementById('preview');
      img.src = event.target.result;
      img.onload = () => classifyImage(img);
    };
    
    reader.readAsDataURL(file);
  });
  
  loadModel();
</script>`,
          description: "Image classification in the browser with TensorFlow.js",
        },
      ],
    },
    {
      title: "React Integration with AI APIs",
      content:
        "Build a React component that integrates with AI APIs for a modern, interactive user experience.",
      examples: [
        {
          code: `import React, { useState } from 'react';
import axios from 'axios';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Call your backend API
      const response = await axios.post('http://localhost:5000/chat', {
        message: input,
        history: messages
      });

      // Add AI response
      const aiMessage = { 
        role: 'assistant', 
        content: response.data.response 
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={\`message \${msg.role}\`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="loading">Thinking...</div>}
      </div>
      
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;`,
          description: "React chatbot component",
        },
      ],
    },
    {
      title: "Hugging Face Inference API",
      content:
        "Hugging Face provides free inference APIs for thousands of pre-trained models. Perfect for quick prototyping.",
      examples: [
        {
          code: `import requests

API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
headers = {"Authorization": "Bearer YOUR_HF_TOKEN"}

def summarize_text(text):
    payload = {"inputs": text}
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# Example usage
article = """
Your long article text here...
"""

summary = summarize_text(article)
print(summary[0]['summary_text'])`,
          description: "Text summarization with Hugging Face API",
        },
        {
          code: `# Sentiment analysis
API_URL = "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english"

def analyze_sentiment(text):
    payload = {"inputs": text}
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

result = analyze_sentiment("I love this product!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]`,
          description: "Sentiment analysis with Hugging Face",
        },
      ],
    },
    {
      title: "Deploying ML Models to Production",
      content:
        "Learn best practices for deploying ML models to production environments with proper monitoring and scaling.",
      examples: [
        {
          code: `# Docker deployment
# Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,
          description: "Dockerfile for ML API",
        },
        {
          code: `# requirements.txt
fastapi==0.104.1
uvicorn==0.24.0
tensorflow==2.15.0
numpy==1.24.3
pillow==10.1.0
python-multipart==0.0.6`,
          description: "Python dependencies for deployment",
        },
        {
          code: `# Build and run Docker container
docker build -t ml-api .
docker run -p 8000:8000 ml-api

# Or use docker-compose.yml
version: '3.8'
services:
  ml-api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - MODEL_PATH=/models/model.h5
    volumes:
      - ./models:/models`,
          description: "Deploy with Docker",
        },
      ],
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = (text: string, idx: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen mt-16 bg-white pt-16 pb-12 relative">
      <div className="absolute top-5 left-4 md:left-8">
        <Link
          href="/aiml"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to AI/ML
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            AI Integration in Web Apps
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Learn to integrate AI models into web applications. Master REST APIs,
          Flask, FastAPI, TensorFlow.js, and deployment strategies for
          production-ready AI apps.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/CCV5fKgmdQc?si=GZgLWoaAoKiG__MA"
              title="AI Integration Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#000000] mb-4">
                {tutorial.title}
              </h2>
              <p className="text-gray-600 mb-6">{tutorial.content}</p>

              <div className="bg-gray-50 rounded-sm p-4">
                <h3 className="text-lg font-medium text-[#000000] mb-3">
                  Examples:
                </h3>
                <div className="space-y-4">
                  {tutorial.examples.map((example, idx) => {
                    const uniqueId = `${index}-${idx}`;
                    return (
                      <div key={idx} className="space-y-2">
                        <div className="relative">
                          <pre className="bg-gray-100 p-3 rounded-sm overflow-x-auto">
                            <code className="text-[#A435F0]">
                              {example.code}
                            </code>
                          </pre>
                          <button
                            onClick={() =>
                              copyToClipboard(example.code, uniqueId)
                            }
                            className="absolute top-2 right-2 p-2 rounded-sm bg-gray-200/50 backdrop-blur-sm text-gray-600 hover:bg-[#A435F0]/20 hover:text-[#A435F0] transition-all duration-300 transform active:scale-95"
                            title="Copy to clipboard"
                          >
                            {copiedIndex === uniqueId ? (
                              <Check
                                size={16}
                                className="text-green-400 animate-in fade-in duration-300"
                              />
                            ) : (
                              <Copy size={16} />
                            )}
                          </button>
                        </div>
                        <p className="text-gray-600 text-sm whitespace-pre-line pl-2 border-l-2 border-[#A435F0]">
                          {example.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Try it Yourself Button */}
              <button
                onClick={() => openCompiler(tutorial.examples[0].code)}
                className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm"
              >
                Try it Yourself
              </button>
            </div>
          ))}
        </div>

        {/* Quick Reference Card */}
        <div className="mt-12 bg-gradient-to-br from-[#A435F0]/5 to-[#A435F0]/10 border border-[#A435F0]/20 rounded-sm p-6">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Integration Options
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    OpenAI API
                  </code>{" "}
                  - GPT models
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    Flask/FastAPI
                  </code>{" "}
                  - Custom APIs
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    TensorFlow.js
                  </code>{" "}
                  - Browser ML
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    Hugging Face
                  </code>{" "}
                  - Pre-trained models
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use caching for repeated requests</li>
                <li>✓ Implement rate limiting</li>
                <li>✓ Monitor API usage and costs</li>
                <li>✓ Handle errors gracefully</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Python Compiler Modal */}
      <PythonCompiler
        isOpen={isCompilerOpen}
        onClose={closeCompiler}
        initialCode={compilerCode}
        packages={[]}
      />
    </div>
  );
};

export default AIWebAppsTutorial;
