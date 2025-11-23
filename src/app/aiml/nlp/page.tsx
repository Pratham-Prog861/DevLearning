"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";
import { PythonCompiler } from "@/components/PythonCompiler";

const NLPTutorial = () => {
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
      title: "Introduction to Natural Language Processing",
      content:
        "Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret, and manipulate human language. It combines computational linguistics with machine learning and deep learning.",
      examples: [
        {
          code: `# Common NLP Tasks:
- Text Classification (Sentiment Analysis)
- Named Entity Recognition (NER)
- Machine Translation
- Question Answering
- Text Summarization
- Chatbots and Conversational AI`,
          description: "Key applications of NLP",
        },
      ],
    },
    {
      title: "Setting Up NLP Environment",
      content:
        "Install essential NLP libraries including NLTK, spaCy, and transformers for working with text data.",
      examples: [
        {
          code: `# Install NLP libraries
pip install nltk spacy transformers

# Install spaCy language model
python -m spacy download en_core_web_sm

# Install additional tools
pip install textblob wordcloud`,
          description: "Install essential NLP libraries",
        },
        {
          code: `import nltk
import spacy
from transformers import pipeline

# Download NLTK data
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

# Load spaCy model
nlp = spacy.load('en_core_web_sm')`,
          description: "Import and initialize NLP libraries",
        },
      ],
    },
    {
      title: "Text Preprocessing",
      content:
        "Text preprocessing is crucial for NLP tasks. It involves cleaning and transforming raw text into a format suitable for analysis.",
      examples: [
        {
          code: `import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

text = "Natural Language Processing is amazing! It's transforming AI."

# Tokenization
tokens = word_tokenize(text.lower())
print(f"Tokens: {tokens}")

# Remove stopwords
stop_words = set(stopwords.words('english'))
filtered_tokens = [w for w in tokens if w.isalnum() and w not in stop_words]
print(f"Filtered: {filtered_tokens}")

# Lemmatization
lemmatizer = WordNetLemmatizer()
lemmatized = [lemmatizer.lemmatize(w) for w in filtered_tokens]
print(f"Lemmatized: {lemmatized}")`,
          description: "Complete text preprocessing pipeline",
        },
      ],
    },
    {
      title: "Sentiment Analysis",
      content:
        "Sentiment analysis determines the emotional tone of text. It's widely used for analyzing customer reviews, social media, and feedback.",
      examples: [
        {
          code: `from textblob import TextBlob

# Analyze sentiment
text = "I love this product! It's absolutely fantastic."
blob = TextBlob(text)

# Get polarity (-1 to 1) and subjectivity (0 to 1)
sentiment = blob.sentiment
print(f"Polarity: {sentiment.polarity}")
print(f"Subjectivity: {sentiment.subjectivity}")

if sentiment.polarity > 0:
    print("Positive sentiment")
elif sentiment.polarity < 0:
    print("Negative sentiment")
else:
    print("Neutral sentiment")`,
          description: "Simple sentiment analysis with TextBlob",
        },
        {
          code: `from transformers import pipeline

# Use pre-trained transformer model
sentiment_analyzer = pipeline('sentiment-analysis')

texts = [
    "This movie was absolutely wonderful!",
    "I hated the service at this restaurant.",
    "The product is okay, nothing special."
]

results = sentiment_analyzer(texts)
for text, result in zip(texts, results):
    print(f"Text: {text}")
    print(f"Sentiment: {result['label']}, Score: {result['score']:.4f}\\n")`,
          description: "Advanced sentiment analysis with transformers",
        },
      ],
    },
    {
      title: "Named Entity Recognition (NER)",
      content:
        "NER identifies and classifies named entities (people, organizations, locations, etc.) in text.",
      examples: [
        {
          code: `import spacy

# Load spaCy model
nlp = spacy.load('en_core_web_sm')

text = """
Apple Inc. was founded by Steve Jobs in Cupertino, California.
The company released the iPhone in 2007.
"""

# Process text
doc = nlp(text)

# Extract named entities
print("Named Entities:")
for ent in doc.ents:
    print(f"{ent.text:20} {ent.label_:15} {spacy.explain(ent.label_)}")`,
          description: "Extract named entities using spaCy",
        },
      ],
    },
    {
      title: "Text Classification",
      content:
        "Text classification assigns predefined categories to text documents. Common applications include spam detection and topic categorization.",
      examples: [
        {
          code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Sample data
texts = [
    "Free money now! Click here!",
    "Meeting scheduled for tomorrow",
    "Win a free iPhone today!",
    "Project deadline is next week",
    "Congratulations! You won the lottery!"
]
labels = ['spam', 'ham', 'spam', 'ham', 'spam']

# Vectorize text
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Train classifier
clf = MultinomialNB()
clf.fit(X, labels)

# Predict
new_text = ["Important meeting reminder"]
X_new = vectorizer.transform(new_text)
prediction = clf.predict(X_new)
print(f"Prediction: {prediction[0]}")`,
          description: "Text classification with TF-IDF and Naive Bayes",
        },
      ],
    },
    {
      title: "Word Embeddings",
      content:
        "Word embeddings represent words as dense vectors that capture semantic meaning. Similar words have similar vector representations.",
      examples: [
        {
          code: `import spacy

# Load model with word vectors
nlp = spacy.load('en_core_web_md')

# Get word vectors
word1 = nlp("king")
word2 = nlp("queen")
word3 = nlp("car")

# Calculate similarity
similarity = word1.similarity(word2)
print(f"Similarity (king, queen): {similarity:.4f}")

similarity = word1.similarity(word3)
print(f"Similarity (king, car): {similarity:.4f}")`,
          description: "Working with word embeddings in spaCy",
        },
      ],
    },
    {
      title: "Text Generation with Transformers",
      content:
        "Modern transformers like GPT can generate human-like text. The Hugging Face library makes it easy to use pre-trained models.",
      examples: [
        {
          code: `from transformers import pipeline

# Create text generation pipeline
generator = pipeline('text-generation', model='gpt2')

# Generate text
prompt = "Artificial intelligence is"
result = generator(
    prompt,
    max_length=50,
    num_return_sequences=1,
    temperature=0.7
)

print(result[0]['generated_text'])`,
          description: "Generate text using GPT-2",
        },
      ],
    },
    {
      title: "Question Answering",
      content:
        "Question answering systems can extract answers from context passages. This is useful for building chatbots and search systems.",
      examples: [
        {
          code: `from transformers import pipeline

# Create QA pipeline
qa_pipeline = pipeline('question-answering')

context = """
Python is a high-level programming language. It was created by 
Guido van Rossum and first released in 1991. Python is known for 
its simple syntax and readability.
"""

question = "Who created Python?"

result = qa_pipeline(question=question, context=context)
print(f"Question: {question}")
print(f"Answer: {result['answer']}")
print(f"Confidence: {result['score']:.4f}")`,
          description: "Question answering with transformers",
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
          <MessageSquare className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Natural Language Processing
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Natural Language Processing with Python. Learn text
          preprocessing, sentiment analysis, NER, and work with modern
          transformer models.
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
              src="https://www.youtube.com/embed/yiNS_Sh9KDA?si=EKOVES-Ll0UVfmCA"
              title="Natural Language Processing Tutorial"
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
            <MessageSquare className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Essential Libraries
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">nltk</code> -
                  Text processing toolkit
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">spacy</code> -
                  Industrial NLP
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    transformers
                  </code>{" "}
                  - Pre-trained models
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">textblob</code>{" "}
                  - Simple text processing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Always preprocess text data</li>
                <li>✓ Use pre-trained models when possible</li>
                <li>✓ Consider context and domain</li>
                <li>✓ Evaluate on diverse datasets</li>
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

export default NLPTutorial;
