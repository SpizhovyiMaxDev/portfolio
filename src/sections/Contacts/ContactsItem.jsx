import styles from "./ContactsItem.module.css";

function ContactsItem({ contact }) {
  return (
    <li className={styles.contact}>
      <div className={styles.contactIconCover}>
        <svg width="32px" height="32px" className={styles.contactIcon}>
          <use href={`/imgs/icons.svg#icon-${contact.icon}`}></use>
        </svg>
      </div>
      <div className={styles.contactTextContainer}>
        <h3 className="heading--tertiary mb-1">{contact.title}</h3>
        {contact.title === "YouTube" ? (
          <a
            href={contact.url}
            className={styles.contactLink}
            target="_blank"
            rel="noreferrer"
          >
            {contact.text}
          </a>
        ) : (
          <a href={contact.url} className={styles.contactLink}>
            {contact.text}
          </a>
        )}
      </div>
    </li>
  );
}

export default ContactsItem;
