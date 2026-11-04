import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { pdfDarkPath, pdfPath, pdfPathFor } from "../../data/site";
import useTheme from "../../hooks/useTheme";

interface PdfDownloadProps {
  className?: string;
  children: React.ReactNode;
}

interface PdfOption {
  label: string;
  hint: string;
  href: string;
  isDark: boolean;
}

const options: PdfOption[] = [
  { label: "Dark", hint: "Matches this page", href: pdfDarkPath, isDark: true },
  { label: "Light", hint: "Best for printing", href: pdfPath, isDark: false },
];

/**
 * Download PDF link. In light mode it downloads the light PDF directly;
 * in dark mode it first asks which version the reader wants.
 */
const PdfDownload: React.FC<PdfDownloadProps> = ({ className, children }) => {
  const { isDarkMode } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => setIsMounted(true), []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const dialog = dialogRef.current;
    if (!isDarkMode || !dialog?.showModal) return;
    event.preventDefault();
    dialog.showModal();
  };

  const close = () => dialogRef.current?.close();

  // Close when the backdrop (the dialog box itself, outside the panel) is clicked.
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) close();
  };

  const dialog = (
    <dialog
      ref={dialogRef}
      className="pdf-dialog"
      aria-labelledby="pdf-dialog-title"
      onClick={handleBackdropClick}
    >
      <div className="pdf-dialog-panel">
        <div className="pdf-dialog-header">
          <p className="pdf-dialog-eyebrow">Download PDF</p>
          <button type="button" className="pdf-dialog-close" aria-label="Close" onClick={close}>
            ×
          </button>
        </div>
        <h2 id="pdf-dialog-title">Which version do you want?</h2>
        <div className="pdf-dialog-options">
          {options.map((option) => (
            <a
              key={option.label}
              className={option.isDark ? "pdf-option is-dark" : "pdf-option"}
              href={option.href}
              download
              onClick={close}
            >
              <span className="pdf-option-sheet" aria-hidden="true">
                <span className="pdf-option-line is-accent" />
                <span className="pdf-option-line" />
                <span className="pdf-option-line is-short" />
                <span className="pdf-option-line" />
              </span>
              <span className="pdf-option-label">{option.label}</span>
              <span className="pdf-option-hint">{option.hint}</span>
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pdf-dialog {
          width: min(420px, calc(100vw - 32px));
          max-width: none;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--background);
          color: var(--text);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
        }

        .pdf-dialog::backdrop {
          background: rgba(0, 0, 0, 0.6);
        }

        .pdf-dialog-panel {
          padding: 20px 24px 24px;
        }

        .pdf-dialog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pdf-dialog-eyebrow {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--heading-secondary);
        }

        .pdf-dialog-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-right: -8px;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: var(--text);
          font-size: 2.2rem;
          line-height: 1;
          cursor: pointer;
        }

        .pdf-dialog-close:hover,
        .pdf-dialog-close:focus-visible {
          color: var(--golden-yellow);
        }

        h2 {
          margin-top: 4px;
          font-family: var(--font-headings);
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .pdf-dialog-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 20px;
        }

        .pdf-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 16px 12px 14px;
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text);
          text-decoration: none;
          transition: border-color 0.15s ease, background 0.15s ease;
        }

        .pdf-option:hover,
        .pdf-option:focus-visible {
          border-color: var(--golden-yellow);
          background: var(--surface);
          outline: none;
        }

        /* A tiny A4 sheet in the PDF's own colors. */
        .pdf-option-sheet {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 56px;
          height: 76px;
          margin-bottom: 8px;
          padding: 10px 8px;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          background: var(--white);
        }

        .pdf-option.is-dark .pdf-option-sheet {
          border-color: #3a3a3a;
          background: var(--black);
        }

        .pdf-option-line {
          height: 4px;
          border-radius: 2px;
          background: #c9c9c9;
        }

        .pdf-option.is-dark .pdf-option-line {
          background: #555;
        }

        .pdf-option-line.is-accent {
          width: 70%;
          background: var(--golden-yellow);
        }

        .pdf-option-line.is-short {
          width: 60%;
        }

        .pdf-option-label {
          font-family: var(--font-mono);
          font-size: 1.3rem;
          letter-spacing: 0.04em;
        }

        .pdf-option-hint {
          font-family: var(--font-body);
          font-size: 1.2rem;
          color: var(--paragraph-primary);
          text-align: center;
        }
      `}</style>
    </dialog>
  );

  return (
    <>
      <a className={className} href={pdfPathFor(isDarkMode)} download onClick={handleClick}>
        {children}
      </a>
      {isMounted && createPortal(dialog, document.body)}
    </>
  );
};

export default PdfDownload;
