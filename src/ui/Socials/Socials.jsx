import styles from "./Socials.module.css";

function Socials({ type, containerStyles }) {
  return (
    <div className={`${styles.socials} ${containerStyles}`}>
      <a
        href="https://linkedin.com/in/max-spizhovyi-310b34316"
        target="_blank"
        aria-label="linkedIn account"
        rel="noreferrer"
        className={styles[type]}
      >
        <svg width="28px" height="28px">
          <use href="/imgs/icons.svg#icon-linkedin-link"></use>
        </svg>
      </a>
      <a
        href="https://github.com/SpizhovyiMaxDev"
        target="_blank"
        aria-label="github repository"
        rel="noreferrer"
        className={styles[type]}
      >
        <svg width="28px" height="28px">
          <use href="/imgs/icons.svg#icon-github-link"></use>
        </svg>
      </a>
    </div>
  );
}

export default Socials;
