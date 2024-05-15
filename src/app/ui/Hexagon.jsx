'use client'

import React from 'react';
// import styles from './Hexagon.module.css';

const Hexagon = ({ children, id }) => {
  function handleHexClick(e) {
    console.log(e.target.innerHTML[9]);
    document.getElementById("input-text").value += e.target.innerHTML[9];
  }

  return (
    <div className="hexagon" id={id}>
      <div className="inner" onClick={handleHexClick}>
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
