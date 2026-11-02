import Card from "./Card";
import { ExpertiseItem } from "../../types/data";

interface SkillCardsProps {
  skills: ExpertiseItem[];
}

const SkillCards: React.FC<SkillCardsProps> = ({ skills }) => {
  return (
    <>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Card key={skill.title} {...skill} isInverted={index % 2 !== 0} />
        ))}
      </div>
      <style jsx>{`
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0 30px;
        }

        @media (min-width: 1140px) {
          .skills-grid {
            justify-content: space-between;
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </>
  );
};

export default SkillCards;
