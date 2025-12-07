import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar(){
    return <nav className="flex gap-8 text-lg pb-5">
        <Link className="btn btn-outline btn-lg" href={"/"}>Home</Link>
        <Link className="btn btn-outline btn-lg" href={"/dashboard"}>Dashboard</Link>
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
              <SignInButton>
                <button className="btn btn-outline btn-lg">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="btn btn-outline btn-lg">Sign Up</button>
                  
              </SignUpButton>
            </SignedOut>
    </nav>
}