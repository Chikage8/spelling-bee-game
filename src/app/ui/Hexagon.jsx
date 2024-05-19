'use client'

import React from 'react';
// import styles from './Hexagon.module.css';

const Hexagon = ({ children, id }) => {
  function handleHexClick(e) {
    // Set the input text on letter click
    // console.log("e.target.innerHTML: ", e.target.innerHTML)
    // console.log("e.target.innerHTML.length: ", e.target.innerHTML.length)
    
    
    
    if (e.target.innerHTML.length > 28) {
      // console.log("e.target.innerHTML[28]: ", e.target.innerHTML[28])
      document.getElementById("input-text").value += e.target.innerHTML[28];
    } else if (e.target.innerHTML.length > 19) {
      // console.log("e.target.innerHTML[20]: ", e.target.innerHTML[20])
      document.getElementById("input-text").value += e.target.innerHTML[20];
    } else if (e.target.innerHTML.length > 7) {
      // console.log("e.target.innerHTML[10]: ", e.target.innerHTML[9])
      document.getElementById("input-text").value += e.target.innerHTML[9];
    } else if(e.target.innerHTML.length > 1){
      // console.log("e.target.innerHTML[1]: ", e.target.innerHTML[1])
      document.getElementById("input-text").value += e.target.innerHTML[1];
    } else {
      // console.log("e.target.innerHTML[0]: ", e.target.innerHTML[0])
      document.getElementById("input-text").value += e.target.innerHTML[0];
    }
    // switch (true) {
    //   case (e.target.innerHTML.length > 12):
    //     document.getElementById("input-text").value += e.target.innerHTML[24];
    //     break;
    //   case (e.target.innerHTML.length > 4):
    //     document.getElementById("input-text").value += e.target.innerHTML[9];
    //     break;
    //   case (e.target.innerHTML.length <= 4):
    //     document.getElementById("input-text").value += e.target.innerHTML[1];
    //     break;
    // }
    // e.target.innerHTML.length > 4 ? document.getElementById("input-text").value += e.target.innerHTML[9] : document.getElementById("input-text").value += e.target.innerHTML[1];
  }

  console.log("Hexagon Component: ", children);

  return (
    <div className="hexagon" key={id} id={id} onClick={handleHexClick}>
      <div className="inner">
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
