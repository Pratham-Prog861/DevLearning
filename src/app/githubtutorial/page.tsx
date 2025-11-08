"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X } from "lucide-react";
import Link from "next/link";

const gitTutorials = [
  {
    title: "Introduction to Git",
    content:
      "Git is a distributed version control system that helps you track changes in your code and collaborate with others.",
    examples: [
      {
        code: "git --version",
        description: "Check your installed Git version.",
      },
      {
        code: "git config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"",
        description: "Set your global username and email for Git commits.",
      },
    ],
  },
  {
    title: "Initialize a Repository",
    content:
      "Start tracking your project with Git by initializing a new repository.",
    examples: [
      {
        code: "git init",
        description: "Initialize a new Git repository in your current directory.",
      },
    ],
  },
  {
    title: "Basic Workflow",
    content:
      "Add files, commit changes, and view your commit history.",
    examples: [
      {
        code: "git add .\ngit commit -m 'Initial commit'\ngit log",
        description: "Add all files, commit with a message, and view commit history.",
      },
    ],
  },
  {
    title: "Connect to GitHub",
    content:
      "Push your local repository to GitHub to collaborate and back up your code.",
    examples: [
      {
        code: "git remote add origin https://github.com/yourusername/your-repo.git\ngit push -u origin main",
        description: "Connect to a remote GitHub repository and push your code.",
      },
    ],
  },
  {
    title: "Clone a Repository",
    content:
      "Download a project from GitHub to your local machine.",
    examples: [
      {
        code: "git clone https://github.com/username/repo.git",
        description: "Clone a repository from GitHub.",
      },
    ],
  },
];

