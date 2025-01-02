'use client'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DottedSeparator } from "@/components/dotted-seaparator";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { PasswordInput } from "./password-toggle";

const formSchema = z.object({
    name: z.string().trim().min(1, "Required"),
    email: z.string().email(),
    password: z.string().trim().min(8, "Minimum of 8 Characters Required"),
});

const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
}

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    });

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl ">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    Sign up now to unlock exclusive features.
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <CardDescription className="mt-4">
                            By signing up, you agree to our{" "}
                            <Link href="/privacy">
                                <span className="text-blue-700 hover:text-blue-500">Privacy Policy</span>
                            </Link>{" "}
                            and{" "}
                            <Link href="/terms">
                                <span className="text-blue-700 hover:text-blue-500">Terms of Service</span>
                            </Link>
                        </CardDescription>
                        <Button type="submit" disabled={false} size="lg" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </Form>
                <CardDescription className="mt-2">
                    Already have an account{" "}
                    <Link href="/sign-in">
                        <span className="text-blue-700 hover:text-blue-500">Sign In</span>
                    </Link>
                </CardDescription>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button disabled={false} variant="outline" size="lg" className="w-full">
                    <FcGoogle className="mr-2 size-7" />
                    Login with Google
                </Button>
                <Button disabled={false} variant="outline" size="lg" className="w-full">
                    <FaGithub className="mr-2 size-7" />
                    Login with Github
                </Button>
            </CardContent>
        </Card>
    );
};

