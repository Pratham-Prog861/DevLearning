"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

const DeploymentTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to App Deployment",
      content:
        "Learn the process of publishing your mobile applications to the Apple App Store and Google Play Store. Understand requirements, guidelines, and best practices.",
      examples: [
        {
          code: `App Store Deployment Overview:

1. Prerequisites
   - Apple Developer Account ($99/year)
   - Completed app with all features
   - App icons and screenshots
   - Privacy policy and terms of service

2. Preparation
   - Test thoroughly on real devices
   - Optimize app size and performance
   - Prepare marketing materials
   - Set up App Store Connect

3. Submission Process
   - Create app record in App Store Connect
   - Upload build via Xcode or Transporter
   - Fill in app metadata
   - Submit for review

4. Review Timeline
   - Initial review: 24-48 hours
   - Rejections: Address issues and resubmit
   - Approval: App goes live automatically or manually`,
          description: "iOS App Store deployment process",
        },
        {
          code: `Google Play Store Deployment Overview:

1. Prerequisites
   - Google Play Developer Account ($25 one-time)
   - Signed APK or App Bundle
   - App icons and screenshots
   - Privacy policy URL

2. Preparation
   - Test on multiple Android devices
   - Optimize APK size
   - Prepare store listing
   - Set up Google Play Console

3. Submission Process
   - Create app in Play Console
   - Upload APK/AAB
   - Fill in store listing details
   - Set pricing and distribution
   - Submit for review

4. Review Timeline
   - Faster than App Store (hours to days)
   - Rolling release options
   - Staged rollouts available`,
          description: "Android Play Store deployment process",
        },
      ],
    },
    {
      title: "iOS App Store Submission",
      content:
        "Step-by-step guide to submitting your iOS app to the App Store using Xcode and App Store Connect.",
      examples: [
        {
          code: `iOS Deployment Steps:

1. Configure App in Xcode
   - Set Bundle Identifier
   - Configure signing & capabilities
   - Set version and build number
   - Add app icons (all required sizes)

2. Archive the App
   - Select "Any iOS Device" as target
   - Product > Archive
   - Wait for archive to complete
   - Organizer window opens

3. Distribute App
   - Select archive
   - Click "Distribute App"
   - Choose "App Store Connect"
   - Upload to App Store Connect

4. App Store Connect Setup
   - Create new app
   - Fill in app information:
     * Name, subtitle, description
     * Keywords, support URL
     * Privacy policy URL
   - Add screenshots (all required sizes)
   - Set pricing and availability
   - Select build
   - Submit for review

Required Screenshot Sizes:
- 6.7" (iPhone 14 Pro Max): 1290 x 2796
- 6.5" (iPhone 11 Pro Max): 1242 x 2688
- 5.5" (iPhone 8 Plus): 1242 x 2208
- 12.9" iPad Pro: 2048 x 2732`,
          description: "Complete iOS submission process",
        },
      ],
    },
    {
      title: "Android Play Store Submission",
      content:
        "Learn how to prepare and submit your Android app to the Google Play Store.",
      examples: [
        {
          code: `Android Deployment Steps:

1. Generate Signed APK/Bundle
   In Android Studio:
   - Build > Generate Signed Bundle/APK
   - Choose "Android App Bundle" (recommended)
   - Create or select keystore
   - Enter keystore credentials
   - Select release build variant
   - Click Finish

2. Google Play Console Setup
   - Create application
   - Select default language
   - Add app title
   - Upload app icon (512x512 PNG)
   - Add screenshots:
     * Phone: 16:9 or 9:16
     * 7-inch tablet (optional)
     * 10-inch tablet (optional)

3. Store Listing
   - Short description (80 chars)
   - Full description (4000 chars)
   - Feature graphic (1024x500)
   - App category
   - Content rating questionnaire
   - Privacy policy URL

4. Release Management
   - Upload AAB file
   - Set version code and name
   - Add release notes
   - Choose rollout percentage
   - Review and publish

Keystore Security:
# NEVER commit keystore to version control
# Store credentials securely
# Backup keystore file safely`,
          description: "Complete Android submission process",
        },
      ],
    },
    {
      title: "App Store Optimization (ASO)",
      content:
        "Optimize your app store listing to improve visibility and downloads.",
      examples: [
        {
          code: `App Store Optimization Tips:

1. App Title
   - Include primary keyword
   - Keep it memorable and unique
   - Max 30 characters (iOS), 50 characters (Android)
   Example: "TaskMaster - To-Do List & Planner"

2. Keywords (iOS)
   - 100 character limit
   - Comma-separated, no spaces
   - Research competitor keywords
   - Use all available characters
   Example: "todo,task,planner,productivity,reminder"

3. Description
   - First 3 lines are crucial (above fold)
   - Highlight key features and benefits
   - Use bullet points for readability
   - Include social proof (ratings, downloads)
   - Call to action

4. Screenshots
   - Show key features
   - Use captions to explain
   - First 2-3 screenshots are most important
   - Show the app in action
   - Use device frames (optional)

5. App Icon
   - Simple and recognizable
   - Works at small sizes
   - Stands out in search results
   - Consistent with brand
   - Test different versions

6. Ratings and Reviews
   - Prompt users at right time
   - Respond to reviews
   - Address negative feedback
   - Encourage satisfied users to rate`,
          description: "ASO best practices",
        },
      ],
    },
    {
      title: "Version Updates and Maintenance",
      content:
        "Learn how to manage app updates, versioning, and ongoing maintenance.",
      examples: [
        {
          code: `Version Management:

1. Semantic Versioning
   Format: MAJOR.MINOR.PATCH
   Example: 2.1.3
   
   - MAJOR: Breaking changes
   - MINOR: New features (backward compatible)
   - PATCH: Bug fixes

2. iOS Version/Build Numbers
   - Version: User-facing (e.g., 1.0.0)
   - Build: Internal number (must increment)
   Example: Version 1.0.0, Build 1
            Version 1.0.0, Build 2 (hotfix)
            Version 1.1.0, Build 3

3. Android Version Code/Name
   - versionCode: Integer (must increment)
   - versionName: String (user-facing)
   Example: versionCode 1, versionName "1.0.0"
            versionCode 2, versionName "1.0.1"

4. Release Notes
   - Keep them concise and user-friendly
   - Highlight new features
   - Mention bug fixes
   - Thank users for feedback

Example Release Notes:
"What's New in v2.1.0:
✨ Dark mode support
🚀 Improved app performance
🐛 Fixed login issue
📱 Better tablet support

Thank you for using our app!"

5. Staged Rollouts
   Android:
   - Release to 10% of users first
   - Monitor crash reports
   - Gradually increase to 100%
   
   iOS:
   - Phased Release (7 days)
   - Can pause if issues found
   - Automatic rollout to all users`,
          description: "Version management and updates",
        },
      ],
    },
    {
      title: "App Analytics and Monitoring",
      content:
        "Track app performance, user behavior, and crashes to improve your app continuously.",
      examples: [
        {
          code: `Analytics and Monitoring Tools:

1. App Store Connect Analytics (iOS)
   - Impressions and downloads
   - Conversion rates
   - Retention metrics
   - Crash reports
   - User reviews

2. Google Play Console (Android)
   - Install statistics
   - User acquisition
   - Retention cohorts
   - Crash and ANR reports
   - Pre-launch reports

3. Third-Party Analytics
   
   Firebase Analytics (Free):
   - User engagement
   - Custom events
   - User properties
   - Audience segmentation
   - Integration with other Firebase services
   
   Mixpanel:
   - Funnel analysis
   - A/B testing
   - User segmentation
   - Retention analysis
   
   Amplitude:
   - Behavioral analytics
   - User journeys
   - Cohort analysis

4. Crash Reporting
   
   Firebase Crashlytics:
   - Real-time crash reports
   - Stack traces
   - Device information
   - Custom logging
   
   Sentry:
   - Error tracking
   - Performance monitoring
   - Release health
   
5. Key Metrics to Track
   - Daily Active Users (DAU)
   - Monthly Active Users (MAU)
   - Retention rate (Day 1, 7, 30)
   - Session length
   - Crash-free rate
   - Conversion rate
   - Churn rate`,
          description: "Analytics and monitoring setup",
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
            App Deployment Tutorial
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Learn how to publish your mobile apps to the App Store and Play Store.
          Master the submission process, ASO, versioning, and app analytics.
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
              src="https://www.youtube.com/embed/qzTZt6mYFF4?si=9mOJ2YqD6iAieU2B"
              title="App Deployment Tutorial"
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
                Deployment Checklist
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Test on real devices</li>
                <li>✓ Prepare app icons and screenshots</li>
                <li>✓ Write compelling description</li>
                <li>✓ Set up privacy policy</li>
                <li>✓ Configure analytics</li>
                <li>✓ Test payment integration (if applicable)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">Post-Launch</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Monitor crash reports</li>
                <li>✓ Respond to user reviews</li>
                <li>✓ Track key metrics (DAU, retention)</li>
                <li>✓ Plan regular updates</li>
                <li>✓ Optimize based on analytics</li>
                <li>✓ A/B test new features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentTutorial;
