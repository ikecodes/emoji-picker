import React, { useRef, useEffect } from 'react';

import styles from './EmojiSearch.module.css';
const SearchBar = ({ handleCategory, category, handleChangeValue }) => {
  const searchBar = useRef();
  useEffect(() => {
    searchBar.current.focus();
  }, [category]);

  const onChange = (e) => {
    if (searchBar.current.value !== '') {
      handleCategory('Search result');
      handleChangeValue(e.target.value);
    }
  };

  return <input ref={searchBar} type='text' placeholder='Search emoji...' className={styles.zcemsemojiinput} onChange={onChange} />;
};

export default SearchBar;
