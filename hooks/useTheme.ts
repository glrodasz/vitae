import { useState, useEffect } from 'react';

interface ThemeState {
  isDarkMode: boolean;
}

/**
 * Custom hook to detect and track theme changes
 * @returns Theme state and toggle function
 */
const useTheme = (): ThemeState => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return { isDarkMode };
};

export default useTheme;
