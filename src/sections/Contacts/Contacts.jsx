import styles from "./Contacts.module.css";

import { contacts } from "../../data/contacts";
import { useApp } from "../../context/AppContext";

import ContactsItem from "./ContactsItem";

function Contacts() {
  const { sections } = useApp();

  return (
    <section className={styles.contacts} ref={sections.sectionContacts}>
      <div className="container">
        <span className="sub-heading mb-1">Contacts</span>
        <h2 className="heading--secondary mb-6">
          Feel free to get in touch below. 👇
        </h2>
      </div>

      <div className="container">
        <ul className={styles.contactsList}>
          {contacts.map((contact) => (
            <ContactsItem contact={contact} key={contact.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
