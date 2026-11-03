import { useLayoutEffect, type RefObject } from 'react';

/**
 * Font size at which `text` spans `targetWidth`. Letter-spacing is a fixed
 * px amount per character, so only the glyph part of the width scales.
 */
export function fittedFontSize(
  fontSize: number,
  width: number,
  targetWidth: number,
  letterSpacing: number,
  charCount: number,
): number {
  const tracking = letterSpacing * charCount;
  const glyphWidth = width - tracking;
  if (glyphWidth <= 0 || targetWidth <= tracking) return fontSize;
  return (fontSize * (targetWidth - tracking)) / glyphWidth;
}

/**
 * Scales the font size of `fitRef` so its rendered width matches `matchRef`,
 * re-fitting when web fonts load or the target's width changes.
 */
export function useMatchWidth(
  fitRef: RefObject<HTMLElement | null>,
  matchRef: RefObject<HTMLElement | null>,
  deps: readonly unknown[] = [],
): void {
  useLayoutEffect(() => {
    const fit = fitRef.current;
    const match = matchRef.current;
    if (!fit || !match) return;

    const update = () => {
      fit.style.fontSize = '';
      const targetWidth = match.getBoundingClientRect().width;
      const width = fit.getBoundingClientRect().width;
      // Hidden (e.g. the closed mobile overlay on desktop): nothing to measure yet.
      if (targetWidth === 0 || width === 0) return;
      const style = getComputedStyle(fit);
      const size = fittedFontSize(
        parseFloat(style.fontSize),
        width,
        targetWidth,
        parseFloat(style.letterSpacing) || 0,
        fit.textContent?.length ?? 0,
      );
      fit.style.fontSize = `${size}px`;
    };

    update();
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) update();
    });
    const observer = new ResizeObserver(update);
    observer.observe(match);
    return () => {
      cancelled = true;
      observer.disconnect();
      fit.style.fontSize = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
