'use client'

import React from 'react';
// import styles from './Hexagon.module.css';

const Hexagon = ({ children, id }) => {
  function handleHexClick(e) {
    // Set the input text on letter click
    e.target.innerHTML.length > 4 ? document.getElementById("input-text").value += e.target.innerHTML[9] : document.getElementById("input-text").value += e.target.innerHTML[1];
  }

  console.log("Hexagon Component: ", children);

  return (
    <div className="hexagon" id={id}>
      <div className="inner" onClick={handleHexClick}>
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
