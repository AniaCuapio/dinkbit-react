import React from 'react';
import styles from './Avatar.module.scss'

const Avatar = ({url}) => {

  return (
    <div className={styles.circle}>
        <img src={url}></img>
    </div>
  );
};

export default Avatar;
