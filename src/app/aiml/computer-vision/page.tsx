"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import { PythonCompiler } from "@/components/PythonCompiler";

const ComputerVisionTutorial = () => {
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
      title: "Introduction to Computer Vision",
      content:
        "Computer Vision enables computers to understand and interpret visual information from the world. It combines image processing, machine learning, and deep learning to extract meaningful insights from images and videos.",
      examples: [
        {
          code: `# Common Computer Vision Tasks:
- Image Classification
- Object Detection
- Image Segmentation
- Facial Recognition
- Pose Estimation
- Optical Character Recognition (OCR)`,
          description: "Key applications of computer vision",
        },
      ],
    },
    {
      title: "Setting Up Computer Vision Environment",
      content:
        "Install essential libraries for computer vision including OpenCV, PIL, and deep learning frameworks.",
      examples: [
        {
          code: `# Install computer vision libraries
pip install opencv-python pillow matplotlib

# Install deep learning libraries
pip install tensorflow torch torchvision

# Install additional tools
pip install scikit-image`,
          description: "Install essential CV libraries",
        },
        {
          code: `import cv2
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt

# Verify OpenCV installation
print(f"OpenCV version: {cv2.__version__}")`,
          description: "Import and verify CV libraries",
        },
      ],
    },
    {
      title: "Image Loading and Basic Operations",
      content:
        "Learn to load, display, and perform basic operations on images using OpenCV and PIL.",
      examples: [
        {
          code: `import cv2
import matplotlib.pyplot as plt

# Load image
img = cv2.imread('image.jpg')

# Convert BGR to RGB (OpenCV uses BGR by default)
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Display image
plt.figure(figsize=(10, 6))
plt.imshow(img_rgb)
plt.axis('off')
plt.title('Original Image')
plt.show()

# Get image properties
print(f"Image shape: {img.shape}")
print(f"Image dtype: {img.dtype}")`,
          description: "Load and display images with OpenCV",
        },
        {
          code: `# Resize image
resized = cv2.resize(img, (300, 300))

# Crop image
cropped = img[100:400, 200:500]

# Rotate image
height, width = img.shape[:2]
center = (width // 2, height // 2)
rotation_matrix = cv2.getRotationMatrix2D(center, 45, 1.0)
rotated = cv2.warpAffine(img, rotation_matrix, (width, height))

# Flip image
flipped = cv2.flip(img, 1)  # 1 for horizontal, 0 for vertical`,
          description: "Basic image transformations",
        },
      ],
    },
    {
      title: "Image Preprocessing",
      content:
        "Preprocessing is crucial for improving model performance. Learn common preprocessing techniques.",
      examples: [
        {
          code: `import cv2
import numpy as np

# Convert to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Apply Gaussian blur
blurred = cv2.GaussianBlur(img, (5, 5), 0)

# Edge detection with Canny
edges = cv2.Canny(gray, 100, 200)

# Thresholding
_, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Adaptive thresholding
adaptive = cv2.adaptiveThreshold(
    gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
    cv2.THRESH_BINARY, 11, 2
)`,
          description: "Common preprocessing operations",
        },
        {
          code: `# Histogram equalization (improve contrast)
equalized = cv2.equalizeHist(gray)

# Normalize image
normalized = cv2.normalize(img, None, 0, 255, cv2.NORM_MINMAX)

# Denoise image
denoised = cv2.fastNlMeansDenoisingColored(img, None, 10, 10, 7, 21)`,
          description: "Advanced preprocessing techniques",
        },
      ],
    },
    {
      title: "Image Classification with CNN",
      content:
        "Build a Convolutional Neural Network for image classification using TensorFlow/Keras.",
      examples: [
        {
          code: `import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import cifar10

# Load CIFAR-10 dataset
(X_train, y_train), (X_test, y_test) = cifar10.load_data()

# Normalize pixel values
X_train = X_train.astype('float32') / 255.0
X_test = X_test.astype('float32') / 255.0

# Build CNN model
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.MaxPooling2D((2, 2)),
    
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    layers.Conv2D(64, (3, 3), activation='relu'),
    
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train model
history = model.fit(
    X_train, y_train,
    epochs=10,
    batch_size=64,
    validation_split=0.2
)`,
          description: "Complete CNN for image classification",
        },
      ],
    },
    {
      title: "Object Detection with Pre-trained Models",
      content:
        "Use pre-trained models for object detection. We'll use OpenCV's DNN module with pre-trained models.",
      examples: [
        {
          code: `import cv2
import numpy as np

# Load YOLO model
net = cv2.dnn.readNet('yolov3.weights', 'yolov3.cfg')
layer_names = net.getLayerNames()
output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]

# Load class names
with open('coco.names', 'r') as f:
    classes = [line.strip() for line in f.readlines()]

# Load and preprocess image
img = cv2.imread('image.jpg')
height, width = img.shape[:2]
blob = cv2.dnn.blobFromImage(img, 0.00392, (416, 416), (0, 0, 0), True, crop=False)

# Perform detection
net.setInput(blob)
outputs = net.forward(output_layers)

# Process detections
boxes = []
confidences = []
class_ids = []

for output in outputs:
    for detection in output:
        scores = detection[5:]
        class_id = np.argmax(scores)
        confidence = scores[class_id]
        
        if confidence > 0.5:
            # Get bounding box coordinates
            center_x = int(detection[0] * width)
            center_y = int(detection[1] * height)
            w = int(detection[2] * width)
            h = int(detection[3] * height)
            x = int(center_x - w / 2)
            y = int(center_y - h / 2)
            
            boxes.append([x, y, w, h])
            confidences.append(float(confidence))
            class_ids.append(class_id)

# Apply non-max suppression
indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

# Draw bounding boxes
for i in indices:
    box = boxes[i]
    x, y, w, h = box
    label = str(classes[class_ids[i]])
    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
    cv2.putText(img, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)`,
          description: "Object detection with YOLO",
        },
      ],
    },
    {
      title: "Face Detection and Recognition",
      content:
        "Detect and recognize faces in images using OpenCV's Haar Cascades and deep learning models.",
      examples: [
        {
          code: `import cv2

# Load Haar Cascade for face detection
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
)

# Load image
img = cv2.imread('people.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Detect faces
faces = face_cascade.detectMultiScale(
    gray,
    scaleFactor=1.1,
    minNeighbors=5,
    minSize=(30, 30)
)

print(f"Found {len(faces)} faces")

# Draw rectangles around faces
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

# Display result
cv2.imshow('Faces', img)
cv2.waitKey(0)
cv2.destroyAllWindows()`,
          description: "Face detection with Haar Cascades",
        },
      ],
    },
    {
      title: "Image Segmentation",
      content:
        "Image segmentation divides an image into meaningful regions. Learn semantic segmentation techniques.",
      examples: [
        {
          code: `import cv2
import numpy as np

# Load image
img = cv2.imread('image.jpg')

# Convert to different color spaces
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Define color range for segmentation (e.g., blue objects)
lower_blue = np.array([100, 50, 50])
upper_blue = np.array([130, 255, 255])

# Create mask
mask = cv2.inRange(hsv, lower_blue, upper_blue)

# Apply mask to original image
result = cv2.bitwise_and(img, img, mask=mask)

# Display results
cv2.imshow('Original', img)
cv2.imshow('Mask', mask)
cv2.imshow('Result', result)
cv2.waitKey(0)
cv2.destroyAllWindows()`,
          description: "Color-based image segmentation",
        },
        {
          code: `# K-means clustering for segmentation
img = cv2.imread('image.jpg')
img_flat = img.reshape((-1, 3))
img_flat = np.float32(img_flat)

# Define criteria and apply K-means
criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.2)
k = 5
_, labels, centers = cv2.kmeans(
    img_flat, k, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS
)

# Convert back to 8-bit values
centers = np.uint8(centers)
segmented = centers[labels.flatten()]
segmented = segmented.reshape(img.shape)`,
          description: "K-means clustering for segmentation",
        },
      ],
    },
    {
      title: "Data Augmentation",
      content:
        "Data augmentation increases dataset diversity by applying transformations to images, improving model generalization.",
      examples: [
        {
          code: `from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np

# Create data augmentation generator
datagen = ImageDataGenerator(
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True,
    zoom_range=0.2,
    shear_range=0.2,
    fill_mode='nearest'
)

# Load and prepare image
img = cv2.imread('image.jpg')
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = np.expand_dims(img, axis=0)

# Generate augmented images
i = 0
for batch in datagen.flow(img, batch_size=1):
    plt.figure(figsize=(4, 4))
    plt.imshow(batch[0].astype('uint8'))
    plt.axis('off')
    plt.show()
    i += 1
    if i >= 5:  # Generate 5 augmented images
        break`,
          description: "Data augmentation with ImageDataGenerator",
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
          <Eye className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Computer Vision Basics
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Computer Vision with OpenCV and deep learning. Learn image
          processing, object detection, face recognition, and image
          segmentation.
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
              src="https://www.youtube.com/embed/yQu_3e7MAr0?si=_B0gH_fPH6-FMwIp"
              title="Computer Vision Tutorial"
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
            <Eye className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Essential Libraries
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    opencv-python
                  </code>{" "}
                  - Image processing
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    PIL/Pillow
                  </code>{" "}
                  - Image manipulation
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    tensorflow
                  </code>{" "}
                  - Deep learning
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    matplotlib
                  </code>{" "}
                  - Visualization
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Preprocess images consistently</li>
                <li>✓ Use data augmentation</li>
                <li>✓ Leverage pre-trained models</li>
                <li>✓ Normalize pixel values</li>
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

export default ComputerVisionTutorial;
