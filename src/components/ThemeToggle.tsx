import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-9 sm:h-9">
        <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-8 h-8 sm:w-9 sm:h-9"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform hover:-rotate-12" />
      )}
    </Button>
  );
};

export default ThemeToggle;
