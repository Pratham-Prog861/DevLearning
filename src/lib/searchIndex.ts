// Search index for all tutorials and content
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  path: string;
  keywords: string[];
  content?: string;
}

export const searchIndex: SearchItem[] = [
  // Frontend Development
  {
    id: "html-tutorial",
    title: "HTML Tutorial",
    description:
      "Learn HTML fundamentals - the standard markup language for creating web pages",
    category: "Frontend Development",
    path: "/frontenddev/htmltutorial",
    keywords: [
      "html",
      "markup",
      "web",
      "tags",
      "elements",
      "semantic",
      "forms",
      "frontend",
    ],
    content:
      "HTML HyperText Markup Language semantic tags header nav footer main article section forms input",
  },
  {
    id: "css-tutorial",
    title: "CSS Tutorial",
    description: "Master CSS styling and layouts for beautiful web designs",
    category: "Frontend Development",
    path: "/frontenddev/csstutorial",
    keywords: [
      "css",
      "styling",
      "layout",
      "flexbox",
      "grid",
      "responsive",
      "design",
      "frontend",
    ],
    content:
      "CSS Cascading Style Sheets styling layout flexbox grid responsive design animations",
  },
  {
    id: "javascript-frontend",
    title: "JavaScript Tutorial",
    description:
      "Learn JavaScript programming for interactive web applications",
    category: "Frontend Development",
    path: "/frontenddev/jstutorial",
    keywords: [
      "javascript",
      "js",
      "programming",
      "dom",
      "events",
      "async",
      "frontend",
    ],
    content:
      "JavaScript programming DOM manipulation events async await promises functions",
  },
  {
    id: "react-tutorial",
    title: "React.js Tutorial",
    description: "Build modern user interfaces with React.js library",
    category: "Frontend Development",
    path: "/frontenddev/reactjstutorial",
    keywords: [
      "react",
      "reactjs",
      "components",
      "hooks",
      "jsx",
      "state",
      "props",
      "frontend",
    ],
    content:
      "React components hooks useState useEffect JSX props state virtual DOM",
  },
  {
    id: "nextjs-tutorial",
    title: "Next.js Tutorial",
    description: "Create full-stack React applications with Next.js framework",
    category: "Frontend Development",
    path: "/frontenddev/nextjstutorial",
    keywords: [
      "nextjs",
      "next",
      "react",
      "ssr",
      "routing",
      "api",
      "frontend",
      "fullstack",
    ],
    content:
      "Next.js server-side rendering routing API routes static generation app router",
  },

  // Backend Development
  {
    id: "node-tutorial",
    title: "Node.js Tutorial",
    description: "Learn server-side JavaScript with Node.js runtime",
    category: "Backend Development",
    path: "/backenddev/nodetutorial",
    keywords: ["nodejs", "node", "javascript", "server", "backend", "runtime"],
    content: "Node.js JavaScript runtime server backend npm modules event loop",
  },
  {
    id: "express-tutorial",
    title: "Express.js Tutorial",
    description: "Build web applications and APIs with Express.js framework",
    category: "Backend Development",
    path: "/backenddev/expresstutorial",
    keywords: [
      "express",
      "expressjs",
      "nodejs",
      "api",
      "rest",
      "middleware",
      "backend",
    ],
    content:
      "Express.js framework middleware routing REST API HTTP requests responses",
  },
  {
    id: "mongodb-tutorial",
    title: "MongoDB Tutorial",
    description: "Master NoSQL database with MongoDB",
    category: "Backend Development",
    path: "/backenddev/mongotutorial",
    keywords: ["mongodb", "database", "nosql", "mongoose", "crud", "backend"],
    content:
      "MongoDB NoSQL database collections documents CRUD operations mongoose schema",
  },
  {
    id: "backend-allinone",
    title: "Backend All-in-One Tutorial",
    description:
      "Complete backend development guide with Node.js, Express, and MongoDB",
    category: "Backend Development",
    path: "/backenddev/allinonetutorial",
    keywords: ["backend", "nodejs", "express", "mongodb", "fullstack", "mern"],
    content:
      "Backend development Node.js Express MongoDB REST API authentication MERN stack",
  },

  // Data Structures & Algorithms
  {
    id: "dsa-python",
    title: "DSA with Python",
    description: "Learn Data Structures and Algorithms using Python",
    category: "DSA",
    path: "/dsa/pythontutorial",
    keywords: [
      "dsa",
      "python",
      "algorithms",
      "data structures",
      "coding",
      "programming",
    ],
    content:
      "Data Structures Algorithms Python arrays linked lists trees graphs sorting searching",
  },
  {
    id: "dsa-javascript",
    title: "DSA with JavaScript",
    description: "Master Data Structures and Algorithms in JavaScript",
    category: "DSA",
    path: "/dsa/jstutorial",
    keywords: ["dsa", "javascript", "algorithms", "data structures", "coding"],
    content:
      "Data Structures Algorithms JavaScript arrays objects maps sets sorting algorithms",
  },
  {
    id: "dsa-java",
    title: "DSA with Java",
    description: "Learn Data Structures and Algorithms with Java",
    category: "DSA",
    path: "/dsa/javatutorial",
    keywords: ["dsa", "java", "algorithms", "data structures", "coding", "oop"],
    content:
      "Data Structures Algorithms Java collections arrays lists trees graphs OOP",
  },
  {
    id: "dsa-cpp",
    title: "DSA with C++",
    description: "Master Data Structures and Algorithms using C++",
    category: "DSA",
    path: "/dsa/cpptutorial",
    keywords: ["dsa", "cpp", "c++", "algorithms", "data structures", "coding"],
    content:
      "Data Structures Algorithms C++ STL vectors arrays pointers memory management",
  },

  // Data Analytics
  {
    id: "python-analytics",
    title: "Python for Data Analytics",
    description: "Learn Python programming for data analysis",
    category: "Data Analytics",
    path: "/dataanalytics/python",
    keywords: ["python", "data", "analytics", "programming", "analysis"],
    content:
      "Python programming data analysis variables functions loops data types",
  },
  {
    id: "numpy-tutorial",
    title: "NumPy Tutorial",
    description: "Master numerical computing with NumPy library",
    category: "Data Analytics",
    path: "/dataanalytics/numpy",
    keywords: ["numpy", "python", "arrays", "numerical", "computing", "data"],
    content:
      "NumPy arrays numerical computing matrix operations linear algebra broadcasting",
  },
  {
    id: "pandas-tutorial",
    title: "Pandas Tutorial",
    description: "Learn data manipulation and analysis with Pandas",
    category: "Data Analytics",
    path: "/dataanalytics/pandas",
    keywords: ["pandas", "python", "dataframe", "data analysis", "csv"],
    content:
      "Pandas DataFrame Series data manipulation analysis CSV Excel data cleaning",
  },
  {
    id: "matplotlib-tutorial",
    title: "Matplotlib Tutorial",
    description: "Create data visualizations with Matplotlib",
    category: "Data Analytics",
    path: "/dataanalytics/matplotlib",
    keywords: [
      "matplotlib",
      "python",
      "visualization",
      "plotting",
      "charts",
      "graphs",
    ],
    content:
      "Matplotlib visualization plotting charts graphs line plots bar charts scatter plots",
  },

  // UI/UX Design
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description: "Learn user interface and user experience design principles",
    category: "UI/UX",
    path: "/uiux",
    keywords: [
      "ui",
      "ux",
      "design",
      "user interface",
      "user experience",
      "figma",
    ],
    content:
      "UI UX design user interface experience wireframes prototypes Figma design principles",
  },

  // GitHub
  {
    id: "github-tutorial",
    title: "GitHub Tutorial",
    description: "Master version control and collaboration with GitHub",
    category: "Tools",
    path: "/githubtutorial",
    keywords: [
      "github",
      "git",
      "version control",
      "repository",
      "commit",
      "push",
      "pull",
    ],
    content:
      "GitHub Git version control repository commit push pull branch merge collaboration",
  },

  // DevOps
  {
    id: "devops",
    title: "DevOps",
    description: "Learn DevOps principles and practices",
    category: "DevOps",
    path: "/devops",
    keywords: ["devops", "continuous integration", "continuous delivery", "automation", "infrastructure", "operations"],
    content:
      "DevOps continuous integration continuous delivery automation infrastructure operations",
  },
  {
    id: "docker-tutorial",
    title: "Docker Tutorial",
    description: "Containerization with Docker for developers",
    category: "DevOps",
    path: "/devops/docker",
    keywords: ["docker", "containerization", "containers", "devops", "virtualization"],
    content:
      "Docker containerization containers images volumes Dockerfile compose",
  },
  {
    id: "kubernetes-tutorial",
    title: "Kubernetes Tutorial",
    description: "Orchestrate containers with Kubernetes",
    category: "DevOps",
    path: "/devops/kubernetes",
    keywords: ["kubernetes", "k8s", "orchestration", "containers", "devops", "cloud native"],
    content:
      "Kubernetes k8s container orchestration pods deployments services ingress",
  },
  {
    id: "aws-devops",
    title: "AWS DevOps",
    description: "Implement DevOps practices on Amazon Web Services",
    category: "DevOps",
    path: "/devops/aws",
    keywords: ["aws", "cloud", "devops", "amazon web services", "ci/cd", "cloud computing"],
    content:
      "AWS Amazon Web Services cloud computing DevOps CI CD EC2 S3 Lambda",
  },
  {
    id: "terraform-tutorial",
    title: "Terraform Tutorial",
    description: "Infrastructure as Code with Terraform",
    category: "DevOps",
    path: "/devops/terraform",
    keywords: ["terraform", "infrastructure as code", "iac", "devops", "cloud computing", "aws", "azure", "gcp"],
    content:
      "Terraform infrastructure as code IaC cloud computing DevOps AWS Azure GCP",
  },
  {
    id: "cicd",
    title: "CI CD Pipeline",
    description: "Automate workflows with CI CD Pipeline",
    category: "DevOps",
    path: "/devops/cicd",
    keywords: ["CI CD Pipeline", "ci/cd", "continuous integration", "continuous delivery", "devops", "automation", "github", "github.com"],
    content:
      "CI CD Pipeline continuous integration continuous delivery automation github github.com",
  },

  // AI & ML
  {
    id: "ml-basics",
    title: "Machine Learning Basics",
    description: "Introduction to fundamental concepts of Machine Learning",
    category: "AI & ML",
    path: "/aiml/machine-learning",
    keywords: ["machine learning", "ml", "ai", "artificial intelligence", "data science", "algorithms", "supervised learning", "unsupervised learning"],
    content:
      "Machine Learning AI artificial intelligence data science algorithms supervised unsupervised learning neural networks deep learning",
  },
  {
    id: "python",
    title: "Python for AI & ML",
    description: "Learn Python for AI & Machine Learning",
    category: "AI & ML",
    path: "/aiml/python",
    keywords: ["python", "ai", "machine learning", "ml", "data science", "algorithms", "supervised learning", "unsupervised learning"],
    content:
      "Python AI artificial intelligence data science algorithms supervised unsupervised learning neural networks deep learning",
  },
  {
    id: "ai-web-apps",
    title: "AI Web Apps",
    description: "Build web applications with AI",
    category: "AI & ML",
    path: "/aiml/web-apps",
    keywords: ["ai", "machine learning", "ml", "data science", "algorithms", "supervised learning", "unsupervised learning"],
    content:
      "AI artificial intelligence data science algorithms supervised unsupervised learning neural networks deep learning",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Learn Computer Vision for AI & Machine Learning",
    category: "AI & ML",
    path: "/aiml/computer-vision",
    keywords: ["computer vision", "cv", "ai", "machine learning", "ml", "data science", "algorithms", "supervised learning", "unsupervised learning"],
    content:
      "Computer Vision AI artificial intelligence data science algorithms supervised unsupervised learning neural networks deep learning",
  },
  {
    id: "nlp",
    title: "NLP",
    description: "Learn NLP for AI & Machine Learning",
    category: "AI & ML",
    path: "/aiml/nlp",
    keywords: ["nlp", "natural language processing", "ai", "machine learning", "ml", "data science", "algorithms", "supervised learning", "unsupervised learning"],
    content:
      "NLP AI artificial intelligence data science algorithms supervised unsupervised learning neural networks deep learning",
  },
  {
    id: "tensorflow-pytorch",
    title: "TensorFlow & PyTorch",
    description: "Learn TensorFlow & PyTorch for AI & Machine Learning",
    category: "AI & ML",
    path: "/aiml/tensorflow-pytorch",
    keywords: ["tensorflow", "pytorch", "ai", "machine learning", "ml", "data science", "algorithms", "supervised learning", "unsupervised learning"],
    content:
      "TensorFlow PyTorch AI artificial intelligence data science algorithms supervised unsupervised learning neural networks deep learning",
  },

  // Mobile App
  {
    id: "flutter",
    title: "Flutter",
    description: "Learn Flutter for Mobile App Development",
    category: "Mobile App",
    path: "/mobileapp/flutter",
    keywords: ["flutter", "mobile app", "android", "ios", "dart", "ui", "ux", "development", "programming", "coding"],
    content:
      "Flutter mobile app android ios dart ui ux development programming coding",
  },
  {
    id: "react-native",
    title: "React Native",
    description: "Learn React Native for Mobile App Development",
    category: "Mobile App",
    path: "/mobileapp/react-native",
    keywords: ["react native", "mobile app", "android", "ios", "javascript", "ui", "ux", "development", "programming", "coding"],
    content:
      "React Native mobile app android ios javascript ui ux development programming coding",
  },
  {
    id: "kotlin",
    title: "Kotlin",
    description: "Learn Kotlin for Mobile App Development",
    category: "Mobile App",
    path: "/mobileapp/kotlin",
    keywords: ["kotlin", "mobile app", "android", "ios", "java", "ui", "ux", "development", "programming", "coding"],
    content:
      "Kotlin mobile app android ios java ui ux development programming coding",
  },
  {
    id: "swift",
    title: "Swift",
    description: "Learn Swift for Mobile App Development",
    category: "Mobile App",
    path: "/mobileapp/swift",
    keywords: ["swift", "mobile app", "ios", "swiftui", "ui", "ux", "development", "programming", "coding"],
    content:
      "Swift mobile app ios swiftui ui ux development programming coding",
  },
  {
    id: "mobile-ui-ux",
    title: "Mobile UI/UX",
    description: "Learn Mobile UI/UX for Mobile App Development",
    category: "Mobile App",
    path: "/mobileapp/mobile-ui-ux",
    keywords: ["mobile ui/ux", "mobile app", "android", "ios", "ui", "ux", "development", "programming", "coding"],
    content:
      "Mobile UI/UX mobile app android ios ui ux development programming coding",
  },
  {
    id: "deployment",
    title: "Deployment for Mobile App",
    description: "Learn Deployment for Mobile App Development",
    category: "Mobile App",
    path: "/mobileapp/deployment",
    keywords: ["deployment", "mobile app", "android", "ios", "ui", "ux", "development", "programming", "coding"],
    content:
      "Deployment mobile app android ios ui ux development programming coding",
  },

  // Resources
  {
    id: "resources",
    title: "Developer Resources",
    description: "Curated resources for developers",
    category: "Resources",
    path: "/resources",
    keywords: ["resources", "tools", "learning", "documentation", "references"],
    content:
      "Developer resources tools documentation references learning materials",
  },

  // Career Guidance
  {
    id: "choose-path",
    title: "Choose Your Path",
    description: "Find the right development path for your career",
    category: "Career",
    path: "/choose",
    keywords: [
      "career",
      "path",
      "guidance",
      "frontend",
      "backend",
      "fullstack",
    ],
    content:
      "Career guidance development path frontend backend fullstack data science",
  },
];

