'use client'

import { useState } from 'react'
import { Book, FileText, Scale, Shield, Users, RefreshCw, MessageCircle } from 'lucide-react'
import PolicyLayout from '@/features/auth/components/header-footer'

// Define a union type for valid section IDs
type SectionId = 'acceptance' | 'services' | 'user' | 'content' | 'termination' | 'changes' | 'contact';

const sectionContent: Record<SectionId, string> = {
    acceptance: "By accessing or using TaskMinder, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access or use our services. These terms apply to all users, visitors, and others who access or use TaskMinder.",
    services: "TaskMinder provides a platform for task and bug tracking. Our services include features for creating, assigning, and managing tasks, tracking bugs, generating reports, and collaborating with team members. We reserve the right to modify or discontinue any part of our services at any time without notice.",
    user: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must immediately notify TaskMinder of any unauthorized use of your account or any other breach of security.",
    content: "You retain all rights to any content you submit, post or display on or through TaskMinder. By posting content, you grant us a license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through TaskMinder. You agree not to post content that is illegal, offensive, or violates any third-party rights.",
    termination: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use TaskMinder will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination.",
    changes: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
    contact: "If you have any questions about these Terms, please contact us at terms@taskminder.com. Our team is always ready to clarify any points and hear your feedback to improve our service.",
};

export default function Terms() {
    const [activeSection, setActiveSection] = useState<SectionId>('acceptance');

    const sections = [
        { id: 'acceptance', title: 'Acceptance of Terms', icon: Book },
        { id: 'services', title: 'Description of Services', icon: FileText },
        { id: 'user', title: 'User Responsibilities', icon: Users },
        { id: 'content', title: 'Content and Conduct', icon: Scale },
        { id: 'termination', title: 'Termination', icon: Shield },
        { id: 'changes', title: 'Changes to Terms', icon: RefreshCw },
        { id: 'contact', title: 'Contact Us', icon: MessageCircle },
    ];

    return (
        <PolicyLayout>
            <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">Terms of Service</h1>

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

