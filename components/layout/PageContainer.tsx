import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  fullHeight?: boolean;
  withCarousel?: boolean;
}

const PageContainer = ({ children, fullHeight, withCarousel }: PageContainerProps) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 768px;
          padding: 0 ${withCarousel ? "0" : "20px"};
          margin: 0 auto;
          ${fullHeight ? "min-height: 100%;" : ""}
          ${fullHeight ? "height: 100%;" : ""}
        }

        @media (max-width: 639px) {
          .container {
            padding: 0 ${withCarousel ? "0" : "16px"};
          }
        }

        @media (min-width: 1140px) {
          .container {
            max-width: 1280px;
            padding: 0 80px;
          }
        }
      `}</style>
    </>
  );
};

export default PageContainer;
