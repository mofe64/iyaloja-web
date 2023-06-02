"use client";
import React, { useState } from "react";
import DashboardNav from "@/components/dashboardNav";
import Logo from "@/components/logo";

const DashboardLayout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const hideNav = () => {
    setShowNav(false);
  };
  return (
    <div className="min-h-screen customGray">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>

      <div className="flex">
        <div className="lg:w-1/6">
          <DashboardNav show={showNav} hideNav={hideNav} />
        </div>

        <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
