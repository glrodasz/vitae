import React, { useRef, useEffect } from "react";
import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";

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
              <Icon
                size="sm"
                name={index === activeIndex ? "diamond" : "EMPTY"}
              />
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
          align-items: baseline;
          gap: 8px;
        }
      `}</style>
    </>
  );
};

export default CarouselHeader;
