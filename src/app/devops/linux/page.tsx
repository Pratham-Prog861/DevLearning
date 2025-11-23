"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

const LinuxTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Linux",
      content:
        "Linux is a free and open-source operating system kernel. It's the foundation of many operating systems (distributions) like Ubuntu, CentOS, and Debian.",
      examples: [
        {
          code: `uname -a\ncat /etc/os-release`,
          description: "Display system information and Linux distribution",
        },
      ],
    },
    {
      title: "File System Navigation",
      content:
        "Understanding the Linux file system is crucial. Everything in Linux is a file, and the file system starts at the root directory (/).",
      examples: [
        {
          code: `pwd\nls\nls -la\ncd /home/user\ncd ..\ncd ~`,
          description: "Navigate the file system",
        },
        {
          code: `mkdir my-folder\nmkdir -p parent/child\nrmdir my-folder\nrm -rf my-folder`,
          description: "Create and remove directories",
        },
      ],
    },
    {
      title: "File Operations",
      content:
        "Linux provides powerful commands for creating, copying, moving, and deleting files.",
      examples: [
        {
          code: `touch myfile.txt\necho "Hello" > myfile.txt\necho "World" >> myfile.txt`,
          description: "Create and write to files",
        },
        {
          code: `cat myfile.txt\nless myfile.txt\nhead myfile.txt\ntail -f myfile.txt`,
          description: "Read file contents",
        },
        {
          code: `cp source.txt dest.txt\ncp -r folder1 folder2\nmv old.txt new.txt\nrm myfile.txt`,
          description: "Copy, move, and delete files",
        },
      ],
    },
    {
      title: "File Permissions",
      content:
        "Linux uses a permission system to control access to files and directories.",
      examples: [
        {
          code: `ls -l myfile.txt\nchmod 755 myfile.txt\nchmod u+x myfile.txt\nchown user:group myfile.txt`,
          description: "View and modify file permissions",
        },
      ],
    },
    {
      title: "Process Management",
      content:
        "Processes are running programs. Linux provides tools to view, manage, and control processes.",
      examples: [
        {
          code: `ps aux\nps aux | grep nginx\ntop\nhtop`,
          description: "View running processes",
        },
        {
          code: `kill 1234\nkill -9 1234\nkillall nginx\ncommand &`,
          description: "Manage processes",
        },
      ],
    },
    {
      title: "Package Management",
      content: "Package managers help install, update, and remove software.",
      examples: [
        {
          code: `sudo apt update\nsudo apt upgrade\nsudo apt install nginx\nsudo apt remove nginx`,
          description: "APT package manager (Ubuntu/Debian)",
        },
        {
          code: `sudo yum update\nsudo yum install nginx\nsudo dnf install nginx`,
          description: "YUM/DNF package manager (CentOS/RHEL)",
        },
      ],
    },
    {
      title: "Networking Commands",
      content:
        "Linux provides powerful networking tools for troubleshooting and managing network connections.",
      examples: [
        {
          code: `ip addr show\nping google.com\nping -c 4 google.com`,
          description: "View network configuration and test connectivity",
        },
        {
          code: `nslookup google.com\ndig google.com\nnetstat -tuln\nss -tuln`,
          description: "DNS queries and port monitoring",
        },
        {
          code: `wget https://example.com/file.zip\ncurl -O https://example.com/file.zip\nscp file.txt user@server:/path/`,
          description: "Download and transfer files",
        },
      ],
    },
    {
      title: "Text Processing",
      content:
        "Linux excels at text processing with powerful command-line tools.",
      examples: [
        {
          code: `grep "error" log.txt\ngrep -r "TODO" ./src/\nfind /home -name "*.txt"\nsed 's/old/new/g' file.txt`,
          description: "Search and process text",
        },
      ],
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = (text: string, idx: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
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
          <Terminal className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Linux Command Line
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Linux command line fundamentals. Learn file management,
          permissions, and system administration.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/e01GGTKmtpc?si=1ePNSA8u7UqQ2p7T"
              title="Linux Tutorial"
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

        <div className="mt-12 bg-gradient-to-br from-[#A435F0]/5 to-[#A435F0]/10 border border-[#A435F0]/20 rounded-sm p-6">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Essential Commands
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">ls</code> -
                  List files
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">cd</code> -
                  Change directory
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">grep</code> -
                  Search text
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">chmod</code> -
                  Change permissions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use sudo carefully</li>
                <li>✓ Regular backups</li>
                <li>✓ Keep system updated</li>
                <li>✓ Use strong passwords</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinuxTutorial;
