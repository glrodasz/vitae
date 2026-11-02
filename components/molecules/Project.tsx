import React from "react";
import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Link from "../atoms/Link";
import { Project as ProjectData } from "../../types/data";

interface ProjectProps {
  project: ProjectData;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <>
      <div className="project">
        <div className="media">
          <Icon size="md" name="diamond-alt" />
        </div>
        <div className="content">
          <Heading size="xs" isMarginless>
            {project.name}
          </Heading>
          <Paragraph isMarginless>{project.description}</Paragraph>
          <Heading color="secondary" size="xxs" weight="normal" isMarginless>
            {project.stack.join(" · ")}
          </Heading>
          <div className="links">
            {project.links.map((link) => (
              <Link key={link.url} href={`https://${link.url}`} weight="bold">
                {link.label}: {link.url}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .project {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-width: 0;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-wrap: anywhere;
        }
      `}</style>
    </>
  );
};

export default Project;
