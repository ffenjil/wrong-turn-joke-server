
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WrongTurnLayout from "@/components/WrongTurnLayout";
import PrimaryButton from "@/components/PrimaryButton";
import { Home, FileQuestion, AlertCircle } from "lucide-react";

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

  const handleReportIssue = () => {
    window.location.href = "mailto:report@ffenjil.site?subject=404%20Error%20Report&body=Hello%20team,%0A%0AI%20encountered%20a%20404%20error%20at%20the%20following%20URL:%0A%0A" + window.location.href;
  };

  return (
    <WrongTurnLayout>
      <div className="relative flex w-full max-w-xl flex-col items-center text-center">
        <div className="mb-8 animate-float">
          <div className="relative">
            <FileQuestion size={120} className="text-primary/80" />
            <div className="absolute -top-2 -right-2 bg-amber-500 text-amber-950 text-xs font-bold rounded-full p-2 animate-pulse">
              <AlertCircle size={20} />
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium animate-slide-down">
              404 • Page Not Found
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-down" style={{ animationDelay: "100ms" }}>
              Houston, we have a problem!
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-slide-down" style={{ animationDelay: "200ms" }}>
              The page you're looking for has vanished into the digital void. Maybe it's on vacation, or maybe it never existed at all. 🕵️‍♂️
            </p>
          </div>
          
          <div className="w-full max-w-md mx-auto px-8 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm animate-slide-down" style={{ animationDelay: "300ms" }}>
            <p className="text-base font-medium">While you're here:</p>
            <p className="mt-4 text-muted-foreground"><strong>Why don't programmers like nature?</strong></p>
            <p className="mt-2 italic">It has too many bugs and no debugging tools!</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-down" style={{ animationDelay: "300ms" }}>
            <PrimaryButton onClick={handleReturnHome}>
              <Home className="mr-1" /> Return to Home
            </PrimaryButton>
            <PrimaryButton variant="outline" onClick={handleReportIssue}>
              <AlertCircle className="mr-1" /> Report This Page
            </PrimaryButton>
          </div>
        </div>
      </div>
    </WrongTurnLayout>
  );
};

export default NotFound;