// Search function with fuzzy matching
export function searchContent(
  query: string
): (SearchItem & { score: number })[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const words = searchTerm.split(/\s+/);

  const results = searchIndex.map((item) => {
    let score = 0;

    // Exact title match (highest priority)
    if (item.title.toLowerCase() === searchTerm) {
      score += 100;
    } else if (item.title.toLowerCase().includes(searchTerm)) {
      score += 50;
    }

    // Title word matches
    words.forEach((word) => {
      if (item.title.toLowerCase().includes(word)) {
        score += 20;
      }
    });

    // Description matches
    if (item.description.toLowerCase().includes(searchTerm)) {
      score += 30;
    }
    words.forEach((word) => {
      if (item.description.toLowerCase().includes(word)) {
        score += 10;
      }
    });

    // Keyword matches
    item.keywords.forEach((keyword) => {
      if (keyword === searchTerm) {
        score += 40;
      } else if (keyword.includes(searchTerm)) {
        score += 25;
      }
      words.forEach((word) => {
        if (keyword.includes(word)) {
          score += 8;
        }
      });
    });

    // Content matches
    if (item.content) {
      if (item.content.toLowerCase().includes(searchTerm)) {
        score += 15;
      }
      words.forEach((word) => {
        if (item.content?.toLowerCase().includes(word)) {
          score += 5;
        }
      });
    }

    // Category matches
    if (item.category.toLowerCase().includes(searchTerm)) {
      score += 20;
    }

    return { ...item, score };
  });

  // Filter items with score > 0 and sort by score
  return results
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Return top 10 results
}
