"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, GitBranch } from "lucide-react";
import Link from "next/link";

const CICDTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to CI/CD",
      content:
        "CI/CD (Continuous Integration/Continuous Deployment) is a method to frequently deliver apps to customers by introducing automation into the stages of app development. It helps teams deliver code changes more frequently and reliably.",
      examples: [
        {
          code: `# CI/CD Pipeline Stages
1. Source - Code repository (Git)
2. Build - Compile and package code
3. Test - Run automated tests
4. Deploy - Deploy to environments
5. Monitor - Track application health`,
          description: "The typical stages of a CI/CD pipeline",
        },
      ],
    },
    {
      title: "GitHub Actions Basics",
      content:
        "GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository.",
      examples: [
        {
          code: `name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build`,
          description:
            "A basic GitHub Actions workflow for Node.js\non: Trigger events\njobs: Define jobs to run\nsteps: Individual tasks in a job",
        },
      ],
    },
    {
      title: "Docker Build and Push",
      content:
        "Automate building and pushing Docker images to a container registry as part of your CI/CD pipeline.",
      examples: [
        {
          code: `name: Docker Build and Push

on:
  push:
    branches: [ main ]

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}
    
    - name: Build and push
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: user/app:latest`,
          description:
            "Build and push Docker images to Docker Hub\nsecrets: Store credentials securely\ntags: Version your images",
        },
      ],
    },
    {
      title: "Automated Testing",
      content:
        "Automated testing is crucial in CI/CD pipelines. It ensures code quality and catches bugs early in the development process.",
      examples: [
        {
          code: `name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run unit tests
      run: npm run test:unit
    
    - name: Run integration tests
      run: npm run test:integration
    
    - name: Generate coverage report
      run: npm run test:coverage
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3`,
          description:
            "Comprehensive testing workflow\nnpm ci: Clean install for CI\nCoverage: Track test coverage",
        },
      ],
    },
    {
      title: "Deployment Strategies",
      content:
        "Different deployment strategies help minimize downtime and risk when releasing new versions of your application.",
      examples: [
        {
          code: `name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to server
      uses: appleboy/ssh-action@master
      with:
        host: \${{ secrets.HOST }}
        username: \${{ secrets.USERNAME }}
        key: \${{ secrets.SSH_KEY }}
        script: |
          cd /var/www/app
          git pull origin main
          npm install
          npm run build
          pm2 restart app`,
          description:
            "Deploy to production server via SSH\nenvironment: Deployment environment\nSSH: Secure remote execution",
        },
        {
          code: `# Blue-Green Deployment Strategy
1. Deploy new version (Green)
2. Test Green environment
3. Switch traffic to Green
4. Keep Blue as backup
5. Decommission Blue after validation`,
          description: "Blue-Green deployment minimizes downtime",
        },
      ],
    },
    {
      title: "Jenkins Pipeline",
      content:
        "Jenkins is a popular open-source automation server. It helps automate the parts of software development related to building, testing, and deploying.",
      examples: [
        {
          code: `pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker build -t myapp .'
                sh 'docker push myapp:latest'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}`,
          description:
            "Jenkins declarative pipeline\nstages: Pipeline stages\npost: Actions after pipeline completion",
        },
      ],
    },
    {
      title: "Environment Variables and Secrets",
      content:
        "Managing environment variables and secrets securely is critical in CI/CD pipelines to protect sensitive information.",
      examples: [
        {
          code: `name: Deploy with Secrets

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy
      env:
        API_KEY: \${{ secrets.API_KEY }}
        DATABASE_URL: \${{ secrets.DATABASE_URL }}
        NODE_ENV: production
      run: |
        echo "Deploying with environment variables"
        npm run deploy`,
          description:
            "Using secrets in workflows\nsecrets: Encrypted environment variables\nenv: Set environment variables",
        },
        {
          code: `# Setting secrets in GitHub
# Repository Settings > Secrets and variables > Actions
# Click 'New repository secret'
# Add: API_KEY, DATABASE_URL, etc.`,
          description: "How to add secrets in GitHub repository settings",
        },
      ],
    },
    {
      title: "Monitoring and Notifications",
      content:
        "Monitor your CI/CD pipelines and get notified when builds fail or succeed to maintain code quality and quick response times.",
      examples: [
        {
          code: `name: Build with Notifications

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Build
      run: npm run build
    
    - name: Notify on success
      if: success()
      uses: 8398a7/action-slack@v3
      with:
        status: success
        text: 'Build succeeded!'
        webhook_url: \${{ secrets.SLACK_WEBHOOK }}
    
    - name: Notify on failure
      if: failure()
      uses: 8398a7/action-slack@v3
      with:
        status: failure
        text: 'Build failed!'
        webhook_url: \${{ secrets.SLACK_WEBHOOK }}`,
          description:
            "Send notifications to Slack\nif: Conditional execution\nwebhook: Integration endpoint",
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
          href="/devops"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to DevOps
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <GitBranch className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">CI/CD Tutorial</h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master CI/CD fundamentals with our comprehensive tutorial. Learn
          continuous integration, deployment automation, and pipeline best
          practices.
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
              src="https://www.youtube.com/embed/icZUzgtz_d8?si=-SGcFM4lqeSa4Lsr"
              title="CI/CD Tutorial for Beginners"
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
                            <code className="text-yellow-400 font-mono text-sm">
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
            <GitBranch className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Key Concepts
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Continuous Integration (CI)</li>
                <li>• Continuous Deployment (CD)</li>
                <li>• Automated Testing</li>
                <li>• Pipeline as Code</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Commit code frequently</li>
                <li>✓ Automate everything</li>
                <li>✓ Test in production-like env</li>
                <li>✓ Monitor pipeline metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CICDTutorial;
