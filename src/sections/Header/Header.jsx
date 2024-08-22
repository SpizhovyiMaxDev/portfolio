import styles from "./Header.module.css";

import { useState } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { navigation } from "../../data/navigation.js";

function Header() {
  const { sections } = useApp();
  const [openMobileNav, setOpenMobileNav] = useState(false);

  function handleScroll(section, e) {
    const currentSection = sections[section].current;

    if (
      window.innerWidth < 950 &&
      !e.target.classList.contains(styles.logotype)
    ) {
      setOpenMobileNav(false);
      setTimeout(() => {
        currentSection.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      currentSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className={styles.header}>
      <span
        className={styles.logotype}
        onClick={(e) => handleScroll("sectionHero", e)}
      >
        maxweb.studio
      </span>

      <nav
        className={`${styles.navigation} ${
          openMobileNav ? styles.openNav : styles.closeNav
        }`}
      >
        <ul className={styles.navigationList}>
          {navigation.map((link, index) => (
            <li
              key={link.id}
              className={styles.navigationListItem}
              onClick={(e) => handleScroll(link.scrollTo, e)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={styles.navButton}
        aria-label="Hamburger toogler"
        onClick={() => setOpenMobileNav((prev) => !prev)}
      >
        <svg width="36px" height="36px">
          <use
            href={`/imgs/icons.svg#icon-hamburger-${
              openMobileNav ? "close" : "open"
            }`}
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
