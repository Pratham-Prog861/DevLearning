"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

const SwiftTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Swift and iOS Development",
      content:
        "Swift is Apple's powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS. Learn the basics of Swift and Xcode to start building iOS apps.",
      examples: [
        {
          code: `// Swift Basics
var greeting = "Hello, iOS!"
let appName = "My First App"
var version = 1.0

print(greeting)

// Functions
func greetUser(name: String) -> String {
    return "Welcome, \\(name)!"
}

print(greetUser(name: "Developer"))

// Arrays and Loops
let frameworks = ["SwiftUI", "UIKit", "CoreData"]
for framework in frameworks {
    print(framework)
}`,
          description: "Basic Swift syntax and fundamentals",
        },
      ],
    },
    {
      title: "SwiftUI Basics",
      content:
        "SwiftUI is Apple's modern framework for building user interfaces across all Apple platforms with declarative Swift syntax.",
      examples: [
        {
          code: `import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Hello, SwiftUI!")
                .font(.largeTitle)
                .fontWeight(.bold)
                .foregroundColor(.blue)
            
            Text("Build amazing iOS apps")
                .font(.subheadline)
                .foregroundColor(.gray)
            
            Button(action: {
                print("Button tapped!")
            }) {
                Text("Get Started")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}`,
          description: "Basic SwiftUI view with text and button",
        },
      ],
    },
    {
      title: "State Management",
      content:
        "Learn how to manage state in SwiftUI using @State, @Binding, and @ObservedObject property wrappers.",
      examples: [
        {
          code: `import SwiftUI

struct CounterView: View {
    @State private var count = 0
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Count: \\(count)")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            HStack(spacing: 20) {
                Button(action: {
                    count -= 1
                }) {
                    Image(systemName: "minus.circle.fill")
                        .font(.largeTitle)
                        .foregroundColor(.red)
                }
                
                Button(action: {
                    count += 1
                }) {
                    Image(systemName: "plus.circle.fill")
                        .font(.largeTitle)
                        .foregroundColor(.green)
                }
            }
            
            Button("Reset") {
                count = 0
            }
            .padding()
            .background(Color.gray.opacity(0.2))
            .cornerRadius(8)
        }
        .padding()
    }
}`,
          description: "State management with @State property wrapper",
        },
      ],
    },
    {
      title: "Lists and Navigation",
      content:
        "Create scrollable lists and implement navigation between views in SwiftUI.",
      examples: [
        {
          code: `import SwiftUI

struct Item: Identifiable {
    let id = UUID()
    let title: String
    let description: String
}

struct ListView: View {
    let items = [
        Item(title: "SwiftUI", description: "Modern UI framework"),
        Item(title: "UIKit", description: "Classic UI framework"),
        Item(title: "CoreData", description: "Data persistence")
    ]
    
    var body: some View {
        NavigationView {
            List(items) { item in
                NavigationLink(destination: DetailView(item: item)) {
                    VStack(alignment: .leading) {
                        Text(item.title)
                            .font(.headline)
                        Text(item.description)
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    }
                }
            }
            .navigationTitle("iOS Frameworks")
        }
    }
}

struct DetailView: View {
    let item: Item
    
    var body: some View {
        VStack {
            Text(item.title)
                .font(.largeTitle)
            Text(item.description)
                .font(.body)
                .padding()
        }
        .navigationTitle("Details")
    }
}`,
          description: "List view with navigation",
        },
      ],
    },
    {
      title: "Networking and API Calls",
      content:
        "Learn how to fetch data from APIs and display it in your iOS app using URLSession and Codable.",
      examples: [
        {
          code: `import SwiftUI

struct Post: Codable, Identifiable {
    let id: Int
    let title: String
    let body: String
}

class NetworkManager: ObservableObject {
    @Published var posts: [Post] = []
    @Published var isLoading = false
    
    func fetchPosts() {
        isLoading = true
        guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts") else {
            return
        }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            if let data = data {
                if let decodedPosts = try? JSONDecoder().decode([Post].self, from: data) {
                    DispatchQueue.main.async {
                        self.posts = decodedPosts
                        self.isLoading = false
                    }
                }
            }
        }.resume()
    }
}

struct PostsView: View {
    @StateObject private var networkManager = NetworkManager()
    
    var body: some View {
        NavigationView {
            Group {
                if networkManager.isLoading {
                    ProgressView()
                } else {
                    List(networkManager.posts) { post in
                        VStack(alignment: .leading) {
                            Text(post.title)
                                .font(.headline)
                            Text(post.body)
                                .font(.caption)
                                .foregroundColor(.gray)
                        }
                    }
                }
            }
            .navigationTitle("Posts")
            .onAppear {
                networkManager.fetchPosts()
            }
        }
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
            iOS Swift Tutorial
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Swift and SwiftUI to build native iOS applications. Learn
          modern iOS development with Apple's latest frameworks.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Video Tutorial ( Check his full course on YT)
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0HPOxthY6q0?si=0vsA3MWAFqrigafN"
              title="Swift Tutorial"
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
                Essential Tools
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">Xcode</code> -
                  Official IDE for iOS development
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">SwiftUI</code>{" "}
                  - Modern UI framework
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">UIKit</code> -
                  Classic UI framework
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">CoreData</code>{" "}
                  - Data persistence
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use SwiftUI for new projects</li>
                <li>✓ Follow Apple's Human Interface Guidelines</li>
                <li>✓ Use property wrappers effectively</li>
                <li>✓ Test on real devices when possible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiftTutorial;
