import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'plan' | 'content';
}

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  search: (searchQuery: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// Mock data for search - in a real app, this might come from an API or database
const searchData: SearchResult[] = [
  {
    id: '1',
    title: 'Home',
    description: 'Bridge the gap between creativity and technology with our integrated solutions',
    url: '/',
    type: 'page'
  },
  {
    id: '2',
    title: 'Services',
    description: 'Comprehensive solutions for modern businesses including media, marketing, and technology',
    url: '/services',
    type: 'page'
  },
  {
    id: '3',
    title: 'About Us',
    description: 'Learn about Lapeng Synegy, our directors, mission, and core values',
    url: '/about',
    type: 'page'
  },
  {
    id: '4',
    title: 'Pricing',
    description: 'Virtual Assistant subscription plans tailored to your business needs',
    url: '/pricing',
    type: 'page'
  },
  {
    id: '5',
    title: 'Contact',
    description: 'Get in touch with our team for consultations and project discussions',
    url: '/contact',
    type: 'page'
  },
  {
    id: '14',
    title: 'Blog',
    description: 'Read our latest insights on marketing, technology, and business growth',
    url: '/blog',
    type: 'page'
  },
  {
    id: '15',
    title: 'AI in Small Business Marketing',
    description: 'How artificial intelligence is revolutionizing marketing for small businesses',
    url: '/blog/1',
    type: 'content'
  },
  {
    id: '16',
    title: 'Building Strong Brand Identity',
    description: 'Essential elements for creating a memorable brand in the digital age',
    url: '/blog/2',
    type: 'content'
  },
  {
    id: '17',
    title: 'Social Media Trends 2024',
    description: 'Emerging social media trends that will shape business connections',
    url: '/blog/3',
    type: 'content'
  },
  {
    id: '6',
    title: 'Social Media Management',
    description: 'Strategic social media campaigns and community management services',
    url: '/services',
    type: 'service'
  },
  {
    id: '7',
    title: 'Brand Development',
    description: 'Complete brand identity and positioning strategies',
    url: '/services',
    type: 'service'
  },
  {
    id: '8',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    url: '/services',
    type: 'service'
  },
  {
    id: '9',
    title: 'AI Solutions',
    description: 'AI-driven automation and smart business solutions',
    url: '/services',
    type: 'service'
  },
  {
    id: '10',
    title: 'Focus Plan',
    description: 'R1,850/month - Perfect for solopreneurs and first-time VA users',
    url: '/pricing',
    type: 'plan'
  },
  {
    id: '11',
    title: 'Momentum Plan',
    description: 'R3,700/month - For growing businesses that need consistent support',
    url: '/pricing',
    type: 'plan'
  },
  {
    id: '12',
    title: 'Synergy Plan',
    description: 'R7,400/month - For busy professionals and small teams',
    url: '/pricing',
    type: 'plan'
  },
  {
    id: '13',
    title: 'Executive Partner',
    description: 'R12,000+/month - For established businesses needing dedicated VA support',
    url: '/pricing',
    type: 'plan'
  }
];

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const search = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults.slice(0, 8)); // Limit to 8 results
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  useEffect(() => {
    search(query);
  }, [query]);

  const value = {
    query,
    setQuery,
    results,
    isOpen,
    setIsOpen,
    search,
    clearSearch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
