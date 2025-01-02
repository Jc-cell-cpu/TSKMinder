'use client'

// import { useState } from 'react'
import { Check, X, AlertCircle, Shield, ShieldCheck, ShieldAlert } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface PasswordRequirement {
    category: 'minimum' | 'complexity' | 'prohibited' | 'confirmation'
    text: string
    validator: (password: string) => boolean
}

const requirements: Record<string, PasswordRequirement[]> = {
    "Minimum Requirements": [
        {
            category: 'minimum',
            text: "At least 8 characters long",
            validator: (password) => password.length >= 8
        }
    ],
    "Complexity Requirements": [
        {
            category: 'complexity',
            text: "At least one uppercase letter (A-Z)",
            validator: (password) => /[A-Z]/.test(password)
        },
        {
            category: 'complexity',
            text: "At least one lowercase letter (a-z)",
            validator: (password) => /[a-z]/.test(password)
        },
        {
            category: 'complexity',
            text: "At least one number (0-9)",
            validator: (password) => /[0-9]/.test(password)
        },
        {
            category: 'complexity',
            text: "At least one special character (@$!%*?&#^(){}[])",
            validator: (password) => /[@$!%*?&#^(){}[\]]/.test(password)
        }
    ],
    "Prohibited Characters": [
        {
            category: 'prohibited',
            text: "No single or double quotes (' or \")",
            validator: (password) => !/['"]/.test(password)
        },
        {
            category: 'prohibited',
            text: "No angle brackets (< or >)",
            validator: (password) => !/[<>]/.test(password)
        },
        {
            category: 'prohibited',
            text: "No semicolons (;)",
            validator: (password) => !/[;]/.test(password)
        }
    ]
}

interface PasswordRequirementsProps {
    password: string
}

export function PasswordRequirements({ password }: PasswordRequirementsProps) {
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Minimum Requirements':
                return <Shield className="h-5 w-5 text-blue-500" />
            case 'Complexity Requirements':
                return <ShieldCheck className="h-5 w-5 text-emerald-500" />
            case 'Prohibited Characters':
                return <ShieldAlert className="h-5 w-5 text-amber-500" />
            default:
                return <AlertCircle className="h-5 w-5" />
        }
    }

    const getValidationStatus = (requirement: PasswordRequirement) => {
        if (!password) return 'neutral'
        return requirement.validator(password) ? 'valid' : 'invalid'
    }

    // Quick validation check for main display
    // const mainRequirements = [
    //     { text: "8+ characters", valid: password.length >= 8 },
    //     { text: "Uppercase & lowercase", valid: /[A-Z]/.test(password) && /[a-z]/.test(password) },
    //     { text: "Numbers & special chars", valid: /[0-9]/.test(password) && /[@$!%*?&#^(){}[\]<>]/.test(password) },
    // ]

    return (
        <div className="text-sm">
            {/* Always visible requirements */}
            {/* <div className="flex flex-wrap gap-3">
                {mainRequirements.map((req, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-1.5 px-2 py-1 rounded-full border ${!password
                            ? 'border-muted-foreground/20 text-muted-foreground/70'
                            : req.valid
                                ? 'border-green-500/20 text-green-500'
                                : 'border-destructive/20 text-destructive'
                            }`}
                    >
                        {password ? (
                            req.valid ? (
                                <Check className="h-3.5 w-3.5" />
                            ) : (
                                <X className="h-3.5 w-3.5" />
                            )
                        ) : (
                            <div className="h-3.5 w-3.5 rounded-full border border-muted-foreground/20" />
                        )}
                        <span className="text-xs font-medium">{req.text}</span>
                    </div>
                ))}
            </div> */}

            {/* Accordion for detailed policy */}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="password-policy">
                    <AccordionTrigger className="text-sm font-medium text-center">
                        Password Creation Policy
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6 pt-4">
                        {Object.entries(requirements).map(([category, categoryRequirements]) => (
                            <div key={category} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    {getCategoryIcon(category)}
                                    <h4 className="font-medium">{category}</h4>
                                </div>
                                <ul className="grid gap-2 pl-7">
                                    {categoryRequirements.map((requirement, index) => {
                                        const status = getValidationStatus(requirement)
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center gap-2 transition-colors"
                                            >
                                                {status === 'valid' ? (
                                                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                                                ) : status === 'invalid' ? (
                                                    <X className="h-4 w-4 text-red-500 shrink-0" />
                                                ) : (
                                                    <div className="h-4 w-4 rounded-full border border-muted-foreground/30 shrink-0" />
                                                )}
                                                <span className={
                                                    status === 'valid'
                                                        ? "text-muted-foreground"
                                                        : status === 'invalid'
                                                            ? "text-foreground"
                                                            : "text-muted-foreground/70"
                                                }>
                                                    {requirement.text}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}

                        <div className="rounded-lg bg-muted/50 p-3 space-y-2">
                            <p className="font-medium text-xs">Additional Recommendations:</p>
                            <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                                <li>Avoid using easily guessable passwords (e.g., password123, your name)</li>
                                <li>Avoid common patterns like abc123</li>
                                <li>Consider using a password manager for generating strong passwords</li>
                            </ul>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div >
    )
}

