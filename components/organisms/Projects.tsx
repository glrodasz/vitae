import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Project from "../molecules/Project";
import { projects } from "../../data/projects";

const Projects: React.FC = () => {
  return (
    <>
      <PageContainer>
        <Heading size="md" isCentered>
          <strong>Selected</strong> projects
        </Heading>
        <div className="projects-grid">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </PageContainer>
      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-top: 20px;
        }

        @media (min-width: 1140px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 50px;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
