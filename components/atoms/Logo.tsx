import React from "react";
import classNames from "classnames";
import Image from "next/image";
import useTheme from "../../hooks/useTheme";

interface LogoProps {
  logoName?: string;
  maxWidth?: number;
  isCentered?: boolean;
  shouldInvert?: boolean | string;
}

const Logo: React.FC<LogoProps> = ({
  logoName = "guillermorodas",
  maxWidth = 290,
  isCentered,
  shouldInvert = false
}) => {
  const { isDarkMode } = useTheme();

  let logoSrc: string = logoName;
  let invert: boolean = false;

  if (typeof shouldInvert === 'string' && isDarkMode) {
    logoSrc = `${logoName}${shouldInvert}`;
  } else if (isDarkMode) {
    invert = shouldInvert as boolean;
  }

  return (
    <>
      <Image
        className={classNames("logo", {
          "is-centered": isCentered,
        })}
        src={`/logos/${logoSrc}.svg`}
        width={maxWidth}
        height={120}
        alt={logoName}
        fetchPriority="high"
        style={invert ? { filter: 'brightness(0) invert(1)' } : {}}
      ></Image>
      <style jsx>{`
        :global(.logo) {
          width: 100%;
          max-width: ${maxWidth}px;
          height: auto;
          aspect-ratio: ${maxWidth} / 120;
          filter: drop-shadow(0 0 1px var(--logo-shadow));
        }

        .is-centered {
          display: inline-block;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Logo;
