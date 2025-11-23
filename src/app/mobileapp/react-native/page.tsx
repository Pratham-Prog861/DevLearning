"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

const ReactNativeTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to React Native",
      content:
        "React Native is a popular framework for building native mobile applications using JavaScript and React. It allows you to write code once and deploy to both iOS and Android platforms.",
      examples: [
        {
          code: `// Create a new React Native project
npx react-native init MyApp

// Navigate to project
cd MyApp

// Run on iOS
npx react-native run-ios

// Run on Android
npx react-native run-android`,
          description: "Setting up a new React Native project",
        },
      ],
    },
    {
      title: "Core Components",
      content:
        "React Native provides built-in components that map to native UI elements. Learn the essential components for building mobile interfaces.",
      examples: [
        {
          code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native!</Text>
      <Text style={styles.subtitle}>Build native apps with React</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});

export default App;`,
          description: "Basic View and Text components with styling",
        },
      ],
    },
    {
      title: "Handling User Input",
      content:
        "Learn how to handle user interactions with buttons, text inputs, and touch events in React Native.",
      examples: [
        {
          code: `import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const InputExample = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleSubmit = () => {
    setDisplayText(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {displayText ? (
        <Text style={styles.result}>You entered: {displayText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default InputExample;`,
          description: "TextInput and Button components with state management",
        },
      ],
    },
    {
      title: "Lists and ScrollView",
      content:
        "Display scrollable lists of data using FlatList and ScrollView components.",
      examples: [
        {
          code: `import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
];

const ListExample = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
});

export default ListExample;`,
          description: "FlatList for efficient scrollable lists",
        },
      ],
    },
    {
      title: "Navigation",
      content:
        "Implement navigation between screens using React Navigation, the most popular navigation library for React Native.",
      examples: [
        {
          code: `// Install React Navigation
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack`,
          description: "Install React Navigation dependencies",
        },
        {
          code: `import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
          description: "Basic stack navigation setup",
        },
      ],
    },
    {
      title: "API Calls and Data Fetching",
      content:
        "Learn how to fetch data from APIs and display it in your React Native app.",
      examples: [
        {
          code: `import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const DataFetchExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
};

export default DataFetchExample;`,
          description: "Fetching and displaying API data",
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
          href="/mobileapp"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Mobile App
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            React Native Tutorial
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master React Native and build cross-platform mobile applications.
          Learn components, navigation, styling, and API integration.
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
              src="https://www.youtube.com/embed/JKccS9k56_I?si=BaptSuPT9-zvYewH"
              title="React Native Tutorial"
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
            </div>
          ))}
        </div>

        {/* Quick Reference Card */}
        <div className="mt-12 bg-gradient-to-br from-[#A435F0]/5 to-[#A435F0]/10 border border-[#A435F0]/20 rounded-sm p-6">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Essential Commands
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    npx react-native init
                  </code>{" "}
                  - Create new project
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    npm start
                  </code>{" "}
                  - Start Metro bundler
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    npx react-native run-ios
                  </code>{" "}
                  - Run on iOS
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    npx react-native run-android
                  </code>{" "}
                  - Run on Android
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use functional components with hooks</li>
                <li>✓ Optimize FlatList with proper keys</li>
                <li>✓ Use StyleSheet for better performance</li>
                <li>✓ Test on both iOS and Android</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeTutorial;
