
import React from "react";
import { cn } from "@/lib/utils";
import PrimaryButton from "./PrimaryButton";
import { Home, Flag, ShieldAlert, Bug, Cpu, Shield } from "lucide-react";

interface WrongTurnMessageProps {
  className?: string;
}

const WrongTurnMessage: React.FC<WrongTurnMessageProps> = ({ className }) => {
  const handleGoToHomepage = () => {
    window.location.href = "https://ffenjil.site";
  };

  const handleReportIssue = () => {
    window.location.href = "mailto:report@ffenjil.site?subject=Security%20Report%20-%20IP%20Access%20Attempt&body=Hello%20security%20team,%0A%0AI%20would%20like%20to%20report%20a%20potential%20security%20issue%20with%20your%20website.%0A%0ADetails:%0A%0A";
  };

  return (
    <div className={cn(
      "relative flex w-full max-w-xl flex-col items-center text-center",
      className
    )}>
      <div className="mb-8 animate-float">
        <div className="relative">
          <ShieldAlert size={120} className="text-primary/80" />
          <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground text-xs font-bold rounded-full p-2 animate-pulse">
            <Shield size={20} />
          </div>
        </div>
      </div>
      
      <div className="w-full space-y-6">
        <div className="space-y-2">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium animate-slide-down">
            <Cpu className="inline-block mr-1 h-3 w-3" /> IP Access Blocked
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-down" style={{ animationDelay: "100ms" }}>
            Nice Try, Hackerman! 👨‍💻
          </h1>
          <p className="mt-6 text-lg text-muted-foreground animate-slide-down" style={{ animationDelay: "200ms" }}>
            Accessing by IP address? That's like trying to break into Fort Knox through the air ducts. 
            Not on our watch! Please use the proper domain name instead.
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto px-8 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm animate-slide-down" style={{ animationDelay: "300ms" }}>
          <p className="text-base font-medium">Security Alert:</p>
          <p className="mt-4 text-muted-foreground"><strong>What happens when a hacker tries to attack a website?</strong></p>
          <p className="mt-2 italic">They get a <span className="font-bold text-destructive">byte</span> of their own medicine! <Bug className="inline-block h-4 w-4" /></p>
          <div className="mt-4 text-xs text-muted-foreground border-t pt-3">
            HTTP requests to IP addresses are being monitored. This is a security measure.
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-down" style={{ animationDelay: "400ms" }}>
          <PrimaryButton onClick={handleGoToHomepage}>
            <Home className="mr-1" /> Go to Homepage
          </PrimaryButton>
          <PrimaryButton variant="outline" onClick={handleReportIssue}>
            <Flag className="mr-1" /> Report Issue
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default WrongTurnMessage;
