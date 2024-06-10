//import React from 'react'
import { IContactCard } from '../models/ContactCard';
import styles from '../css/contacts.module.scss';

function ContactCard({name, phone, email}: IContactCard) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <h2 className={styles.contactName}>{name}</h2>

        <div className={styles.contactPhoneRow}>
          <img
            className={styles.contactPhoneIcon}
            src={'/assets/dc75627764984e24d0b5516a22635326.svg'}
            alt="alt text"
          />
          <div className={styles.contactPhoneNumber}>{phone}</div>
        </div>

        <div className={styles.contactPhoneRow1}>
          <img
            className={styles.contactEmailIcon}
            src={'/assets/a30fe4ccc6ff1ddd729a24e2e36327a0.svg'}
            alt="alt text"
          />
          <div className={styles.contactEmail}>{email}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard