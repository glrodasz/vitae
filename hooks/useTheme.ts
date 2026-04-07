import { useState, useEffect } from 'react';

interface ThemeState {
  isDarkMode: boolean;
}

/**
 * Custom hook to detect and track theme changes
 * @returns Theme state and toggle function
 */
const useTheme = (): ThemeState => {
  // Read the class set by the inline script in _document.tsx synchronously so
  // the initial render is already correct and no post-paint update is needed.
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  useEffect(() => {
    // Listen for theme changes (e.g. user toggling)
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
