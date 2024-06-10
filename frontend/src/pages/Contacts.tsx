//import React from 'react'
import styles from '../css/contacts.module.scss';
import Search from '../components/Search';
import ContactsList from '../components/ContactsList';

function Contacts() {
  return (
    <>
      <div className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          <Search />
          <ContactsList />
        </div>
      </div>
    </>
  )
}

export default Contacts