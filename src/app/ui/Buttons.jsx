'use client'

import React from 'react'

const Buttons = () => {
    function handleDelete(e) {
        document.getElementById("input-text").value = "";
      }
    
      function handleShuffle(e) {
        
      }
    
      function handleEnter(e) {
        
      }
        
    return (
        <div id="button-container">
            <button id="delete-button" onClick={handleDelete}>Delete</button>
            <button id="shuffle-button" onClick={handleShuffle}>Shuffle</button>
            <button id="enter-button" onClick={handleEnter}>Enter</button>
        </div>
    )
}

export default Buttons