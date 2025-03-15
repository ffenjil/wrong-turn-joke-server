
import React from "react";
import { cn } from "@/lib/utils";

interface WrongTurnLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const WrongTurnLayout: React.FC<WrongTurnLayoutProps> = ({ children, className }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-secondary/50">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 -right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      {/* Content */}
      <div className={cn(
        "relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 py-12",
        className
      )}>
        {children}
      </div>
    </div>
  );
};

export default WrongTurnLayout;
