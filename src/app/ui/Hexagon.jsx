// components/Hexagon.js

import React from 'react';
import styles from './Hexagon.module.css';

const Hexagon = ({ children }) => {
  return (
    <div className={styles.hexagon}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
