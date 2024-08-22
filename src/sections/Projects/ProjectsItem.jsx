import { memo } from "react";
import styles from "./ProjectsItem.module.css";

function ProjectsItem({ project, type, registerProjectRef, isVisible }) {
  console.log(isVisible);
  return (
    <li
      className={`${styles.project} ${styles[type]} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      ref={registerProjectRef}
      data-id={project.id}
    >
      <div className={styles.projectImageContainer}>
        <img
          src={project.img}
          alt={project.name}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectTextContainer}>
        <h3 className="heading--tertiary mb-2">
          {project.name}
          <span>({project.type})</span>
          {project.icon}
        </h3>
        <p className="text--primary mb-2">{project.description}</p>
        <div className={styles.projectLinks}>
          {project.github && (
            <a
              href={project.github}
              className={styles.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              Github
              <svg width="24px" height="24px">
                <use href="/imgs/icons.svg#icon-github-link"></use>
              </svg>
            </a>
          )}
          <a
            href={project.demo}
            className={styles.projectLink}
            target="_blank"
            rel="noreferrer"
          >
            Demo
            <svg width="24px" height="24px">
              <use href="/imgs/icons.svg#icon-external-link"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
}

export default memo(ProjectsItem);
