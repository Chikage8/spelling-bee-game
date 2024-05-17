'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import Hive from './Hive'
import Buttons from './Buttons'

const InputSide = (props) => {
    // const [word,setWord] = useState(props.shuffledWord)
    // const [language, setLanguage] = useState(props.language);
    
    

    // useEffect(()=> {
    //     setWord(word)
    // }, [word])
    
    return (
        <div className="flex min-h-screen flex-col items-center gap-3 p-0" id='input-side-container'>
            <input type="text" id="input-text" placeholder="Click the Below Letters"></input>
            <Hive clientShuffledWord={props.clientShuffledWord} childSetClientShuffledWord={props.childSetClientShuffledWord} clientCenterLetter={props.clientCenterLetter}/>
            <Buttons clientCorrectWords={props.clientCorrectWords} childSetClientCorrectWords={props.childSetClientCorrectWords} clientShuffledWord={props.clientShuffledWord} childSetClientShuffledWord={props.childSetClientShuffledWord} clientCenterLetter={props.clientCenterLetter} clientLanguage={props.clientLanguage}/>
        </div>
    )
}

export default InputSide