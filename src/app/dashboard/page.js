"use client";

import Header from "@/components/Header";
import { useUser, SignOutButton } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  const { user } = useUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Header user={user}/>
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          src={user.imageUrl}
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.fullName}!</h2>
        <p className="text-md mb-4">Email: {user.primaryEmailAddress.emailAddress}</p>
        <p className="text-md mb-4">ID: {user.id}</p>

        {/* Sign Out Button */}
        <SignOutButton>
          <button className="mt-5 p-2 bg-red-600 text-white rounded text-md hover:bg-red-800 focus:ring">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
