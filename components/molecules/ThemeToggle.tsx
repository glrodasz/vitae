import { useState, useEffect } from 'react';
import Heading from '../atoms/Heading';
import { initializeTheme, toggleTheme, createSystemThemeListener } from '../../utils/theme';

interface ThemeToggleProps {
  isHidden?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isHidden = true }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme and get initial state
    const initialTheme = initializeTheme();
    setIsDark(initialTheme);

    // Listen for system theme changes
    const cleanup = createSystemThemeListener(setIsDark);

    return cleanup as () => void;
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme(isDark);
    setIsDark(newTheme);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className={`toggle-container ${isHidden ? 'hidden' : ''}`}
        aria-label="Toggle theme"
        role="switch"
        aria-checked={isDark}
      >
        <Heading
          size="xxs"
          isMarginless
          isInline
          weight={"bold"}
          color={isDark ? "disabled" : "primary"}
        >
          Light
        </Heading>
        <div className="switch">
          <div className="switch-handle"></div>
        </div>
        <Heading
          size="xxs"
          isMarginless
          isInline
          weight={"bold"}
          color={isDark ? "primary" : "disabled"}
        >
          Dark
        </Heading>
      </button>
      <style jsx>{`
        .toggle-container {
          background: var(--surface);
          padding: 8px 12px;
          display: flex;
          align-items: baseline;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 999px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .toggle-container.hidden {
          display: none;
        }

        .toggle-container:hover,
        .toggle-container:focus-visible {
          border-color: var(--golden-yellow);
        }

        .switch {
          width: 32px;
          height: 18px;
          background-color: var(--black);
          border-radius: 100px;
          padding: 2px;
          position: relative;
          transition: background-color 0.3s ease;
          transform: translateY(2px);
          box-shadow: inset 0 0 0 1px var(--border);
        }

        .switch-handle {
          width: 12px;
          height: 12px;
          background-color: var(--golden-yellow);
          border-radius: 50%;
          position: absolute;
          left: 3px;
		  top: 3px;
          transition: all 0.3s ease;
        }

        .switch-handle::after {
          content: '';
          position: absolute;
          top: 0;
          left: 3px;
          width: 12px;
          height: 12px;
          background-color: var(--black);
          border-radius: 50%;
          transition: transform 0.3s ease;
          transform: scale(0);
        }

        :global(.dark) .switch-handle {
          transform: translateX(14px);
          background-color: var(--golden-yellow);
        }

        :global(.dark) .switch-handle::after {
          transform: scale(1) translateX(-8px);
        }
      `}</style>
    </>
  );
};

export default ThemeToggle;
