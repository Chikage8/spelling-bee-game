'use client'

import React, {useState} from 'react';

const Hexagon = ({ children, id, hexClickable, setHexClickable, clickedHexes, setClickedHexes}) => {

  function handleHexClick(e) {
    // If the letter hasn't been used already add the letter to the word
    if(hexClickable) {
      if (e.target.innerHTML.length > 28) {
        document.getElementById("input-text").value += e.target.innerHTML[28];
      } else if (e.target.innerHTML.length > 19) {
        document.getElementById("input-text").value += e.target.innerHTML[20];
      } else if (e.target.innerHTML.length > 7) {
        document.getElementById("input-text").value += e.target.innerHTML[9];
      } else if(e.target.innerHTML.length > 1){
        document.getElementById("input-text").value += e.target.innerHTML[1];
      } else {
        document.getElementById("input-text").value += e.target.innerHTML[0];
      }
      setHexClickable(false);
      setClickedHexes([...clickedHexes, id]);
    }
  }

  return (
    <div className="hexagon" key={id} id={id} onClick={handleHexClick}>
      <div className="inner">
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
