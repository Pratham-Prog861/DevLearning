"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Network } from "lucide-react";
import Link from "next/link";
import { PythonCompiler } from "@/components/PythonCompiler";

const DeepLearningTutorial = () => {
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
      title: "Introduction to Deep Learning",
      content:
        "Deep Learning is a subset of machine learning that uses neural networks with multiple layers to learn hierarchical representations of data. TensorFlow and PyTorch are the two most popular frameworks for building deep learning models.",
      examples: [
        {
          code: `# Deep Learning Applications:
- Image Classification
- Object Detection
- Natural Language Processing
- Speech Recognition
- Generative AI (GANs, Diffusion Models)
- Reinforcement Learning`,
          description: "Common applications of deep learning",
        },
      ],
    },
    {
      title: "Setting Up TensorFlow",
      content:
        "TensorFlow is an open-source deep learning framework developed by Google. It provides a comprehensive ecosystem for building and deploying ML models.",
      examples: [
        {
          code: `# Install TensorFlow
pip install tensorflow

# Verify installation
import tensorflow as tf
print(f"TensorFlow version: {tf.__version__}")

# Check GPU availability
print(f"GPU Available: {tf.config.list_physical_devices('GPU')}")`,
          description: "Install and verify TensorFlow installation",
        },
      ],
    },
    {
      title: "Building a Neural Network with TensorFlow/Keras",
      content:
        "Keras is the high-level API for TensorFlow that makes building neural networks intuitive and straightforward.",
      examples: [
        {
          code: `import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Create a Sequential model
model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# View model architecture
model.summary()`,
          description: "Create a simple feedforward neural network",
        },
        {
          code: `# Train the model
history = model.fit(
    X_train, y_train,
    epochs=10,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)

# Evaluate on test set
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f"Test accuracy: {test_acc:.4f}")`,
          description: "Train and evaluate the neural network",
        },
      ],
    },
    {
      title: "Convolutional Neural Networks (CNN)",
      content:
        "CNNs are specialized neural networks for processing grid-like data such as images. They use convolutional layers to automatically learn spatial hierarchies.",
      examples: [
        {
          code: `from tensorflow.keras import layers, models

# Build CNN for image classification
model = models.Sequential([
    # Convolutional layers
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    layers.Conv2D(64, (3, 3), activation='relu'),
    
    # Dense layers
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)`,
          description: "CNN architecture for image classification",
        },
      ],
    },
    {
      title: "Setting Up PyTorch",
      content:
        "PyTorch is a deep learning framework developed by Meta (Facebook) that provides flexibility and dynamic computation graphs, making it popular for research.",
      examples: [
        {
          code: `# Install PyTorch (CPU version)
pip install torch torchvision torchaudio

# Verify installation
import torch
print(f"PyTorch version: {torch.__version__}")
print(f"CUDA available: {torch.cuda.is_available()}")`,
          description: "Install and verify PyTorch",
        },
      ],
    },
    {
      title: "Building Neural Networks with PyTorch",
      content:
        "PyTorch uses a more explicit approach to building neural networks through classes and the nn.Module base class.",
      examples: [
        {
          code: `import torch
import torch.nn as nn
import torch.optim as optim

# Define neural network class
class NeuralNetwork(nn.Module):
    def __init__(self):
        super(NeuralNetwork, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.2)
    
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.relu(self.fc2(x))
        x = self.dropout(x)
        x = self.fc3(x)
        return x

# Create model instance
model = NeuralNetwork()
print(model)`,
          description: "Define a neural network class in PyTorch",
        },
        {
          code: `# Define loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(10):
    for batch_idx, (data, target) in enumerate(train_loader):
        # Forward pass
        output = model(data)
        loss = criterion(output, target)
        
        # Backward pass and optimization
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    print(f'Epoch {epoch+1}, Loss: {loss.item():.4f}')`,
          description: "Training loop in PyTorch",
        },
      ],
    },
    {
      title: "CNN in PyTorch",
      content:
        "Building convolutional neural networks in PyTorch follows the same class-based approach with Conv2d layers.",
      examples: [
        {
          code: `import torch.nn as nn
import torch.nn.functional as F

class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, 3, 1)
        self.conv2 = nn.Conv2d(32, 64, 3, 1)
        self.dropout1 = nn.Dropout(0.25)
        self.dropout2 = nn.Dropout(0.5)
        self.fc1 = nn.Linear(9216, 128)
        self.fc2 = nn.Linear(128, 10)
    
    def forward(self, x):
        x = self.conv1(x)
        x = F.relu(x)
        x = self.conv2(x)
        x = F.relu(x)
        x = F.max_pool2d(x, 2)
        x = self.dropout1(x)
        x = torch.flatten(x, 1)
        x = self.fc1(x)
        x = F.relu(x)
        x = self.dropout2(x)
        x = self.fc2(x)
        return F.log_softmax(x, dim=1)

model = CNN()`,
          description: "CNN implementation in PyTorch",
        },
      ],
    },
    {
      title: "Transfer Learning",
      content:
        "Transfer learning allows you to use pre-trained models and fine-tune them for your specific task, saving time and computational resources.",
      examples: [
        {
          code: `# TensorFlow/Keras Transfer Learning
from tensorflow.keras.applications import ResNet50
from tensorflow.keras import layers, models

# Load pre-trained ResNet50
base_model = ResNet50(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)

# Freeze base model layers
base_model.trainable = False

# Add custom layers
model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)`,
          description: "Transfer learning with ResNet50 in TensorFlow",
        },
        {
          code: `# PyTorch Transfer Learning
import torchvision.models as models
import torch.nn as nn

# Load pre-trained ResNet
resnet = models.resnet50(pretrained=True)

# Freeze all layers
for param in resnet.parameters():
    param.requires_grad = False

# Replace final layer
num_features = resnet.fc.in_features
resnet.fc = nn.Linear(num_features, 10)

# Only the final layer will be trained
optimizer = optim.Adam(resnet.fc.parameters(), lr=0.001)`,
          description: "Transfer learning with ResNet in PyTorch",
        },
      ],
    },
    {
      title: "Saving and Loading Models",
      content:
        "Saving trained models is essential for deployment and future use. Both frameworks provide simple methods for model persistence.",
      examples: [
        {
          code: `# TensorFlow/Keras - Save model
model.save('my_model.h5')  # HDF5 format
model.save('my_model')     # SavedModel format

# Load model
from tensorflow import keras
loaded_model = keras.models.load_model('my_model.h5')

# Save only weights
model.save_weights('model_weights.h5')
model.load_weights('model_weights.h5')`,
          description: "Save and load models in TensorFlow",
        },
        {
          code: `# PyTorch - Save model
torch.save(model.state_dict(), 'model_weights.pth')

# Load model
model = NeuralNetwork()
model.load_state_dict(torch.load('model_weights.pth'))
model.eval()  # Set to evaluation mode

# Save entire model
torch.save(model, 'complete_model.pth')
loaded_model = torch.load('complete_model.pth')`,
          description: "Save and load models in PyTorch",
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
          <Network className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Deep Learning with TensorFlow/PyTorch
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master deep learning with TensorFlow and PyTorch. Learn to build
          neural networks, CNNs, and leverage transfer learning for powerful AI
          applications.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            TensorFlow Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tPYj3fFJGjk"
              title="TensorFlow Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            PyTorch Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/V_xro1bcAuA?si=DF6cuzkMLo1q1ExQ"
              title="PyTorch Tutorial"
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
            <Network className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                TensorFlow vs PyTorch
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>TensorFlow:</strong> Production-ready, easier
                  deployment
                </li>
                <li>
                  <strong>PyTorch:</strong> Research-friendly, dynamic graphs
                </li>
                <li>Both support GPU acceleration</li>
                <li>Both have large communities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use GPU for faster training</li>
                <li>✓ Start with transfer learning</li>
                <li>✓ Monitor training with callbacks</li>
                <li>✓ Use data augmentation</li>
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
        packages={["numpy"]}
      />
    </div>
  );
};

export default DeepLearningTutorial;
