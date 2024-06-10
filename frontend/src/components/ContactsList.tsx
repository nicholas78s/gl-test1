//import React from 'react'
import styles from '../css/contacts.module.scss';
import ContactCard from './ContactCard';
import { IContactCard } from '../models/ContactCard';
import useApi from '../hooks/useApi';
import ContactDetail from './ContactDetail';
import { useState } from 'react';

function ContactsList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, _setData, isLoading, error] = useApi(import.meta.env.VITE_API_URL, []);

  const [showDetail, setShowDetail] = useState(false);
  const [detailItem, setDetailItem] = useState({});

  let items: IContactCard[] = [];

  if (data instanceof Array) {
    items = [...data];
  }

  const handleContactCardClick = (item: IContactCard) => {
    setShowDetail(true);
    setDetailItem(item);
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      <div className={styles.contactGrid}>
        {
          items.map((item: IContactCard) => (
            <div key={item.name} onClick={() => {handleContactCardClick(item)}} >
              <ContactCard name={item.name} phone={item.phone} email={item.email} />
            </div>
          ))
        }
      </div>
      <ContactDetail show={showDetail} onClose={() => setShowDetail(false)} item={detailItem} />
     </>
  );
}

export default ContactsList
