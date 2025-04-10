import styles from "./About.module.css";
import { useApp } from "../../context/AppContext";

function About() {
  const { sections } = useApp();

  return (
    <section className={styles.about} ref={sections.sectionAbout}>
      <div className="container">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImageContainer}>
            <img
              src="/imgs/developer/about.webp"
              alt="Maksym Spizhovyi, Frontend Developer"
              className={styles.aboutImage}
            />
          </div>
          <div>
            <span className="sub-heading mb-1">About Me</span>
            <h2 className="heading--tertiary mb-2">
              Experienced in Building Custom Websites
            </h2>
            <p className="text--primary">
              I’m a Front-End Developer specializing in creating user-friendly,
              responsive websites that deliver exceptional user experiences.
              With expertise in performance optimization, accessibility, and
              modern web technologies like React, I build digital solutions that
              drive results for businesses of all sizes. Passionate about web
              development, I stay up-to-date with the latest trends, ensuring
              that the websites I develop are not only visually appealing but
              also efficient, and search engine optimized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
