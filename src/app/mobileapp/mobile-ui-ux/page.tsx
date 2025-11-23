"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

const MobileUIUXTutorial = () => {
  const tutorials = [
    {
      title: "Mobile UI/UX Fundamentals",
      content:
        "Learn the core principles of mobile user interface and user experience design. Understand what makes a mobile app intuitive and user-friendly.",
      examples: [
        {
          code: `Key Mobile UI/UX Principles:

1. Simplicity
   - Keep interfaces clean and uncluttered
   - Focus on essential features
   - Use whitespace effectively

2. Consistency
   - Follow platform guidelines (iOS HIG, Material Design)
   - Maintain consistent navigation patterns
   - Use familiar UI components

3. Feedback
   - Provide immediate visual feedback
   - Show loading states
   - Confirm user actions

4. Accessibility
   - Support screen readers
   - Provide sufficient color contrast
   - Enable text scaling

5. Touch Targets
   - Minimum 44x44 points (iOS) or 48x48 dp (Android)
   - Adequate spacing between interactive elements
   - Consider thumb zones`,
          description: "Essential mobile UI/UX principles",
        },
      ],
    },
    {
      title: "Navigation Patterns",
      content:
        "Explore common navigation patterns used in mobile applications and when to use each one.",
      examples: [
        {
          code: `Common Navigation Patterns:

1. Tab Bar (Bottom Navigation)
   - 3-5 top-level destinations
   - Always visible
   - Quick switching between sections
   Example: Instagram, Twitter

2. Hamburger Menu (Drawer)
   - Hidden navigation
   - More than 5 destinations
   - Less frequently accessed items
   Example: Gmail, Spotify

3. Stack Navigation
   - Hierarchical flow
   - Back button to previous screen
   - Linear user journey
   Example: Settings, E-commerce checkout

4. Modal/Sheet
   - Temporary task or decision
   - Requires user action
   - Dismissible
   Example: Filters, Share sheet

5. Gesture-Based
   - Swipe to go back
   - Pull to refresh
   - Swipe between tabs
   Example: iOS apps, Tinder`,
          description: "Mobile navigation patterns and use cases",
        },
      ],
    },
    {
      title: "Design Systems and Components",
      content:
        "Understand platform-specific design systems and how to use standard UI components effectively.",
      examples: [
        {
          code: `iOS Design System (Human Interface Guidelines):

Components:
- Navigation Bar: Top navigation with title
- Tab Bar: Bottom navigation (max 5 tabs)
- Buttons: Filled, Tinted, Plain
- Lists: Grouped, Inset Grouped, Plain
- Cards: Rounded corners, subtle shadows
- Alerts: System-style dialogs
- Action Sheets: Bottom sheet with actions

Typography:
- San Francisco (SF Pro)
- Dynamic Type support
- Text styles: Large Title, Title, Headline, Body, Caption

Colors:
- System colors (adapt to light/dark mode)
- Semantic colors (label, background, separator)
- Accent color (tint color)

Spacing:
- 8pt grid system
- Standard margins: 16pt, 20pt
- Safe area insets`,
          description: "iOS design system overview",
        },
        {
          code: `Android Design System (Material Design):

Components:
- App Bar: Top navigation
- Bottom Navigation: 3-5 destinations
- FAB: Floating Action Button
- Cards: Elevated surfaces
- Chips: Compact elements
- Snackbar: Brief messages
- Bottom Sheet: Modal or persistent

Typography:
- Roboto font family
- Type scale: H1-H6, Body1, Body2, Caption
- Line height and letter spacing

Colors:
- Primary, Secondary, Surface colors
- On-colors for text/icons
- Color variants (light, dark)
- Theme support

Spacing:
- 4dp/8dp grid system
- Standard padding: 8dp, 16dp, 24dp
- Elevation levels (0dp - 24dp)`,
          description: "Material Design system overview",
        },
      ],
    },
    {
      title: "Responsive Design and Layouts",
      content:
        "Learn how to create layouts that work across different screen sizes and orientations.",
      examples: [
        {
          code: `Responsive Design Best Practices:

1. Flexible Layouts
   - Use relative sizing (%, flex, constraints)
   - Avoid fixed pixel values
   - Support both portrait and landscape

2. Breakpoints
   - Phone: < 600dp/pt
   - Tablet: 600-900dp/pt
   - Large tablet: > 900dp/pt

3. Adaptive Layouts
   - Single column on phones
   - Multi-column on tablets
   - Master-detail on large screens

4. Safe Areas
   - Respect notches and rounded corners
   - Account for status bar
   - Consider keyboard overlap

5. Density Independence
   - Use dp (Android) or pt (iOS)
   - Provide multiple image resolutions
   - @1x, @2x, @3x (iOS)
   - mdpi, hdpi, xhdpi, xxhdpi (Android)

6. Orientation Changes
   - Save and restore state
   - Adjust layout for landscape
   - Consider horizontal scrolling`,
          description: "Responsive design guidelines",
        },
      ],
    },
    {
      title: "Interaction Design",
      content:
        "Create engaging and intuitive interactions that feel natural on mobile devices.",
      examples: [
        {
          code: `Mobile Interaction Patterns:

1. Gestures
   - Tap: Primary action
   - Long press: Secondary actions/context menu
   - Swipe: Navigate, delete, reveal actions
   - Pinch: Zoom in/out
   - Pull: Refresh content
   - Drag: Reorder items

2. Animations
   - Transitions: 200-400ms
   - Easing: Natural motion curves
   - Loading: Skeleton screens, spinners
   - Feedback: Button press, success/error

3. Microinteractions
   - Like button animation
   - Pull-to-refresh indicator
   - Swipe-to-delete confirmation
   - Toggle switches
   - Progress indicators

4. Touch Feedback
   - Visual: Highlight, ripple effect
   - Haptic: Vibration feedback
   - Audio: Click sounds (optional)

5. State Changes
   - Loading states
   - Empty states
   - Error states
   - Success states`,
          description: "Mobile interaction design patterns",
        },
      ],
    },
    {
      title: "Accessibility and Inclusive Design",
      content:
        "Design mobile apps that are accessible to all users, including those with disabilities.",
      examples: [
        {
          code: `Accessibility Guidelines:

1. Screen Reader Support
   - Provide meaningful labels
   - Describe images with alt text
   - Announce state changes
   - Logical reading order

2. Visual Accessibility
   - Color contrast ratio: 4.5:1 (normal text)
   - Don't rely on color alone
   - Support dynamic text sizing
   - Avoid flashing content

3. Motor Accessibility
   - Large touch targets (44x44pt minimum)
   - Adequate spacing between elements
   - Support voice control
   - Avoid time-based interactions

4. Cognitive Accessibility
   - Clear, simple language
   - Consistent navigation
   - Provide context and help
   - Allow undo actions

5. Platform Features
   iOS:
   - VoiceOver
   - Dynamic Type
   - Reduce Motion
   - Voice Control
   
   Android:
   - TalkBack
   - Font size scaling
   - High contrast text
   - Switch Access`,
          description: "Mobile accessibility best practices",
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
            Mobile UI/UX Patterns
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master mobile user interface and user experience design. Learn
          navigation patterns, design systems, responsive layouts, and
          accessibility best practices.
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
              src="https://www.youtube.com/embed/l48BjRu1CG8?si=7PgLHBjoXLrMYoCp"
              title="Mobile UI/UX Tutorial"
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
                Design Resources
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">iOS HIG</code>{" "}
                  - Apple&apos;s design guidelines
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    Material Design
                  </code>{" "}
                  - Google&apos;s design system
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">Figma</code> -
                  Design and prototyping tool
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">Sketch</code> -
                  macOS design tool
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Follow platform conventions</li>
                <li>✓ Design for accessibility first</li>
                <li>✓ Test on real devices</li>
                <li>✓ Keep interactions simple and intuitive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUIUXTutorial;
