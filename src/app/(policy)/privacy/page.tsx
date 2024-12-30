'use client'

import { useState } from 'react'
import { Leaf, Shield, Eye, Users, Lock, RefreshCw, MessageCircle } from 'lucide-react'
import PolicyLayout from '@/features/auth/components/header-footer'

// Define a union type for valid section IDs
type SectionId = 'collect' | 'use' | 'share' | 'rights' | 'security' | 'updates' | 'contact';

const sectionContent: Record<SectionId, string> = {
    collect: "At TaskMinder, we prioritize your privacy by collecting only the essential data needed to improve your experience. This includes your name, email address, and any details necessary to track your tasks and bugs. We ensure that only relevant information is gathered to enhance the efficiency of our platform.",
    use: "Your data is used solely to help you manage tasks and track bugs effectively. By understanding your usage patterns, we can provide personalized insights, reminders, and recommendations to streamline your workflow. We do not use your data for any other purpose without your consent.",
    share: "We are committed to protecting your privacy. Your personal data is never sold. We may share anonymized and aggregated data with trusted partners to enhance the platform's features and improve service quality, but only when it benefits your experience with TaskMinder.",
    rights: "You have complete control over your data. You can access, modify, or delete your information at any time. If you prefer not to have your data collected, you can opt out of certain features, although this may limit some functionality.",
    security: "We take data security seriously. Your information is protected by industry-leading encryption and secure protocols, ensuring that your data remains safe from unauthorized access. Think of it as a fortified vault for your tasks and bug reports.",
    updates: "As we continue to improve TaskMinder, our privacy policy may evolve. Any significant updates will be communicated to you, and you can always access the latest version of our policy here.",
    contact: "If you have any questions or concerns about your privacy, our team is always here to help. Reach out to us at privacy@taskminder.com, and we'll address your concerns promptly.",
};

export default function Privacy() {
    const [activeSection, setActiveSection] = useState<SectionId>('collect');

    const sections = [
        { id: 'collect', title: 'Data Collection', icon: Leaf },
        { id: 'use', title: 'Data Usage', icon: Shield },
        { id: 'share', title: 'Data Sharing', icon: Eye },
        { id: 'rights', title: 'Your Rights', icon: Users },
        { id: 'security', title: 'Data Security', icon: Lock },
        { id: 'updates', title: 'Policy Updates', icon: RefreshCw },
        { id: 'contact', title: 'Contact Us', icon: MessageCircle },
    ];

    return (
        <PolicyLayout>
            <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">Privacy Policy</h1>

            <div className="shadow-lg rounded-lg p-6">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id as SectionId)}
                            className={`flex items-center px-4 py-2 rounded-full transition-colors ${activeSection === section.id
                                ? 'bg-cyan-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-cyan-200'
                                }`}
                        >
                            <section.icon className="mr-2 h-5 w-5" />
                            {section.title}
                        </button>
                    ))}
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-600">
                        {sections.find(s => s.id === activeSection)?.title}
                    </h2>
                    <p className="dark:text-black leading-relaxed">
                        {sectionContent[activeSection]}
                    </p>
                </div>
            </div>
        </PolicyLayout>
    );
}

