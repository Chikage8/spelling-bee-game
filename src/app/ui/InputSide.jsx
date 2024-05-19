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
    

    // useEffect(()=> {
    //     setWord(word)
    // }, [word])
    
    return (
        <div className="flex min-h-screen flex-col items-center gap-3 p-0" id='input-side-container'>
            <Timer remainingSeconds={remainingSeconds} setRemainingSeconds={setRemainingSeconds}/>
            <textarea readOnly={true} id="input-text" placeholder="Click the Below Letters"></textarea>
            <Hive clientShuffledWord={props.clientShuffledWord} childSetClientShuffledWord={props.childSetClientShuffledWord} clientCenterLetter={props.clientCenterLetter}/>
            <Buttons remainingSeconds={remainingSeconds} setRemainingSeconds={setRemainingSeconds} score={props.score} setScore={props.setScore} clientCorrectWords={props.clientCorrectWords} childSetClientCorrectWords={props.childSetClientCorrectWords} clientShuffledWord={props.clientShuffledWord} childSetClientShuffledWord={props.childSetClientShuffledWord} clientCenterLetter={props.clientCenterLetter} clientLanguage={props.clientLanguage}/>
        </div>
    )
}

export default InputSide