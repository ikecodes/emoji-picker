import React from 'react';

import styles from './../EmojiBox/EmojiBox.module.css';
const EmojiItem = ({ emoji }) => {
  return <li className={styles.zcembemojiboxItem}>{emoji.character}</li>;
};

export default EmojiItem;
