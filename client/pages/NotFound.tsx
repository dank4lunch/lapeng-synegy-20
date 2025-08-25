import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
            <span className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              404
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </a>
            </Button>
            
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
