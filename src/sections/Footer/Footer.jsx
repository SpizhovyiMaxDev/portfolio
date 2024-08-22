import styles from "./Footer.module.css";
import Socials from "../../ui/Socials/Socials";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <p className={styles.copyright}>
            Thank you for attending my portfolio!
          </p>

          <Socials type="light" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
