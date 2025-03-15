
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WrongTurnLayout from "@/components/WrongTurnLayout";
import PrimaryButton from "@/components/PrimaryButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleReturnHome = () => {
    window.location.href = "https://ffenjil.site";
  };

  return (
    <WrongTurnLayout>
      <div className="relative flex w-full max-w-xl flex-col items-center text-center">
        <div className="mb-8 animate-float">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke="currentColor" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse-slow"
            />
            <path 
              d="M8 15C8.5 16 9.79086 17 12 17C14.2091 17 15.5 16 16 15" 
              stroke="currentColor" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10Z" 
              fill="currentColor"
            />
            <path 
              d="M17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium animate-slide-down">
              404 • Page Not Found
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-down" style={{ animationDelay: "100ms" }}>
              This page doesn't exist
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-slide-down" style={{ animationDelay: "200ms" }}>
              The page you're looking for couldn't be found. It might have been moved or deleted.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-down" style={{ animationDelay: "300ms" }}>
            <PrimaryButton onClick={handleReturnHome}>
              Return to Home
            </PrimaryButton>
          </div>
        </div>
      </div>
    </WrongTurnLayout>
  );
};

export default NotFound;
