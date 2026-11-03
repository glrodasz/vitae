import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { useSwipeable } from "react-swipeable";

import CarouselHeader from "./CarouselHeader";
import CarouselSubheader from "./CarouselSubheader";

interface CarouselItem {
  title: string;
  subtitle?: string;
  heading?: string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const carouselNavRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);
  const lastItemIndex = items.length - 1;
  const minSwipeDistance = 50;

  // Switching tabs brings the section back to its top, so the new tab is
  // read from the start instead of from the old tab's scroll position.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const container = containerRef.current;
    if (!container) return;
    const barHeight =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--document-bar-height")
      ) || 0;
    const top = container.getBoundingClientRect().top + window.scrollY - barHeight;
    if (window.scrollY > top) {
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [activeIndex]);

  const handleClickPrev = () => {
    if (activeIndex >= 1) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(lastItemIndex);
    }
  };

  const handleClickNext = () => {
    if (activeIndex < lastItemIndex) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleClickNext(),
    onSwipedRight: () => handleClickPrev(),
    delta: minSwipeDistance,
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true,
  });

  return (
    <>
      <div
        {...swipeHandlers}
        ref={(element: HTMLDivElement | null) => {
          swipeHandlers.ref(element);
          containerRef.current = element;
        }}
        className="carousel-container"
      >
        <div className="carousel-navigation" ref={carouselNavRef}>
          <CarouselHeader
            items={items}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
          <CarouselSubheader
            items={items}
            activeIndex={activeIndex}
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
          />
        </div>

        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              ref={isActive ? contentRef : null}
              key={index}
              className={classNames("carousel-slide", {
                "carousel-slide--active": isActive,
              })}
            >
              {item.content}
            </div>
          );
        })}
      </div>
        <style jsx>{`
        .carousel-container {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          touch-action: pan-y;
          width: 100%;
          min-height: 100%;
        }

        .carousel-navigation {
          display: flex;
          flex-direction: column;
          position: sticky;
          gap: 35px;
          top: var(--document-bar-height);
          background: var(--carousel-nav-bg);
          backdrop-filter: blur(10px);
          padding-bottom: 20px;
          z-index: 20;
        }

        .carousel-slide {
          height: 0;
          opacity: 0;
          scroll-margin-top: ${carouselNavRef.current?.offsetHeight ?? 0}px;
        }

        .carousel-slide > :global(.knowledge-masonry) {
          display: none;
        }

        .carousel-slide--active {
          padding: 35px 20px 0;
          height: auto;
          opacity: 1;
          transition: opacity 0.8s ease-in-out;
          z-index: 10;
        }

        @media (max-width: 639px) {
          .carousel-slide--active {
            padding: 28px 16px 0;
          }
        }

        @media (max-width: 767px) {
          .carousel-navigation {
            gap: 20px;
          }
        }

        .carousel-slide--active > :global(.knowledge-masonry) {
          display: block;
        }

        @media (min-width: 768px) {
          .carousel-navigation {
            position: relative;
            /* With position: relative, a non-zero top would shift the tabs onto the content. */
            top: 0;
          }

          .carousel-slide {
            padding: 0;
          }

          /* Breathing room between the section bar and the content. */
          .carousel-slide--active {
            padding-top: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Carousel;
