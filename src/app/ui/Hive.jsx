'use client'

import React from 'react'
import Hexagon from './Hexagon';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';

const Hive = (props) => {
    const [hex0Clickable, setHex0Clickable] = useState(true);
    const [hex1Clickable, setHex1Clickable] = useState(true);
    const [hex2Clickable, setHex2Clickable] = useState(true);
    const [hex3Clickable, setHex3Clickable] = useState(true);
    const [hex4Clickable, setHex4Clickable] = useState(true);
    const [hex5Clickable, setHex5Clickable] = useState(true);
    const [hex6Clickable, setHex6Clickable] = useState(true);

    // const [hexClicked, setHexClicked] = useState(false);
    const [clickedHexes, setClickedHexes] = useState([]);
    // useEffect(()=>{

    // }, [hexClicked]);

    const checkHexClickable = (i) => {
        if (i === 0) {
            return hex0Clickable;
        } else if (i === 1) {
            return hex1Clickable;
        } else if (i === 2) {
            return hex2Clickable;
        } else if (i === 3) {
            return hex3Clickable;
        } else if (i === 4) {
            return hex4Clickable;
        } else if (i === 5) {
            return hex5Clickable;
        } else if (i === 6) {
            return hex6Clickable;
        } 
    }

    const changeHexClickable = (i) => {
        console.log("called changeHexClickable with i: ", i);
        if (i === 0) {
            setHex0Clickable(!hex0Clickable);
        } else if (i === 1) {
            setHex1Clickable(!hex1Clickable);
        } else if (i === 2) {
            setHex2Clickable(!hex2Clickable);
        } else if (i === 3) {
            setHex3Clickable(!hex3Clickable);
        } else if (i === 4) {
            setHex4Clickable(!hex4Clickable);
        } else if (i === 5) {
            setHex5Clickable(!hex5Clickable);
        } else if (i === 6) {
            setHex6Clickable(!hex6Clickable);
        }
    }

    const makeHexClickable = (i) => {
        console.log("called makeHexClickable with i: ", i);
        if (i === 0) {
            setHex0Clickable(true);
        } else if (i === 1) {
            setHex1Clickable(true);
        } else if (i === 2) {
            setHex2Clickable(true);
        } else if (i === 3) {
            setHex3Clickable(true);
        } else if (i === 4) {
            setHex4Clickable(true);
        } else if (i === 5) {
            setHex5Clickable(true);
        } else if (i === 6) {
            setHex6Clickable(true);
        }
    }
    
    const makeHexUnclickable = (i) => {
        console.log("called makeHexUnclickable with i: ", i);
        if (i === 0) {
            setHex0Clickable(false);
        } else if (i === 1) {
            setHex1Clickable(false);
        } else if (i === 2) {
            setHex2Clickable(false);
        } else if (i === 3) {
            setHex3Clickable(false);
        } else if (i === 4) {
            setHex4Clickable(false);
        } else if (i === 5) {
            setHex5Clickable(false);
        } else if (i === 6) {
            setHex6Clickable(false);
        }
    }

    useEffect(()=>{
        if(props.letterRemovedState === 1) {
            // When DELETE button has been pressed
            // Only activate last letter
            if (clickedHexes.length > 0) {
                let lastLetterAdded = clickedHexes[clickedHexes.length-1]; // returns Hexagon id like hexagon-0
                let lastLetterIndex = parseInt(lastLetterAdded[lastLetterAdded.length-1]);
                console.log("lastLetterIndex: ", lastLetterIndex);
                makeHexClickable(lastLetterIndex);
                // Remove the now clickable hex from the clickedHexes array
                // console.log(typeof clickedHexes);
                let clickedHexesCopy = [...clickedHexes]
                // clickedHexesCopy.splice(clickedHexesCopy.lenght - 1, 1);
                clickedHexesCopy.pop();
                setClickedHexes(clickedHexesCopy);
                // let clickedHexesCopyPopped = clickedHexesCopy.pop();
                // let clickedHexesLastIndex = clickedHexes.length - 1;
                // setClickedHexes(clickedHexes => {clickedHexes.filter((_, i) => i !== clickedHexesLastIndex)});
                console.log("Activating last letter with index: ", lastLetterIndex);
            }
        } else if (props.letterRemovedState === 2) { 
            // When ENTER button has been pressed
            // Activate all letters
            for (let i = 0; i < 7; i++) {
                makeHexClickable(i);
            }
        } else if (props.letterRemovedState === 3) { 
            // When SHUFFLE button has been pressed
            // Make all letters clickable and set only the letters that are present within the word unclickable, prioritize center_letter as its unmoved

            // Make all letters Clickable
            for (let i = 0; i < 7; i++) {
                makeHexClickable(i);
            }
            setClickedHexes([]);

            // Get the currently formed word by the user
            let word = document.getElementById("input-text").value;
            
            // Loop through the letters of the newly shuffledWord and if the letter is present within the currently formed word make the corresponding hex unclickable and remove that letter from the word
            for (let i = 0; i < props.clientShuffledWord.length; i++) {
                if (word.includes(props.clientShuffledWord[i])) {
                    console.log("i: ", i);
                    makeHexUnclickable(i);
                    setClickedHexes([...clickedHexes, `hexagon-${i}`]);
                    word = word.replace(props.clientShuffledWord[i], "");
                }
            }
        }
        // Set the state as "managed" again
        props.setLetterRemovedState(0);
    },[props.letterRemovedStateChanged])

    return (
        <div className='hive-container'>
            <div className='hive-upper-row'>
                <Hexagon id='hexagon-0' clickedHexes={clickedHexes} setClickedHexes={setClickedHexes} hexClickable={hex0Clickable} setHexClickable={setHex0Clickable}> {props.clientShuffledWord ? props.clientShuffledWord[0] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-1' clickedHexes={clickedHexes} setClickedHexes={setClickedHexes} hexClickable={hex1Clickable} setHexClickable={setHex1Clickable}> {props.clientShuffledWord ? props.clientShuffledWord[1] : "ZZ"} </Hexagon>
            </div>
            <div className='hive-middle-row'>
                <Hexagon id='hexagon-2' clickedHexes={clickedHexes} setClickedHexes={setClickedHexes} hexClickable={hex2Clickable} setHexClickable={setHex2Clickable}> {props.clientShuffledWord ? props.clientShuffledWord[2] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-3' clickedHexes={clickedHexes} setClickedHexes={setClickedHexes} hexClickable={hex3Clickable} setHexClickable={setHex3Clickable}> {props.clientShuffledWord ? props.clientShuffledWord[3] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-4' clickedHexes={clickedHexes} setClickedHexes={setClickedHexes} hexClickable={hex4Clickable} setHexClickable={setHex4Clickable}> {props.clientShuffledWord ? props.clientShuffledWord[4] : "ZZ"} </Hexagon>
            </div>
            <div className='hive-lower-row'>
                <Hexagon id='hexagon-5' clickedHexes={clickedHexes} setClickedHexes={setClickedHexes} hexClickable={hex5Clickable} setHexClickable={setHex5Clickable}> {props.clientShuffledWord ? props.clientShuffledWord[5] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-6' clickedHexes={clickedHexes} setClickedHexes={setClickedHexes} hexClickable={hex6Clickable} setHexClickable={setHex6Clickable}> {props.clientShuffledWord ? props.clientShuffledWord[6] : "ZZ"} </Hexagon>
            </div>
        </div>
    )
}

export default Hive