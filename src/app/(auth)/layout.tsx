'use client'
import PolicyLayout from "@/features/auth/components/header-footer";


interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        // <main className="bg-neutral-100 min-h-screen">
        //     <div className="mx-auto max-w-screen-2xl p-4">
        //         <nav className="flex justify-between items-center">
        //             <Link href="/" className="flex items-center gap-2">
        //                 <Image src="/logo.svg" height={40} width={40} alt="TaskMinder Logo" />
        //                 <span className="text-xl font-bold text-blue-600">TaskMinder</span>
        //             </Link>
        //             <Button variant="plain">Sign Up</Button>
        //         </nav>
        //         <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        //             {children}
        //         </div>

        //     </div>


        // </main>
        <PolicyLayout>
            <div>
                {children}
            </div>
        </PolicyLayout>

    );
}

export default AuthLayout;