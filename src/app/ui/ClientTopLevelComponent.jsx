'use client'

import React from 'react'
import { useState } from 'react'
import InputSide from './InputSide'
import OutputSide from './OutputSide'

const ClientTopLevelComponent = (props) => {

    const [clientShuffledWord, setClientShuffledWord] = useState(props.shuffledWord);
    const [clientCenterLetter, setClientCenterLetter] = useState(props.center_letter);
    const [clientLanguage, setClientLanguage] = useState(props.language);
        
    const childSetClientShuffledWord = (value) => {
        setClientShuffledWord(value);
        props.shuffledWord = value;
    }

    const childSetClientCenterLetter = (value) => {
        setClientCenterLetter(value);
        props.center_letter = value;
    }

    const childSetClientLanguage = (value) => {
        setClientLanguage(value);
        props.language = value;
    }


    return (
        <div className="flex flex-row justify-start items-start pt-64 pl-52" id="game-container">
            <InputSide clientShuffledWord={clientShuffledWord} clientCenterLetter={clientCenterLetter} clientLanguage={clientLanguage} childSetClientShuffledWord={childSetClientShuffledWord}/>
            <OutputSide clientShuffledWord={clientShuffledWord} clientLanguage={clientLanguage}/>
    </div>
    )
}

export default ClientTopLevelComponent