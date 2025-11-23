"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Code } from "lucide-react";
import Link from "next/link";

const TerraformTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Infrastructure as Code",
      content:
        "Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through code instead of manual processes. Terraform is an open-source IaC tool that lets you define both cloud and on-prem resources in human-readable configuration files.",
      examples: [
        {
          code: `# Benefits of IaC
- Version Control
- Automation
- Consistency
- Reusability
- Documentation`,
          description: "Key advantages of using Infrastructure as Code",
        },
      ],
    },
    {
      title: "Terraform Basics",
      content:
        "Terraform uses HashiCorp Configuration Language (HCL) to describe infrastructure. The basic workflow is: Write → Plan → Apply.",
      examples: [
        {
          code: `# Install Terraform (Linux)
wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip
unzip terraform_1.6.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/
terraform version`,
          description: "Install Terraform on your system",
        },
        {
          code: `terraform init      # Initialize working directory
terraform plan      # Preview changes
terraform apply     # Apply changes
terraform destroy   # Destroy infrastructure`,
          description: "Essential Terraform commands",
        },
      ],
    },
    {
      title: "Terraform Configuration Files",
      content:
        "Terraform configurations are written in .tf files. The main configuration file typically includes providers, resources, and variables.",
      examples: [
        {
          code: `# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "WebServer"
  }
}`,
          description: "Basic Terraform configuration for AWS EC2 instance",
        },
      ],
    },
    {
      title: "Variables and Outputs",
      content:
        "Variables make your Terraform configurations flexible and reusable. Outputs display information after applying changes.",
      examples: [
        {
          code: `# variables.tf
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}`,
          description: "Define input variables",
        },
        {
          code: `# outputs.tf
output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.web.id
}

output "instance_public_ip" {
  description = "Public IP of instance"
  value       = aws_instance.web.public_ip
}`,
          description: "Define outputs to display after apply",
        },
        {
          code: `# terraform.tfvars
instance_type = "t2.small"
region        = "us-west-2"`,
          description: "Set variable values in tfvars file",
        },
      ],
    },
    {
      title: "State Management",
      content:
        "Terraform state tracks your infrastructure. It's crucial for Terraform to know what resources it manages.",
      examples: [
        {
          code: `terraform state list           # List resources in state
terraform state show aws_instance.web  # Show resource details
terraform state pull           # Download remote state
terraform state rm aws_instance.web    # Remove resource from state`,
          description: "Manage Terraform state",
        },
        {
          code: `# backend.tf - Remote state in S3
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}`,
          description: "Configure remote state storage in AWS S3",
        },
      ],
    },
    {
      title: "Modules",
      content:
        "Modules are containers for multiple resources that are used together. They help organize and reuse code.",
      examples: [
        {
          code: `# modules/vpc/main.tf
resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
  
  tags = {
    Name = var.vpc_name
  }
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.public_subnet_cidr
  
  tags = {
    Name = "\${var.vpc_name}-public"
  }
}`,
          description: "Create a reusable VPC module",
        },
        {
          code: `# main.tf - Using the module
module "vpc" {
  source = "./modules/vpc"
  
  vpc_name           = "production"
  vpc_cidr           = "10.0.0.0/16"
  public_subnet_cidr = "10.0.1.0/24"
}`,
          description: "Use the VPC module in your configuration",
        },
      ],
    },
    {
      title: "Data Sources",
      content:
        "Data sources allow Terraform to fetch information from existing infrastructure or external sources.",
      examples: [
        {
          code: `# Fetch latest Amazon Linux AMI
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"
}`,
          description: "Use data source to get latest AMI dynamically",
        },
      ],
    },
    {
      title: "Best Practices",
      content:
        "Follow these best practices to write maintainable and secure Terraform code.",
      examples: [
        {
          code: `# Use version constraints
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}`,
          description: "Pin Terraform and provider versions",
        },
        {
          code: `# Use workspaces for environments
terraform workspace new dev
terraform workspace new staging
terraform workspace new prod
terraform workspace select dev`,
          description: "Manage multiple environments with workspaces",
        },
        {
          code: `# Format and validate
terraform fmt       # Format code
terraform validate  # Validate configuration
terraform plan      # Always plan before apply`,
          description: "Essential commands for code quality",
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
          <Code className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Infrastructure as Code (Terraform)
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Terraform and Infrastructure as Code. Learn to provision and
          manage cloud infrastructure through code.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/S9mohJI_R34?si=2R0ne9gueSJAUZd9"
              title="Terraform Tutorial"
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
                            <code className="text-purple-400 font-mono text-sm">
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
            <Code className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Core Commands
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    terraform init
                  </code>{" "}
                  - Initialize
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    terraform plan
                  </code>{" "}
                  - Preview
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    terraform apply
                  </code>{" "}
                  - Deploy
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    terraform destroy
                  </code>{" "}
                  - Remove
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use remote state</li>
                <li>✓ Version your code</li>
                <li>✓ Use modules</li>
                <li>✓ Always run plan first</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerraformTutorial;
