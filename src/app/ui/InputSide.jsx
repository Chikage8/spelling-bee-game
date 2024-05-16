'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import Hive from './Hive'
import Buttons from './Buttons'

const InputSide = (props) => {
    const [word,setWord] = useState(props.shuffledWord)
    const [language, setLanguage] = useState(props.language);
    
    function childSetWord(value) {
        setWord(value);
    }

    // useEffect(()=> {
    //     setWord(word)
    // }, [word])
    
    return (
        <div className="flex min-h-screen flex-col items-center gap-3 p-0" id='input-side-container'>
            <input type="text" id="input-text" placeholder="Click the Below Letters"></input>
            <Hive word={word} childSetWord={childSetWord} center_letter={props.center_letter}/>
            <Buttons word={word} childSetWord={childSetWord} center_letter={props.center_letter} language={language}/>
        </div>
    )
}

export default InputSide