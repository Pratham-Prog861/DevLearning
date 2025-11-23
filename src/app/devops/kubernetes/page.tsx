"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Network } from "lucide-react";
import Link from "next/link";

const KubernetesTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Kubernetes",
      content:
        "Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It groups containers into logical units for easy management and discovery.",
      examples: [
        {
          code: `kubectl version`,
          description: "Check your Kubernetes client and server version",
        },
        {
          code: `kubectl cluster-info`,
          description: "Display cluster information",
        },
        {
          code: `kubectl get nodes`,
          description: "List all nodes in the cluster",
        },
      ],
    },
    {
      title: "Pods - The Smallest Deployable Units",
      content:
        "Pods are the smallest deployable units in Kubernetes. A Pod represents a single instance of a running process in your cluster and can contain one or more containers.",
      examples: [
        {
          code: `kubectl run nginx --image=nginx`,
          description: "Create a simple pod running nginx",
        },
        {
          code: `kubectl get pods`,
          description: "List all pods in the current namespace",
        },
        {
          code: `kubectl get pods -o wide`,
          description: "List pods with additional information (IP, Node, etc.)",
        },
        {
          code: `kubectl describe pod nginx`,
          description: "Get detailed information about a specific pod",
        },
        {
          code: `kubectl logs nginx`,
          description: "View logs from a pod",
        },
        {
          code: `kubectl exec -it nginx -- /bin/bash`,
          description: "Execute interactive shell inside a pod",
        },
        {
          code: `kubectl delete pod nginx`,
          description: "Delete a pod",
        },
      ],
    },
    {
      title: "Deployments - Managing Application Lifecycle",
      content:
        "Deployments provide declarative updates for Pods and ReplicaSets. They manage the rollout of new versions and can automatically roll back if something goes wrong.",
      examples: [
        {
          code: `kubectl create deployment nginx --image=nginx --replicas=3`,
          description: "Create a deployment with 3 replicas",
        },
        {
          code: `kubectl get deployments`,
          description: "List all deployments",
        },
        {
          code: `kubectl scale deployment nginx --replicas=5`,
          description: "Scale a deployment to 5 replicas",
        },
        {
          code: `kubectl set image deployment/nginx nginx=nginx:1.21`,
          description: "Update the image of a deployment",
        },
        {
          code: `kubectl rollout status deployment/nginx`,
          description: "Check the rollout status of a deployment",
        },
        {
          code: `kubectl rollout undo deployment/nginx`,
          description: "Rollback to the previous deployment version",
        },
      ],
    },
    {
      title: "Services - Exposing Applications",
      content:
        "Services provide a stable network endpoint to access a set of Pods. They enable load balancing and service discovery within the cluster.",
      examples: [
        {
          code: `kubectl expose deployment nginx --port=80 --type=ClusterIP`,
          description:
            "Expose a deployment as a ClusterIP service (internal only)",
        },
        {
          code: `kubectl expose deployment nginx --port=80 --type=NodePort`,
          description:
            "Expose a deployment as a NodePort service (external access)",
        },
        {
          code: `kubectl expose deployment nginx --port=80 --type=LoadBalancer`,
          description:
            "Expose a deployment as a LoadBalancer service (cloud provider)",
        },
        {
          code: `kubectl get services`,
          description: "List all services",
        },
        {
          code: `kubectl describe service nginx`,
          description: "Get detailed information about a service",
        },
      ],
    },
    {
      title: "ConfigMaps and Secrets",
      content:
        "ConfigMaps store non-confidential configuration data, while Secrets store sensitive information like passwords and API keys.",
      examples: [
        {
          code: `kubectl create configmap app-config --from-literal=APP_ENV=production`,
          description: "Create a ConfigMap from literal values",
        },
        {
          code: `kubectl create configmap app-config --from-file=config.properties`,
          description: "Create a ConfigMap from a file",
        },
        {
          code: `kubectl get configmaps`,
          description: "List all ConfigMaps",
        },
        {
          code: `kubectl create secret generic db-password --from-literal=password=mypassword`,
          description: "Create a Secret from literal values",
        },
        {
          code: `kubectl get secrets`,
          description: "List all Secrets",
        },
      ],
    },
    {
      title: "Namespaces - Organizing Resources",
      content:
        "Namespaces provide a way to divide cluster resources between multiple users or teams. They're ideal for environments with many users spread across multiple teams or projects.",
      examples: [
        {
          code: `kubectl get namespaces`,
          description: "List all namespaces",
        },
        {
          code: `kubectl create namespace development`,
          description: "Create a new namespace",
        },
        {
          code: `kubectl get pods --namespace=development`,
          description: "List pods in a specific namespace",
        },
        {
          code: `kubectl config set-context --current --namespace=development`,
          description: "Set default namespace for current context",
        },
        {
          code: `kubectl delete namespace development`,
          description: "Delete a namespace (and all resources in it)",
        },
      ],
    },
    {
      title: "YAML Manifests - Declarative Configuration",
      content:
        "Kubernetes resources are typically defined using YAML files. This allows for version control and reproducible deployments.",
      examples: [
        {
          code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80`,
          description:
            "A basic Deployment manifest\napiVersion: API version\nkind: Resource type\nmetadata: Resource metadata\nspec: Desired state specification",
        },
        {
          code: `kubectl apply -f deployment.yaml`,
          description: "Apply a YAML manifest to create/update resources",
        },
        {
          code: `kubectl delete -f deployment.yaml`,
          description: "Delete resources defined in a YAML file",
        },
        {
          code: `kubectl get deployment nginx-deployment -o yaml`,
          description: "Export a resource as YAML",
        },
      ],
    },
    {
      title: "Monitoring and Debugging",
      content:
        "Kubernetes provides various commands to monitor and debug your applications running in the cluster.",
      examples: [
        {
          code: `kubectl top nodes`,
          description: "Display resource usage (CPU/Memory) of nodes",
        },
        {
          code: `kubectl top pods`,
          description: "Display resource usage of pods",
        },
        {
          code: `kubectl get events`,
          description: "List cluster events",
        },
        {
          code: `kubectl logs -f nginx`,
          description:
            "Stream logs from a pod in real-time\n-f: Follow log output",
        },
        {
          code: `kubectl port-forward pod/nginx 8080:80`,
          description: "Forward local port 8080 to pod port 80 for testing",
        },
        {
          code: `kubectl describe pod nginx`,
          description: "Get detailed information and events for a pod",
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
          <Network className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Kubernetes Tutorial
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Kubernetes fundamentals with our comprehensive tutorial. Learn
          container orchestration, deployment strategies, and cluster management
          through practical examples.
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
              src="https://www.youtube.com/embed/a-nWPre5QYI?si=PBt9-WTz1pOxC5Zp"
              title="Kubernetes Tutorial for Beginners"
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
                            <code className="text-cyan-400 font-mono text-sm">
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
            <Network className="w-6 h-6 text-[#A435F0]" />
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
                    kubectl get pods
                  </code>{" "}
                  - List pods
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    kubectl apply -f
                  </code>{" "}
                  - Apply config
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    kubectl logs
                  </code>{" "}
                  - View logs
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    kubectl describe
                  </code>{" "}
                  - Get details
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use namespaces for organization</li>
                <li>✓ Define resource limits</li>
                <li>✓ Use liveness/readiness probes</li>
                <li>✓ Version control your manifests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KubernetesTutorial;
