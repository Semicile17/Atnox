"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import "./globals.css";
import Header from "../components/Header";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useRouter } from "next/navigation";


export default function RootLayout() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Immediate redirection if the user is already signed in
  if (isLoaded && user) {
    console.log(user)
    router.replace("/dashboard");
    return null; // Prevent the component from rendering until the redirection happens
  }

  return (
    <html lang="en">
      <body>
        <Header user={user}/>
        <BackgroundLines className="flex items-center justify-center w-full h-screen flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Atnox Digital, <br /> Atnox Finance.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Get the best advices from our experts, including expert designers,
            finance managers, data analysts and RDX, totally free.
          </p>
          <SignedOut>
            <SignInButton>
              <button
                className="p-2 m-5 z-40 bg-gray-600 text-white rounded text-md hover:bg-black focus:ring"
                style={{ pointerEvents: "auto" }}
              >
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </BackgroundLines>
      </body>
    </html>
  );
}
