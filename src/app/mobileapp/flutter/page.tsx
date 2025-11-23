"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

const FlutterTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Flutter",
      content:
        "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language.",
      examples: [
        {
          code: `// Install Flutter
// Download from https://flutter.dev

// Verify installation
flutter doctor

// Create new Flutter project
flutter create my_app

// Run the app
cd my_app
flutter run`,
          description: "Setting up Flutter development environment",
        },
      ],
    },
    {
      title: "Dart Basics",
      content:
        "Dart is the programming language used by Flutter. Learn the fundamentals before diving into Flutter development.",
      examples: [
        {
          code: `void main() {
  // Variables
  var name = 'Flutter';
  String framework = 'Mobile Development';
  int version = 3;
  
  // Print
  print('$name for $framework');
  
  // Functions
  String greet(String name) {
    return 'Hello, $name!';
  }
  
  print(greet('Developer'));
  
  // Lists
  List<String> frameworks = ['Flutter', 'React Native', 'Ionic'];
  frameworks.forEach((f) => print(f));
  
  // Maps
  Map<String, dynamic> app = {
    'name': 'My App',
    'version': 1.0,
    'isPublished': false,
  };
}`,
          description: "Basic Dart syntax and data types",
        },
      ],
    },
    {
      title: "Widgets and Layouts",
      content:
        "Everything in Flutter is a widget. Learn how to build UIs using Flutter's rich set of widgets.",
      examples: [
        {
          code: `import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Hello Flutter'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Welcome to Flutter!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                print('Button pressed!');
              },
              child: Text('Click Me'),
            ),
          ],
        ),
      ),
    );
  }
}`,
          description: "Basic Flutter app structure with widgets",
        },
      ],
    },
    {
      title: "Stateful Widgets",
      content:
        "Learn how to create interactive widgets that can change their state and update the UI dynamically.",
      examples: [
        {
          code: `import 'package:flutter/material.dart';

class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Counter App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'You have pushed the button this many times:',
              style: TextStyle(fontSize: 16),
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}`,
          description: "Stateful widget with counter example",
        },
      ],
    },
    {
      title: "Navigation and Routing",
      content:
        "Implement navigation between screens in Flutter using Navigator and named routes.",
      examples: [
        {
          code: `import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => HomeScreen(),
      '/details': (context) => DetailsScreen(),
    },
  ));
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home')),
      body: Center(
        child: ElevatedButton(
          child: Text('Go to Details'),
          onPressed: () {
            Navigator.pushNamed(context, '/details');
          },
        ),
      ),
    );
  }
}

class DetailsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Details')),
      body: Center(
        child: ElevatedButton(
          child: Text('Go Back'),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}`,
          description: "Navigation with named routes",
        },
      ],
    },
    {
      title: "HTTP Requests and API Integration",
      content:
        "Learn how to fetch data from APIs and display it in your Flutter app using the http package.",
      examples: [
        {
          code: `// Add to pubspec.yaml:
// dependencies:
//   http: ^0.13.5

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DataFetchScreen extends StatefulWidget {
  @override
  _DataFetchScreenState createState() => _DataFetchScreenState();
}

class _DataFetchScreenState extends State<DataFetchScreen> {
  List<dynamic> posts = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    final response = await http.get(
      Uri.parse('https://jsonplaceholder.typicode.com/posts')
    );
    
    if (response.statusCode == 200) {
      setState(() {
        posts = json.decode(response.body);
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('API Data')),
      body: isLoading
          ? Center(child: CircularProgressIndicator())
          : ListView.builder(
              itemCount: posts.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(posts[index]['title']),
                  subtitle: Text(posts[index]['body']),
                );
              },
            ),
    );
  }
}`,
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
            Flutter Tutorial
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Flutter and Dart to build beautiful, natively compiled
          applications for mobile, web, and desktop from a single codebase.
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
              src="https://www.youtube.com/embed/j-LOab_PzzU?si=ioIdwusfW7pYzM97"
              title="Flutter Tutorial"
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
                    flutter create
                  </code>{" "}
                  - Create new project
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    flutter run
                  </code>{" "}
                  - Run the app
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    flutter doctor
                  </code>{" "}
                  - Check setup
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    flutter pub get
                  </code>{" "}
                  - Install dependencies
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use const constructors when possible</li>
                <li>✓ Extract widgets for reusability</li>
                <li>✓ Use StatefulWidget only when needed</li>
                <li>✓ Follow Material Design guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterTutorial;
