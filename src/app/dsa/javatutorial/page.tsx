"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const JavaTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const openCompiler = (code: string) => {
    setCurrentCode(code);
    setConsoleOutput([]);
    setIsCompilerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = 'unset';
  };

  const runCode = async () => {
    setIsRunning(true);
    setConsoleOutput(['⏳ Compiling and running Java code...']);

    try {
      // Extract the public class name from the code
      const classMatch = currentCode.match(/public\s+class\s+(\w+)/);
      const className = classMatch ? classMatch[1] : 'Main';
      const fileName = `${className}.java`;

      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: 'java',
          version: '15.0.2',
          files: [
            {
              name: fileName,
              content: currentCode,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Compilation failed');
      }

      const result = await response.json();
      
      const output: string[] = ['✅ Output:', ''];
      
      if (result.run && result.run.stdout) {
        output.push(...result.run.stdout.trim().split('\n'));
      }
      
      if (result.run && result.run.stderr) {
        output.push('', '⚠️ Errors/Warnings:', '');
        output.push(...result.run.stderr.trim().split('\n'));
      }
      
      if (!result.run.stdout && !result.run.stderr) {
        output.push('(No output - code compiled successfully)');
      }
      
      setConsoleOutput(output);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setConsoleOutput([
        '❌ Error running code',
        '',
        errorMessage,
        '',
        '💡 Alternative options:',
        '• Try online: jdoodle.com, programiz.com',
        '• Install locally: JDK (Java Development Kit)',
        '• Use IDE: IntelliJ IDEA, Eclipse, VS Code',
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const tutorials = [
    {
      title: "Introduction to Java",
      content:
        "Java is a class-based, object-oriented programming language designed to be platform-independent and secure.",
      examples: [
        {
          code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
          description: "A simple Hello World program in Java",
        },
      ],
    },
    {
      title: "Java Basics",
      content:
        "Learn fundamental Java concepts including variables, data types, and basic operations.",
      examples: [
        {
          code: `public class Main {
    public static void main(String[] args) {
        // Data types and variables
        int number = 42;
        double pi = 3.14159;
        char grade = 'A';
        boolean isValid = true;
        String name = "John";
        
        // Print all variables
        System.out.println("Number: " + number);
        System.out.println("Pi: " + pi);
        System.out.println("Grade: " + grade);
        System.out.println("Is Valid: " + isValid);
        System.out.println("Name: " + name);
    }
}`,
          description: "Common data types and variable declarations in Java",
        },
        {
          code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Basic array declaration
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Array elements:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        // ArrayList example
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Programming");
        
        System.out.println("ArrayList elements:");
        for (String item : list) {
            System.out.println(item);
        }
    }
}`,
          description: "Arrays and ArrayList examples with output",
        },
      ],
    },
    {
      title: "Object-Oriented Programming",
      content:
        "Java is built around OOP principles: encapsulation, inheritance, polymorphism, and abstraction.",
      examples: [
        {
          code: `public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Alice", 20);
        Student student2 = new Student("Bob", 22);
        
        student1.displayInfo();
        student1.study();
        
        student2.displayInfo();
        student2.study();
    }
}

class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void study() {
        System.out.println(name + " is studying.");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}`,
          description: "A simple class demonstrating OOP concepts with output",
        },
      ],
    },
    {
        title: "Control Flow and Loops",
        content: "Learn how to control program flow using conditional statements and loops in Java.",
        examples: [
            {
                code: `public class Main {
    public static void main(String[] args) {
        // If-else statement
        int score = 85;
        char grade;
        
        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else {
            grade = 'C';
        }
        System.out.println("Score: " + score + ", Grade: " + grade);
        
        // For loop
        System.out.println("For loop output:");
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
        
        // While loop
        System.out.println("While loop output:");
        int count = 0;
        while (count < 3) {
            System.out.println("Count: " + count);
            count++;
        }
    }
}`,
                description: "Examples of control flow statements and loops in Java"
            }
        ]
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, idx: number) => {
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
          href="/dsa" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Modules
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">
          Java Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Java programming with our comprehensive tutorial. Learn
          object-oriented programming through examples and hands-on practice.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Full Playlist (Watch on Youtube)
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yRpLlJmRo2w?si=9u95D8IdaY8tgjhk"
              title="Java Tutorial for Beginners"
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
                {tutorial.examples.map((example, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="relative">
                      <pre className="bg-gray-100 p-3 rounded-sm overflow-x-auto">
                        <code className="text-[#A435F0]">{example.code}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(example.code, idx)}
                        className="absolute top-2 right-2 p-2 rounded-sm bg-gray-200/50 backdrop-blur-sm text-gray-600 hover:bg-[#A435F0]/10 hover:text-[#A435F0] transition-all duration-300 transform active:scale-95"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === idx ? (
                          <Check size={16} className="text-green-500 animate-in fade-in duration-300" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {example.description}
                    </p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => openCompiler(tutorial.examples[0].code)}
                className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm"
              >
                Try it Yourself
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Compiler Modal */}
      {isCompilerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
          onWheel={(e) => e.stopPropagation()}
          onClick={(e) => e.target === e.currentTarget && closeCompiler()}
        >
          <div className="bg-white rounded-sm w-full max-w-6xl h-[80vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[#000000]">Java Compiler</h3>
              <button
                onClick={closeCompiler}
                className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
              >
                <X className="text-black" size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              <div className="flex-1 flex flex-col border-r border-gray-200">
                <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Java Code</span>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-white text-sm transition-colors ${
                      isRunning 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#A435F0] hover:bg-[#8c2ad1]'
                    }`}
                  >
                    <Play size={14} />
                    {isRunning ? 'Running...' : 'Run'}
                  </button>
                </div>
                <textarea
                  value={currentCode}
                  onChange={(e) => setCurrentCode(e.target.value)}
                  className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none bg-gray-50 text-black"
                  spellCheck={false}
                />
              </div>

              <div className="flex-1 flex flex-col">
                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Output</span>
                </div>
                <div className="flex-1 overflow-auto bg-gray-900 p-4">
                  {consoleOutput.length > 0 ? (
                    consoleOutput.map((line, idx) => (
                      <div key={idx} className="text-green-400 font-mono text-sm mb-1">
                        {line}
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 font-mono text-sm">
                      Click Run to see output...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JavaTutorial;