const GithubTutorial = () => {
  const [copiedIndex, setCopiedIndex] = useState<{card: number, example: number} | null>(null);
  const [isVisualizerOpen, setIsVisualizerOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const copyToClipboard = (text: string, cardIdx: number, exampleIdx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex({ card: cardIdx, example: exampleIdx });
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const openVisualizer = () => {
    setCurrentStep(0);
    setIsVisualizerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVisualizer = () => {
    setIsVisualizerOpen(false);
    document.body.style.overflow = 'unset';
  };

  const gitWorkflowSteps = [
    {
      title: "Step 1: Initialize Git",
      description: "Start tracking your project with Git",
      command: "git init",
      visual: "🎯 Initialize Repository",
      explanation: "Creates a new Git repository in your project folder. This creates a hidden .git folder that tracks all your changes. Run this once when starting a new project."
    },
    {
      title: "Step 2: Working Directory",
      description: "Your local files where you make changes",
      command: "# Create or edit files\ntouch index.html\ncode .",
      visual: "📁 Local Files",
      explanation: "This is where you write and modify your code. Changes here are untracked by Git until you add them. You can create, edit, or delete files freely."
    },
    {
      title: "Step 3: git add",
      description: "Stage your changes",
      command: "git add .\n# or\ngit add filename.txt",
      visual: "📦 Staging Area",
      explanation: "Moves changes from working directory to staging area. 'git add .' stages all changes, or you can stage specific files. You're preparing files for commit."
    },
    {
      title: "Step 4: Staging Area",
      description: "Changes ready to be committed",
      command: "git status",
      visual: "📦 Staged Changes",
      explanation: "A holding area for changes you want to include in your next commit. Use 'git status' to see what's staged. You can review before committing."
    },
    {
      title: "Step 5: git commit",
      description: "Save your changes permanently",
      command: "git commit -m 'Add new feature'",
      visual: "💾 Local Repository",
      explanation: "Creates a snapshot of staged changes in your local Git history. Each commit has a unique ID (hash). Write clear commit messages to describe what changed."
    },
    {
      title: "Step 6: Local Repository",
      description: "Your local Git history",
      command: "git log --oneline",
      visual: "💾 Commit History",
      explanation: "All your commits are stored here. You can view history with 'git log', revert changes, create branches, and work offline. Your commits are safe locally."
    },
    {
      title: "Step 7: Connect Remote",
      description: "Link to GitHub repository",
      command: "git remote add origin https://github.com/username/repo.git",
      visual: "🔗 Link to GitHub",
      explanation: "Connects your local repository to a remote GitHub repository. 'origin' is the default name for the remote. Create the repo on GitHub first, then run this command."
    },
    {
      title: "Step 8: git push",
      description: "Upload to GitHub",
      command: "git push -u origin main\n# or\ngit push origin main",
      visual: "💾 → ☁️ Remote (GitHub)",
      explanation: "Sends your local commits to GitHub. '-u' sets upstream tracking (only needed first time). Now others can see your changes and collaborate."
    },
    {
      title: "Step 9: GitHub Repository",
      description: "Code on GitHub (Remote)",
      command: "# View on GitHub\nhttps://github.com/username/repo",
      visual: "☁️ GitHub Repository",
      explanation: "Your code is now backed up and accessible to collaborators. You can share the link, review code, create pull requests, and manage issues on GitHub."
    },
    {
      title: "Step 10: git clone",
      description: "Download a repository",
      command: "git clone https://github.com/username/repo.git",
      visual: "☁️ → 📁 Clone to Local",
      explanation: "Downloads a complete copy of a GitHub repository to your computer. This includes all files, commits, and branches. Use this to work on existing projects."
    },
    {
      title: "Step 11: git pull",
      description: "Download updates from GitHub",
      command: "git pull origin main",
      visual: "☁️ → 💾 Sync Changes",
      explanation: "Fetches and merges changes from GitHub to your local repository. Run this regularly to stay up-to-date with team changes. Combines 'git fetch' and 'git merge'."
    },
    {
      title: "Step 12: Create Branch",
      description: "Create a new branch for features",
      command: "git branch feature-name\n# or create and switch\ngit checkout -b feature-name",
      visual: "🌿 Create Branch",
      explanation: "Branches let you work on features without affecting main code. 'git branch' creates a branch, 'git checkout -b' creates and switches to it in one command. Use descriptive names like 'feature-login' or 'fix-bug-123'."
    },
    {
      title: "Step 13: Switch Branch",
      description: "Move between branches",
      command: "git checkout branch-name\n# or (newer syntax)\ngit switch branch-name",
      visual: "↔️ Switch Branch",
      explanation: "Switch between branches to work on different features. 'git checkout' is traditional, 'git switch' is newer and clearer. Your files change to match the branch you switch to."
    },
    {
      title: "Step 14: View Branches",
      description: "List all branches",
      command: "git branch\n# View all branches (including remote)\ngit branch -a",
      visual: "📋 List Branches",
      explanation: "See all your branches. Current branch is marked with *. 'git branch -a' shows remote branches too. Use this to know which branches exist before switching."
    },
    {
      title: "Step 15: Work on Branch",
      description: "Make changes on your branch",
      command: "# Make changes, then:\ngit add .\ngit commit -m 'Add feature'",
      visual: "✏️ Commit to Branch",
      explanation: "Work normally on your branch - edit files, stage, and commit. These commits only affect your current branch, keeping main branch clean and stable."
    },
    {
      title: "Step 16: Push Branch",
      description: "Upload branch to GitHub",
      command: "git push origin feature-name\n# or set upstream\ngit push -u origin feature-name",
      visual: "🌿 → ☁️ Push Branch",
      explanation: "Push your branch to GitHub so others can see it. Use '-u' first time to set upstream tracking. This creates the branch on GitHub and uploads your commits."
    },
    {
      title: "Step 17: Merge Branch",
      description: "Combine branch into main",
      command: "git checkout main\ngit merge feature-name",
      visual: "🔀 Merge Branch",
      explanation: "Switch to main branch, then merge your feature branch. This combines your changes into main. Usually done via Pull Request on GitHub for team review."
    },
    {
      title: "Step 18: Delete Branch",
      description: "Remove merged branch",
      command: "git branch -d feature-name\n# Delete remote branch\ngit push origin --delete feature-name",
      visual: "🗑️ Delete Branch",
      explanation: "After merging, delete the branch to keep things clean. '-d' deletes local branch (safe, prevents deleting unmerged work). Delete remote branch separately on GitHub."
    },
    {
      title: "Complete Workflow",
      description: "Full Git & GitHub cycle with branches",
      command: "git checkout -b feature\ngit add .\ngit commit -m 'message'\ngit push -u origin feature",
      visual: "🔄 Daily Workflow",
      explanation: "Complete workflow: 1) Create branch 2) Make changes 3) Stage & commit 4) Push to GitHub 5) Create Pull Request 6) Merge 7) Delete branch. Always pull main before creating new branches!"
    },
    {
      title: "📚 Quick Reference Summary",
      description: "Essential commands for pushing code to GitHub",
      command: `# Step 1: Initialize Git repository
git init

# Step 2: Add files to staging area
git add .
# Or add specific file:
git add index.html

# Step 3: Commit your changes
git commit -m "Initial commit"

# Step 4: Add remote GitHub repository
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git

# Step 5: Push code to GitHub
git push -u origin main

# ✅ Done! Your code is now on GitHub`,
      visual: "📖 Command Summary",
      explanation: "Complete guide to push your first project to GitHub:\n\n1️⃣ Initialize Git with 'git init' - Creates a new Git repository in your project folder\n\n2️⃣ Stage all files with 'git add .' - Prepares all your files for commit\n\n3️⃣ Commit with a meaningful message - Saves a snapshot of your changes\n\n4️⃣ Connect to GitHub repo with 'git remote add origin' - Links your local repo to GitHub (replace USERNAME and REPOSITORY_NAME with your actual GitHub username and repository name)\n\n5️⃣ Push with 'git push -u origin main' - Uploads your code to GitHub. The -u flag sets upstream tracking for future pushes\n\n⚠️ Important: Create the GitHub repository first on github.com before step 4!"
    }
  ];

  return (
    <div className="min-h-screen mt-16 bg-white pt-16 pb-12 relative">
      <div className="absolute top-5 left-4 md:left-8">
        <Link 
          href="/choose" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Learning Paths
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6 text-center">
          Git & GitHub Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          Learn how to use Git and GitHub to manage your code and collaborate with others.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 text-center">
            Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/q8EevlEpQ2A?si=zC9if8pOywlN0D59"
              title="Git and Github Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {gitTutorials.map((tutorial, cardIdx) => (
            <div
              key={cardIdx}
              className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#000000] mb-4">
                {tutorial.title}
              </h2>
              <p className="text-gray-600 mb-6">{tutorial.content}</p>

              <div className="bg-gray-50 rounded-sm p-4">
                <h3 className="text-lg font-medium text-[#000000] mb-3">Examples:</h3>
                {tutorial.examples.map((example, exampleIdx) => (
                  <div key={exampleIdx} className="space-y-2">
                    <div className="relative">
                      <pre className="bg-gray-100 p-3 rounded-sm overflow-x-auto">
                        <code className="text-[#A435F0]">{example.code}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(example.code, cardIdx, exampleIdx)}
                        className="absolute top-2 right-2 p-2 rounded-sm bg-gray-200/50 backdrop-blur-sm text-gray-600 hover:bg-[#A435F0]/10 hover:text-[#A435F0] transition-all duration-300 transform active:scale-95"
                        title="Copy to clipboard"
                      >
                        {copiedIndex && copiedIndex.card === cardIdx && copiedIndex.example === exampleIdx ? (
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
                onClick={openVisualizer}
                className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm"
              >
                Visualize Git Workflow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Git Workflow Visualizer Modal */}
      {isVisualizerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
          onWheel={(e) => e.stopPropagation()}
          onClick={(e) => e.target === e.currentTarget && closeVisualizer()}
        >
          <div className="bg-white rounded-sm w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[#000000]">Git Workflow Visualizer</h3>
              <button
                onClick={closeVisualizer}
                className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
              >
                <X className="text-black" size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  {gitWorkflowSteps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 flex-1 mx-1 rounded ${
                        idx <= currentStep ? 'bg-[#A435F0]' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Step {currentStep + 1} of {gitWorkflowSteps.length}
                </p>
              </div>

              {/* Current Step */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="text-6xl text-black mb-4">{gitWorkflowSteps[currentStep].visual}</div>
                  <h2 className="text-3xl font-bold text-[#000000] mb-2">
                    {gitWorkflowSteps[currentStep].title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {gitWorkflowSteps[currentStep].description}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Command:</h3>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                    {gitWorkflowSteps[currentStep].command}
                  </pre>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Explanation:</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {gitWorkflowSteps[currentStep].explanation}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`px-6 py-2 rounded-sm transition-colors ${
                    currentStep === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  ← Previous
                </button>

                <button
                  onClick={() => setCurrentStep(0)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-sm hover:bg-gray-200 transition-colors"
                >
                  Reset
                </button>

                <button
                  onClick={() => setCurrentStep(Math.min(gitWorkflowSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === gitWorkflowSteps.length - 1}
                  className={`px-6 py-2 rounded-sm transition-colors ${
                    currentStep === gitWorkflowSteps.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-[#A435F0] text-white hover:bg-[#8c2ad1]'
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubTutorial;
