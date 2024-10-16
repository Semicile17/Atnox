"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import "./globals.css";
import Header from "../components/Header";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function RootLayout() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Redirect user to '/home' if they are logged in and not already on '/home'
  useEffect(() => {
    if (isLoaded && user && pathname === "/") {
      router.replace("/home");
    }
  }, [isLoaded, user, pathname, router]);

  return (
    <html lang="en">
      <body className="bg-black">
        <Header user={user} />
        <div className="h-full w-full bg-black flex flex-col items-center justify-start overflow-hidden mt-16">
          <h1 className="md:text-7xl mt-24 text-5xl lg:text-9xl font-bold text-center text-white relative z-20">
            CODE-X
          </h1>
          <div className="text-white flex">
            <span className="flex items-center">
              <hr className="text-white md:w-52 w-32" />
            </span>
            <span className="md:ml-4 ml-2">GBPIET</span>
          </div>
          <h1 className="text-white font-mono">Join Us . Be Amazed</h1>
          <div className="w-[40rem] h-40 relative mt-4 ">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-700 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.5}
              maxSize={1}
              particleDensity={2000}
              className="w-full h-full"
              particleColor="#008000"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          {/* Get Started Button */}
          <SignedOut>
            <SignInButton>
              <button
                className="p-2 mt-8 z-40 bg-gray-600  text-white rounded text-md hover:bg-green-400  hover:text-black  duration-800 focus:ring"
                style={{ pointerEvents: "auto" }}
              >
                Get Started 
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </body>
    </html>
  );
}
