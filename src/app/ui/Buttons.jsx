'use client'

import React from 'react'
import { shuffleWord } from '../page';

const Buttons = (props) => {
    const handleDelete = (e) => {
        // alert("Delete Clicked")
        let word = document.getElementById("input-text").value
        word = word.replace(word.charAt(word.length - 1), "");
        document.getElementById("input-text").value = word;
    }
    
    const handleShuffle = (e) => {
        props.childSetWord(shuffleWord(props.word, props.center_letter));
    }
    
    const handleEnter = (e) => {
        alert("Enter Clicked")
    }

        
    return (
        <div id='button-container' className='flex gap-1 ml-9'>
            <button className='gap-1 border-2 border-black p-1' id="delete-button" onClick={handleDelete}>Delete</button>
            <button className='gap-1 border-2 border-black p-1 ml-2' id="shuffle-button" onClick={handleShuffle}>Shuffle</button>
            <button className='gap-1 border-2 border-black p-1 ml-2' id="enter-button" onClick={handleEnter}>Enter</button>
        </div>
    )
}

export default Buttons