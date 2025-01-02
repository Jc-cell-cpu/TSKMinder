'use client'

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { DottedSeparator } from "@/components/dotted-seaparator"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "@/app/api/actions/auth"
import { AnimatedAlert } from "@/features/Alert-component"
import { PasswordInput } from '@/features/auth/components/password-toggle'

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required"),
})

export const SignInCard = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState<{ id: string; message: string; type: 'success' | 'error' } | null>(null)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true)
            const result = await signIn(values.email, values.password)

            if (result.success) {
                setAlert({
                    id: Date.now().toString(),
                    message: result.message,
                    type: 'success'
                })
                router.push('/dashboard') // Redirect to dashboard or home page
                router.refresh() // Refresh the page to update the auth state
            } else {
                setAlert({
                    id: Date.now().toString(),
                    message: result.message,
                    type: 'error'
                })
            }
        } catch (error) {
            setAlert({
                id: Date.now().toString(),
                message: 'Something went wrong',
                type: 'error'
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter email address"
                                            disabled={isLoading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <PasswordInput
                                            {...field}
                                            placeholder="Enter password"
                                            disabled={isLoading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <CardDescription className="mt-4">
                            <Link href="/forgotPassword">
                                <span className="text-blue-700 hover:text-blue-600">
                                    Forgot Password
                                </span>
                            </Link>
                        </CardDescription>
                        <Button disabled={isLoading} size="lg" className="w-full">
                            {isLoading ? "Signing in..." : "Login"}
                        </Button>
                    </form>
                    <CardDescription className="mt-4">
                        Don&apos;t have a account{" "}
                        <Link href="/sign-up">
                            <span className="text-blue-700 hover:text-blue-600">Sign Up</span>
                        </Link>
                    </CardDescription>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={isLoading}
                    variant="outline"
                    size="lg"
                    className="w-full"
                >
                    <FcGoogle className="mr-2 size-7" />
                    Login with Google
                </Button>
                <Button
                    disabled={isLoading}
                    variant="outline"
                    size="lg"
                    className="w-full"
                >
                    <FaGithub className="mr-2 size-7" />
                    Login with Github
                </Button>
            </CardContent>
            {alert && (
                <AnimatedAlert
                    key={alert.id}
                    id={alert.id}
                    message={alert.message}
                    type={alert.type}
                    duration={3000}
                />
            )}
        </Card>
    )
}

