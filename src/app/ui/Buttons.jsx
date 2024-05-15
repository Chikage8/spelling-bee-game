'use client'

import React from 'react'
import { shuffleWord } from '../page';

const Buttons = (props) => {
    function handleDelete() {
        document.getElementById("input-text").value = "";
    }
    
    function handleShuffle() {
        props.childSetWord(shuffleWord(props.word, props.center_letter));
    }
    
    function handleEnter() {
        
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