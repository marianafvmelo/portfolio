import styles from "../styles/Skills.module.scss";

import {
  HTMLIcon,
  CSSIcon,
  CSSModulesIcon,
  StyledComponentsIcon,
  SassIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
} from "./SVGs/Icons";

const skills = [
  {
    name: "HTML",
    icon: <HTMLIcon />,
  },
  {
    name: "CSS",
    icon: <CSSIcon />,
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
  },
  {
    name: "Figma",
    icon: <FigmaIcon />,
  },
  {
    name: "Git",
    icon: <GitIcon />,
  },
  {
    name: "Github",
    icon: <GithubIcon />,
  },

  {
    name: "React",
    icon: <ReactIcon />,
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
  },
  {
    name: "Next",
    icon: <NextIcon />,
  },
  {
    name: "CSS Modules",
    icon: <CSSModulesIcon />,
  },
  {
    name: "Styled Components",
    icon: <StyledComponentsIcon />,
  },
  {
    name: "SASS",
    icon: <SassIcon />,
  },
];

export const Skills = () => {
  return (
    <div className={styles.skillsWrapper}>
      <h3>Skills</h3>

      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <li key={skill.name} data-skill={skill.name} title={skill.name}>
            {skill.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};
