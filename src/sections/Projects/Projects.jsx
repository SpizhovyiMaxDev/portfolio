import styles from "./Projects.module.css";

import projects from "../../data/projects";
import { useApp } from "../../context/AppContext";
import { useCallback, useEffect, useRef, useState } from "react";

import ProjectsItem from "./ProjectsItem";

function Projects() {
  const { sections } = useApp();
  const projectsRefs = useRef([]);
  const [visibleProjectsIds, setVisibleProjectsIds] = useState([]);

  const registerProjectRef = useCallback(function registerProjectRef(element) {
    if (element && !projectsRefs.current.includes(element))
      projectsRefs.current.push(element);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjectsIds((visibleProjectsIds) => [
              ...visibleProjectsIds,
              entry.target.dataset.id,
            ]);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    projectsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.projects} ref={sections.sectionProjects}>
      <div className="container">
        <span className="sub-heading mb-1">Portfolio</span>
        <h2 className="heading--secondary mb-large">Portfolio projects 🔎</h2>
      </div>

      <div className="container">
        <ul className={styles.projectsList}>
          {projects.map((project, index) => (
            <ProjectsItem
              key={project.id}
              project={project}
              isVisible={visibleProjectsIds.includes(project.id)}
              registerProjectRef={registerProjectRef}
              type={index % 2 ? "reverse" : "regular"}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
