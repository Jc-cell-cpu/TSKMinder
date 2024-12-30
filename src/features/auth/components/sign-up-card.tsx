'use client'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


import { DottedSeparator } from "@/components/dotted-seaparator";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export const SignUpCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl ">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    Sign up now to unlock exclusive features.
                    {/* <Link href="/privacy">
                        <span className="text-blue-700">Privacy Policy</span>
                    </Link> */}
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input
                        required
                        type="text"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter your name"
                        disabled={false}
                    /> <Input
                        required
                        type="email"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter email address"
                        disabled={false}
                    />
                    <Input
                        required
                        type="password"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter password"
                        min={8}
                        max={100}
                        disabled={false}
                    />
                    <Button disabled={false} size="lg" className="w-full">
                        SignUp
                    </Button>
                </form>
                <CardDescription className="mt-4">
                    By signing up, you agree to our{" "}
                    <Link href="/privacy">
                        <span className="text-blue-700">Privacy Policy</span>
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms">
                        <span className="text-blue-700">Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button disabled={false} variant="plain" size="lg" className="w-full">
                    <FcGoogle className="mr-2 size-7" />
                    Login with Google
                </Button>
                <Button disabled={false} variant="plain" size="lg" className="w-full">
                    <FaGithub className="mr-2 size-7" />
                    Login with Github
                </Button>

            </CardContent>
        </Card>
    );
};