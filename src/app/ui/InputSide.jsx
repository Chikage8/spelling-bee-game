'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import Hive from './Hive'
import Buttons from './Buttons'
import Timer from './Timer';
import '../styles/global.css';

const InputSide = (props) => {
    // const [word,setWord] = useState(props.shuffledWord)
    // const [language, setLanguage] = useState(props.language);
    const [remainingSeconds, setRemainingSeconds] = useState(60);
    // State for letter state(clickable or not) based on removal method(letter deletion or enter word attempt(word deletion))
    // State 0: no unmanaged removals || State 1: deletion occured, last letter needs to be clickable again, State 2: Enter key was pressed, all the letters should be clickable
    const [letterRemovedState, setLetterRemovedState] = useState(0);
    const [letterRemovedStateChanged, setLetterRemovedStateChanged] = useState(false);

    const [placeholderText, setPlaceHolderText] = useState("Click the Below Letters");
    const [timerText, setTimerText] = useState("Remaining Time: ");

    useEffect(()=> {
        if (props.clientLanguage === "EN") {
            setPlaceHolderText("Click the Below Letters");
            setTimerText("Remaining Time: ");
        } else if (props.clientLanguage === "TR") {
            setPlaceHolderText("Harflere Tıklayın");
            setTimerText("Kalan Zaman: ");
        }
    },[props.clientLanguage])

    // useEffect(()=> {
    //     setWord(word)
    // }, [word])
    
    return (<div>{!props.isGameOver &&
        <div className="flex min-h-screen flex-col items-center gap-3 p-0" id='input-side-container'>
            <Timer isTimeEnded={props.isTimeEnded} setIsTimeEnded={props.setIsTimeEnded} timerText={timerText} remainingSeconds={remainingSeconds} setRemainingSeconds={setRemainingSeconds}/>
            <textarea readOnly={true} id="input-text" placeholder={placeholderText}></textarea>
            <Hive letterRemovedStateChanged={letterRemovedStateChanged} setLetterRemovedStateChanged={setLetterRemovedStateChanged} letterRemovedState={letterRemovedState} setLetterRemovedState={setLetterRemovedState} clientShuffledWord={props.clientShuffledWord} childSetClientShuffledWord={props.childSetClientShuffledWord} clientCenterLetter={props.clientCenterLetter}/>
            <Buttons letterRemovedStateChanged={letterRemovedStateChanged} setLetterRemovedStateChanged={setLetterRemovedStateChanged} letterRemovedState={letterRemovedState} setLetterRemovedState={setLetterRemovedState} remainingSeconds={remainingSeconds} setRemainingSeconds={setRemainingSeconds} score={props.score} setScore={props.setScore} clientCorrectWords={props.clientCorrectWords} childSetClientCorrectWords={props.childSetClientCorrectWords} clientShuffledWord={props.clientShuffledWord} childSetClientShuffledWord={props.childSetClientShuffledWord} clientCenterLetter={props.clientCenterLetter} clientLanguage={props.clientLanguage}/>
            
        </div>}
        </div>
    )
}

export default InputSide