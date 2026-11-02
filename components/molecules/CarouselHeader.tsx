import React, { useRef, useEffect } from "react";
import Heading from "../atoms/Heading";

interface CarouselItem {
  title: string;
  subtitle?: string;
  heading?: string;
}

interface CarouselHeaderProps {
  items: CarouselItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const CarouselHeader: React.FC<CarouselHeaderProps> = ({ items, activeIndex, setActiveIndex }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const activeTab = headerRef.current.querySelector(`[data-index="${activeIndex}"]`);
      if (activeTab) {
        // Calculate the scroll position to center the active tab
        const headerWidth = headerRef.current.clientWidth;
        const tabLeft = (activeTab as HTMLElement).offsetLeft;
        const tabWidth = (activeTab as HTMLElement).offsetWidth;
        const scrollLeft = tabLeft - (headerWidth / 2) + (tabWidth / 2);

        // Smoothly scroll to the calculated position
        headerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <>
      <div className="header" ref={headerRef}>
        {items.map(({ title }, index) => (
          <div
            key={title}
            data-index={index}
            className={`tab ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="tab-title">
              <span className="tab-marker" aria-hidden="true" />
              <Heading size="xxs" isMarginless>
                {title}
              </Heading>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: flex-start;
          flex-wrap: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
        }

        .tab {
          flex: 1 0 auto;
          text-align: center;
          padding: 10px 20px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          border-bottom: 2px solid var(--border);
          transition: border-color 0.2s ease;
        }

        .tab :global(.heading) {
          font-family: var(--font-mono);
          font-weight: normal;
          letter-spacing: 0.02em;
          color: var(--heading-secondary);
        }

        .tab.is-active {
          border-bottom-color: var(--golden-yellow);
        }

        .tab.is-active :global(.heading) {
          font-weight: bold;
          color: var(--text);
        }

        .tab:hover :global(.heading) {
          color: var(--text);
        }

        .tab-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tab-marker {
          width: 8px;
          height: 8px;
          margin: 0 2px;
          flex-shrink: 0;
          transform: rotate(45deg);
        }

        .tab.is-active .tab-marker {
          background: var(--golden-yellow);
        }
      `}</style>
    </>
  );
};

export default CarouselHeader;
