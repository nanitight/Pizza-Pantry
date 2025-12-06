import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar(){
    return <nav className="flex gap-8 text-lg">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>Users</Link>
        <SignedIn>
            <UserButton />
        </SignedIn>
         <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
    </nav>
}