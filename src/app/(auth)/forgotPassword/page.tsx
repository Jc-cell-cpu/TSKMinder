'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { AnimatedAlert } from '@/features/Alert-component'
import { emailSchema, otpSchema, passwordSchema } from '@/lib/schemas'
import { ZodError } from 'zod'
import { PasswordInput } from '@/features/auth/components/password-toggle'
import { PasswordRequirements } from '@/features/auth/components/password-requirements'

export default function ForgotPassword() {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error'; id: number } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (step === 1) {
                emailSchema.parse({ email })
                setStep(2)
                setAlert({ message: 'Email verified. Please check your inbox for OTP.', type: 'success', id: Date.now() })
            } else if (step === 2) {
                otpSchema.parse({ otp })
                setStep(3)
                setAlert({ message: 'OTP verified. Please set your new password.', type: 'success', id: Date.now() })
            } else if (step === 3) {
                passwordSchema.parse({ newPassword, confirmPassword })
                setAlert({ message: 'Password reset successful!', type: 'success', id: Date.now() })
                // Reset form after successful password reset
                setStep(1)
                setEmail('')
                setOtp('')
                setNewPassword('')
                setConfirmPassword('')
            }
        } catch (error) {
            if (error instanceof ZodError) {
                setAlert({ message: error.errors[0].message, type: 'error', id: Date.now() })
            } else {
                setAlert({ message: 'An unexpected error occurred', type: 'error', id: Date.now() })
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            {alert && <AnimatedAlert key={alert.id} message={alert.message} type={alert.type} id={''} />}
            <Card className="w-full h-full md:w-[487px]">
                <CardHeader className='w-full h-full md:w-[487px]'>
                    <CardTitle className="text-3xl font-bold text-center">Reset Password</CardTitle>
                    <CardDescription className="text-center text-lg">
                        {step === 1 && "Enter your email to receive a reset code"}
                        {step === 2 && "Enter the OTP sent to your email"}
                        {step === 3 && "Set your new password"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 w-full h-full md:w-[487px]">
                    <div className="flex justify-between mb-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${step > i ? 'bg-green-500 text-white' :
                                    step === i ? 'bg-blue-500 text-white' :
                                        'bg-gray-200 text-gray-500'
                                    }`}>
                                    {step > i ? <CheckCircle2 size={24} /> : i}
                                </div>
                                <div className="text-sm mt-2">
                                    {i === 1 ? 'Email' : i === 2 ? 'OTP' : 'New Password'}
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 && (
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-lg">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="text-lg p-3"
                                />
                            </div>
                        )}
                        {step === 2 && (
                            <div className="space-y-2">
                                <Label htmlFor="otp" className="text-lg">OTP</Label>
                                <Input
                                    id="otp"
                                    type="text"
                                    placeholder="Enter 6-digit OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="text-lg p-3"
                                    maxLength={6}
                                />
                            </div>
                        )}
                        {step === 3 && (
                            <>
                                <div className="space-y-2">
                                    <Label htmlFor="newPassword" className="text-lg">New Password</Label>
                                    <PasswordInput
                                        id="newPassword"
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="text-lg p-3"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword" className="text-lg">Confirm Password</Label>
                                    <PasswordInput
                                        id="confirmPassword"
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="text-lg p-3"
                                    />
                                </div>
                                <div className="mt-4 p-4 bg-card rounded-lg border shadow-sm">
                                    <PasswordRequirements
                                        password={newPassword}

                                    />
                                </div>
                            </>
                        )}
                        <Button type="submit" className="w-full text-lg py-3">
                            {step === 3 ? 'Reset Password' : 'Continue'}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

