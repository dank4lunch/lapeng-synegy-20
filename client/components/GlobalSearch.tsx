import React, { useEffect } from 'react';
import { Search, X, ArrowRight, FileText, Package, CreditCard, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearch } from '@/contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const getIcon = (type: string) => {
  switch (type) {
    case 'page':
      return <Home className="h-4 w-4" />;
    case 'service':
      return <Package className="h-4 w-4" />;
    case 'plan':
      return <CreditCard className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'page':
      return 'Page';
    case 'service':
      return 'Service';
    case 'plan':
      return 'Pricing Plan';
    default:
      return 'Content';
  }
};

export const GlobalSearch: React.FC = () => {
  const { query, setQuery, results, isOpen, setIsOpen, clearSearch } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open search with Cmd+K or Ctrl+K
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsOpen(true);
      }
      
      // Close search with Escape
      if (event.key === 'Escape') {
        setIsOpen(false);
        clearSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen, clearSearch]);

  const handleResultClick = (url: string) => {
    navigate(url);
    setIsOpen(false);
    clearSearch();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      clearSearch();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="flex items-start justify-center pt-[10vh] px-4">
        <div className="w-full max-w-2xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Header */}
          <div className="flex items-center px-6 py-4 border-b border-border">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages, services, pricing plans..."
              className="border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(false);
                clearSearch();
              }}
              className="ml-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {query && results.length === 0 && (
              <div className="px-6 py-8 text-center text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-50" />
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-1">Try searching for pages, services, or pricing plans</p>
              </div>
            )}

            {results.length > 0 && (
              <div className="py-2">
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result.url)}
                    className={cn(
                      "w-full flex items-center px-6 py-3 hover:bg-muted/50 transition-colors text-left group",
                      index === 0 && "bg-muted/30"
                    )}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {result.title}
                          </h3>
                          <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                          {result.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            )}

            {!query && (
              <div className="px-6 py-8 text-center text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-50" />
                <p className="font-medium mb-2">Quick Search</p>
                <p className="text-sm">Start typing to search pages, services, and pricing plans</p>
                <div className="flex items-center justify-center mt-4 space-x-2 text-xs">
                  <kbd className="px-2 py-1 bg-muted rounded font-mono">⌘K</kbd>
                  <span>or</span>
                  <kbd className="px-2 py-1 bg-muted rounded font-mono">Ctrl+K</kbd>
                  <span>to open search</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
