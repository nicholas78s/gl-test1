//import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setSearch } from '../redux/searchSlice.ts';
import styles from '../css/contacts.module.scss';

function Search() {
  const [userSearch, setUserSearch] = useState('');
  const dispatch = useAppDispatch();


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(setSearch({searchTerm: userSearch}));
      console.log('setSearch:', userSearch);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [userSearch, dispatch]);

  return (
    <div className={styles.contactSearch}>
      <input
          className={styles.contactImage + " " + styles.contactSearchControl}
          placeholder="Поиск"
          onChange={(e) => {
            setUserSearch(e.target.value);
          }}
          value={userSearch}
          autoFocus
        />
      <img className={styles.searchIcon} src={'/assets/search_icon.svg'} alt="Поиск" />
    </div>
  )
}

export default Search