import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle: React.FC = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Sync state with DOM on mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) return <div className="w-12 h-12" />; // Prevent hydration mismatch

    return (
        <button
            onClick={toggleTheme}
            className="relative p-3 border border-neutral-900 dark:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 w-12 h-12 flex items-center justify-center overflow-hidden group"
            aria-label="Toggle Dark Mode"
        >
            <div className={`absolute inset-0 flex items-center justify-center transform transition-all duration-500 ease-in-out ${resolvedTheme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`}>
                <Moon size={20} className="text-neutral-900" />
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transform transition-all duration-500 ease-in-out ${resolvedTheme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                <Sun size={20} className="text-neutral-100" />
            </div>
        </button>
    );
};