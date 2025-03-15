
import React from "react";
import { cn } from "@/lib/utils";
import PrimaryButton from "./PrimaryButton";

interface WrongTurnMessageProps {
  className?: string;
}

const WrongTurnMessage: React.FC<WrongTurnMessageProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative flex w-full max-w-xl flex-col items-center text-center",
      className
    )}>
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
            404 • Wrong Turn
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-down" style={{ animationDelay: "100ms" }}>
            Oops! You Took a Wrong Turn
          </h1>
          <p className="mt-6 text-lg text-muted-foreground animate-slide-down" style={{ animationDelay: "200ms" }}>
            Looks like you tried accessing this site using its IP address. But this isn't the way, my friend!
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto px-8 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm animate-slide-down" style={{ animationDelay: "300ms" }}>
          <p className="text-base font-medium">Meanwhile, here's a joke for you:</p>
          <p className="mt-4 text-muted-foreground"><strong>Why do programmers prefer dark mode?</strong></p>
          <p className="mt-2 italic">Because light attracts bugs!</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-down" style={{ animationDelay: "400ms" }}>
          <PrimaryButton>
            Go to Homepage
          </PrimaryButton>
          <PrimaryButton variant="outline">
            Report Issue
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default WrongTurnMessage;
