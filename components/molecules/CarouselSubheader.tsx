import React from "react";

import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";

interface CarouselItem {
  title: string;
  subtitle?: string;
  heading?: string;
}

interface CarouselSubheaderProps {
  items: CarouselItem[];
  activeIndex: number;
  handleClickPrev: () => void;
  handleClickNext: () => void;
}

const CarouselSubheader: React.FC<CarouselSubheaderProps> = ({
  items,
  activeIndex,
  handleClickPrev,
  handleClickNext,
}) => {
  return (
    <>
      <div className="subheader">
        <div className="content">
        <Icon
          name="chevron-left"
          isRounded
          isClickable
          onClick={handleClickPrev}
          shouldInvert={true}
        />
        <div className="titles">
          <Heading size="xs" isCentered isMarginless isComfortable>
            <strong>
              {items[activeIndex].subtitle || items[activeIndex].title}
            </strong>
          </Heading>
          {items[activeIndex].heading && (
            <Heading size="xs" isCentered isMarginless isComfortable>
              {items[activeIndex].heading}
            </Heading>
          )}
        </div>
        <Icon
          name="chevron-right"
          isRounded
          isClickable
          onClick={handleClickNext}
          shouldInvert={true}
        />
      </div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subheader {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .titles {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .titles :global(.heading) {
          line-height: 1.15;
        }

        .content :global(.heading) {
          --subheader-width: 180px;

          width: var(--subheader-width);
        }

        @media (min-width: 1140px) {
          .subheader {
            max-width: fit-content;
          }
        }
      `}</style>
    </>
  );
};

export default CarouselSubheader;
