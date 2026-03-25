import React from "react";
import Country from "../molecules/Country";

const Relocation: React.FC = () => {
  return (
    <>
      <div className="relocation">
        <Country flag="colombia" description="From Colombia" />
        <div className="connector-icon">
          <svg
            className="connector-airplane"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              className="connector-airplane-path"
              d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
              fill="var(--relocation-connector-icon)"
              stroke="var(--relocation-connector-stroke)"
              strokeWidth={3}
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="divider" />
        <Country flag="sweden" description="Living in Sweden" />
      </div>
      <style jsx>{`
        .relocation {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;
          width: 350px;
        }

        .connector-icon {
          position: relative;
          top: -20px;
        }

        .connector-airplane {
          display: block;
          width: 30px;
          height: 30px;
        }

        .connector-airplane-path {
          paint-order: stroke fill;
        }

        .divider {
          position: absolute;
          top: 28px;
          z-index: -1;
          height: 0;
          border-top: 1px dashed var(--storm-dust);
          width: 50%;
        }
      `}</style>
    </>
  );
};

export default Relocation;
