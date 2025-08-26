import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleGetStarted = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7f3c1ec1e84040bdb36d1376cf54246e%2F3f2ec8494e6a407cb1043702f6d29cb8?format=webp&width=800"
                alt="Lapeng Synegy Logo"
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/services')}
              className={`transition-colors cursor-pointer ${
                location.pathname === '/services'
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className={`transition-colors cursor-pointer ${
                location.pathname === '/about'
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/pricing')}
              className={`transition-colors cursor-pointer ${
                location.pathname === '/pricing'
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`transition-colors cursor-pointer ${
                location.pathname === '/contact'
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Contact
            </button>
            <Button
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              <button
                onClick={() => handleNavigation('/services')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  location.pathname === '/services'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  location.pathname === '/about'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/pricing')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  location.pathname === '/pricing'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  location.pathname === '/contact'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={handleGetStarted}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
