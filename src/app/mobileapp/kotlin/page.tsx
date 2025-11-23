"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

const KotlinTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Kotlin and Android",
      content:
        "Kotlin is Google's preferred language for Android development. Learn Kotlin fundamentals and start building Android apps with modern tools.",
      examples: [
        {
          code: `// Kotlin Basics
fun main() {
    // Variables
    val appName = "My Android App"  // Immutable
    var version = 1.0  // Mutable
    
    println("Welcome to $appName v$version")
    
    // Functions
    fun greet(name: String): String {
        return "Hello, $name!"
    }
    
    println(greet("Developer"))
    
    // Lists
    val frameworks = listOf("Jetpack Compose", "Room", "Retrofit")
    frameworks.forEach { println(it) }
    
    // Null safety
    var nullableString: String? = null
    println(nullableString?.length ?: "String is null")
}`,
          description: "Basic Kotlin syntax and features",
        },
      ],
    },
    {
      title: "Android Activity and Layouts",
      content:
        "Learn how to create Activities and design user interfaces using XML layouts in Android.",
      examples: [
        {
          code: `// MainActivity.kt
package com.example.myapp

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private lateinit var textView: TextView
    private lateinit var button: Button
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        textView = findViewById(R.id.textView)
        button = findViewById(R.id.button)
        
        button.setOnClickListener {
            textView.text = "Button Clicked!"
        }
    }
}`,
          description: "Basic Activity with button click handler",
        },
        {
          code: `<!-- activity_main.xml -->
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    android:gravity="center">
    
    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello Android!"
        android:textSize="24sp"
        android:textStyle="bold"/>
    
    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me"
        android:layout_marginTop="20dp"/>
        
</LinearLayout>`,
          description: "XML layout with TextView and Button",
        },
      ],
    },
    {
      title: "Jetpack Compose (Modern UI)",
      content:
        "Jetpack Compose is Android's modern toolkit for building native UI with Kotlin. Learn declarative UI development.",
      examples: [
        {
          code: `import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApp()
        }
    }
}

@Composable
fun MyApp() {
    var count by remember { mutableStateOf(0) }
    
    MaterialTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "Count: $count",
                    style = MaterialTheme.typography.headlineLarge
                )
                Spacer(modifier = Modifier.height(16.dp))
                Button(onClick = { count++ }) {
                    Text("Increment")
                }
            }
        }
    }
}`,
          description: "Jetpack Compose counter app",
        },
      ],
    },
    {
      title: "RecyclerView and Lists",
      content:
        "Display scrollable lists efficiently using RecyclerView, the standard component for lists in Android.",
      examples: [
        {
          code: `// Item data class
data class Item(val id: Int, val title: String, val description: String)

// Adapter
class ItemAdapter(private val items: List<Item>) : 
    RecyclerView.Adapter<ItemAdapter.ViewHolder>() {
    
    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val titleText: TextView = view.findViewById(R.id.titleText)
        val descText: TextView = view.findViewById(R.id.descText)
    }
    
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_layout, parent, false)
        return ViewHolder(view)
    }
    
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = items[position]
        holder.titleText.text = item.title
        holder.descText.text = item.description
    }
    
    override fun getItemCount() = items.size
}

// In Activity
val items = listOf(
    Item(1, "Kotlin", "Modern Android language"),
    Item(2, "Jetpack", "Android libraries"),
    Item(3, "Compose", "Declarative UI")
)

val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
recyclerView.layoutManager = LinearLayoutManager(this)
recyclerView.adapter = ItemAdapter(items)`,
          description: "RecyclerView with custom adapter",
        },
      ],
    },
    {
      title: "Navigation Component",
      content:
        "Implement navigation between fragments using Android's Navigation Component.",
      examples: [
        {
          code: `// Add to build.gradle
dependencies {
    implementation "androidx.navigation:navigation-fragment-ktx:2.7.0"
    implementation "androidx.navigation:navigation-ui-ktx:2.7.0"
}

// In Fragment
import androidx.navigation.fragment.findNavController

class HomeFragment : Fragment() {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        val button = view.findViewById<Button>(R.id.navigateButton)
        button.setOnClickListener {
            findNavController().navigate(R.id.action_home_to_details)
        }
    }
}`,
          description: "Fragment navigation setup",
        },
      ],
    },
    {
      title: "Retrofit and API Calls",
      content:
        "Learn how to make network requests and fetch data from APIs using Retrofit library.",
      examples: [
        {
          code: `// Add to build.gradle
dependencies {
    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
}

// Data model
data class Post(
    val id: Int,
    val title: String,
    val body: String
)

// API interface
interface ApiService {
    @GET("posts")
    suspend fun getPosts(): List<Post>
}

// Retrofit instance
object RetrofitClient {
    private const val BASE_URL = "https://jsonplaceholder.typicode.com/"
    
    val apiService: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }
}

// In ViewModel or Activity
lifecycleScope.launch {
    try {
        val posts = RetrofitClient.apiService.getPosts()
        // Update UI with posts
    } catch (e: Exception) {
        // Handle error
    }
}`,
          description: "Retrofit setup for API calls",
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
            Android Kotlin Tutorial
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Kotlin and Android development. Learn modern Android app
          development with Jetpack Compose and essential Android components.
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
              src="https://www.youtube.com/embed/mXjZQX3UzOs?si=FesG3mo2piSh1bMq"
              title="Kotlin Tutorial"
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
                  <code className="bg-white px-2 py-0.5 rounded">
                    Android Studio
                  </code>{" "}
                  - Official IDE
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    Jetpack Compose
                  </code>{" "}
                  - Modern UI toolkit
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">Retrofit</code>{" "}
                  - HTTP client
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">Room</code> -
                  Database library
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use Jetpack Compose for new projects</li>
                <li>✓ Follow Material Design guidelines</li>
                <li>✓ Implement MVVM architecture</li>
                <li>✓ Test on multiple device sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KotlinTutorial;
