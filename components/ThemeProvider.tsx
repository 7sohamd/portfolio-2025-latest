'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [defaultTheme, setDefaultTheme] = useState<string>('dark');

    useEffect(() => {
        // Only run on client side to avoid hydration issues
        const hour = new Date().getHours();

        // Light theme: 6 AM (6) to 6 PM (18)
        // Dark theme: 6 PM (18) to 6 AM (6)
        const timeBasedTheme = (hour >= 6 && hour < 18) ? 'light' : 'dark';

        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('theme');

        // If no saved preference, use time-based theme
        if (!savedTheme) {
            setDefaultTheme(timeBasedTheme);
        }
    }, []);

    return <NextThemesProvider {...props} defaultTheme={defaultTheme}>{children}</NextThemesProvider>;
}
