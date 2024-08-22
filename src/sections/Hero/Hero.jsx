import styles from "./Hero.module.css";

import { useApp } from "../../context/AppContext";

import Socials from "../../ui/Socials/Socials";
import TextEffect from "../../ui/TextEffect/TextEffect";

const techStack = ["sass", "react", "html", "css", "js"];

function Hero() {
  const { sections } = useApp();
  return (
    <section className={styles.hero} ref={sections.sectionHero}>
      <div className="container">
        <div className={styles.heroContainer}>
          <div className={styles.heroTextContainer}>
            <h1 className="heading--primary mb-1">Front-End React Developer</h1>

            <TextEffect typingSpeed={25} className="text--primary mb-2">
              Hi, I’m Max Spizhovyi, based in British Columbia, Canada. I
              specialize in creating responsive, user-friendly websites and web
              applications that provide exceptional user experiences and drive
              results.
            </TextEffect>

            <Socials type="dark" containerStyles="mb-2" />

            <div className={styles.heroTechStack}>
              <p>Tech Stack</p>
              {techStack.map((skill) => {
                return (
                  <svg className={styles.heroSkill} key={skill}>
                    <use href={`/imgs/icons.svg#icon-${skill}`}></use>
                  </svg>
                );
              })}
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <img
              src="/imgs/developer/hero.webp"
              className={styles.heroImage}
              aria-label="Max Spizhovyi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
