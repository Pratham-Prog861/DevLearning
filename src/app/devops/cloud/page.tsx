"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Cloud } from "lucide-react";
import Link from "next/link";

const AWSCloudTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Cloud Computing",
      content:
        "Cloud computing provides on-demand access to computing resources over the internet. AWS (Amazon Web Services) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 services.",
      examples: [
        {
          code: `# Cloud Service Models
IaaS - Infrastructure as a Service (EC2, VPC)
PaaS - Platform as a Service (Elastic Beanstalk)
SaaS - Software as a Service (Gmail, Salesforce)

# Cloud Deployment Models
Public Cloud - AWS, Azure, GCP
Private Cloud - On-premises
Hybrid Cloud - Combination of both`,
          description: "Understanding cloud computing fundamentals",
        },
      ],
    },
    {
      title: "AWS CLI Basics",
      content:
        "The AWS Command Line Interface (CLI) is a unified tool to manage AWS services. With just one tool, you can control multiple AWS services from the command line.",
      examples: [
        {
          code: `# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install`,
          description: "Install AWS CLI on Linux",
        },
        {
          code: `# Configure AWS CLI
aws configure
# Enter: Access Key ID
# Enter: Secret Access Key
# Enter: Default region (e.g., us-east-1)
# Enter: Default output format (json)`,
          description: "Configure AWS credentials and default settings",
        },
        {
          code: `# Verify configuration
aws sts get-caller-identity`,
          description: "Check your AWS identity and credentials",
        },
      ],
    },
    {
      title: "Amazon EC2 (Elastic Compute Cloud)",
      content:
        "EC2 provides scalable computing capacity in the cloud. You can launch virtual servers, configure security and networking, and manage storage.",
      examples: [
        {
          code: `# List EC2 instances
aws ec2 describe-instances`,
          description: "View all EC2 instances in your account",
        },
        {
          code: `# Launch an EC2 instance
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t2.micro \\
  --key-name MyKeyPair \\
  --security-group-ids sg-0123456789abcdef0 \\
  --subnet-id subnet-0123456789abcdef0`,
          description:
            "Launch a new EC2 instance\n--image-id: AMI ID\n--instance-type: Instance size\n--key-name: SSH key pair",
        },
        {
          code: `# Stop an instance
aws ec2 stop-instances --instance-ids i-1234567890abcdef0

# Start an instance
aws ec2 start-instances --instance-ids i-1234567890abcdef0

# Terminate an instance
aws ec2 terminate-instances --instance-ids i-1234567890abcdef0`,
          description: "Manage EC2 instance lifecycle",
        },
      ],
    },
    {
      title: "Amazon S3 (Simple Storage Service)",
      content:
        "S3 is object storage built to store and retrieve any amount of data from anywhere. It's designed for 99.999999999% durability.",
      examples: [
        {
          code: `# Create an S3 bucket
aws s3 mb s3://my-unique-bucket-name`,
          description: "Create a new S3 bucket (name must be globally unique)",
        },
        {
          code: `# List all buckets
aws s3 ls

# List contents of a bucket
aws s3 ls s3://my-bucket-name`,
          description: "List S3 buckets and their contents",
        },
        {
          code: `# Upload a file
aws s3 cp myfile.txt s3://my-bucket-name/

# Download a file
aws s3 cp s3://my-bucket-name/myfile.txt ./

# Sync a directory
aws s3 sync ./local-folder s3://my-bucket-name/remote-folder`,
          description: "Upload, download, and sync files with S3",
        },
        {
          code: `# Delete a file
aws s3 rm s3://my-bucket-name/myfile.txt

# Delete a bucket (must be empty)
aws s3 rb s3://my-bucket-name`,
          description: "Remove files and buckets",
        },
      ],
    },
    {
      title: "AWS IAM (Identity and Access Management)",
      content:
        "IAM enables you to manage access to AWS services and resources securely. You can create and manage AWS users and groups, and use permissions to allow and deny access.",
      examples: [
        {
          code: `# List IAM users
aws iam list-users

# Create a new user
aws iam create-user --user-name john-doe`,
          description: "Manage IAM users",
        },
        {
          code: `# Create an access key for a user
aws iam create-access-key --user-name john-doe`,
          description: "Generate access keys for programmatic access",
        },
        {
          code: `# Attach a policy to a user
aws iam attach-user-policy \\
  --user-name john-doe \\
  --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess`,
          description: "Grant permissions using managed policies",
        },
      ],
    },
    {
      title: "Amazon RDS (Relational Database Service)",
      content:
        "RDS makes it easy to set up, operate, and scale a relational database in the cloud. It supports MySQL, PostgreSQL, Oracle, SQL Server, and more.",
      examples: [
        {
          code: `# List RDS instances
aws rds describe-db-instances`,
          description: "View all RDS database instances",
        },
        {
          code: `# Create a MySQL database
aws rds create-db-instance \\
  --db-instance-identifier mydb \\
  --db-instance-class db.t3.micro \\
  --engine mysql \\
  --master-username admin \\
  --master-user-password MyPassword123 \\
  --allocated-storage 20`,
          description:
            "Create a new RDS MySQL database\n--db-instance-class: Instance size\n--allocated-storage: Storage in GB",
        },
        {
          code: `# Create a database snapshot
aws rds create-db-snapshot \\
  --db-instance-identifier mydb \\
  --db-snapshot-identifier mydb-snapshot-2024`,
          description: "Create a backup snapshot of your database",
        },
      ],
    },
    {
      title: "AWS Lambda (Serverless Computing)",
      content:
        "Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.",
      examples: [
        {
          code: `# List Lambda functions
aws lambda list-functions`,
          description: "View all Lambda functions in your account",
        },
        {
          code: `# Create a Lambda function
aws lambda create-function \\
  --function-name my-function \\
  --runtime nodejs18.x \\
  --role arn:aws:iam::123456789012:role/lambda-role \\
  --handler index.handler \\
  --zip-file fileb://function.zip`,
          description:
            "Create a new Lambda function\n--runtime: Programming language\n--handler: Entry point",
        },
        {
          code: `# Invoke a Lambda function
aws lambda invoke \\
  --function-name my-function \\
  --payload '{"key":"value"}' \\
  response.json`,
          description: "Execute a Lambda function and get response",
        },
      ],
    },
    {
      title: "AWS CloudFormation (Infrastructure as Code)",
      content:
        "CloudFormation provides a common language to describe and provision all infrastructure resources in your cloud environment using templates.",
      examples: [
        {
          code: `# Create a stack from a template
aws cloudformation create-stack \\
  --stack-name my-stack \\
  --template-body file://template.yaml \\
  --parameters ParameterKey=KeyName,ParameterValue=MyKey`,
          description: "Deploy infrastructure using CloudFormation template",
        },
        {
          code: `# List all stacks
aws cloudformation list-stacks

# Describe a stack
aws cloudformation describe-stacks --stack-name my-stack`,
          description: "View CloudFormation stacks and their status",
        },
        {
          code: `# Update a stack
aws cloudformation update-stack \\
  --stack-name my-stack \\
  --template-body file://updated-template.yaml

# Delete a stack
aws cloudformation delete-stack --stack-name my-stack`,
          description: "Update or delete CloudFormation stacks",
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
          <Cloud className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            AWS Cloud Fundamentals
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master AWS cloud fundamentals with our comprehensive tutorial. Learn
          EC2, S3, RDS, Lambda, and infrastructure management through practical
          examples.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Services Explained
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3WZzmiAkYBQ?si=MwbzKBle3d9rAP8I"
              title="AWS Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Taste of Devops
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOqUAfNtXFE?si=iavTZQ5IcNLYZ0jA"
              title="AWS Tutorial for Beginners"
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
                            <code className="text-orange-400 font-mono text-sm">
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
            <Cloud className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Core Services
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• EC2 - Virtual servers</li>
                <li>• S3 - Object storage</li>
                <li>• RDS - Managed databases</li>
                <li>• Lambda - Serverless compute</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use IAM roles, not root</li>
                <li>✓ Enable MFA authentication</li>
                <li>✓ Tag all resources</li>
                <li>✓ Monitor with CloudWatch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSCloudTutorial;
