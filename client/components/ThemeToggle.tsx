import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className, 
  variant = 'ghost', 
  size = 'icon' 
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun 
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300',
            theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          )} 
        />
        <Moon 
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300',
            theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          )} 
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
