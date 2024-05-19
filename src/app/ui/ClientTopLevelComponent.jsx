'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { english_dictionary, turkish_dictionary, english_letters_sorted_by_frequency, turkish_letters_sorted_by_frequency } from "../lib/dictonaries";
import InputSide from './InputSide'
import OutputSide from './OutputSide'
import LanguageSelectDropdown from './LanguageManager'
import LanguageManager from './LanguageManager'
import { getRandomWord } from '../page'

const ClientTopLevelComponent = (props) => {
    const [score, setScore] = useState(0);

    const [clientShuffledWord, setClientShuffledWord] = useState(props.shuffledWord);
    const [clientCenterLetter, setClientCenterLetter] = useState(props.center_letter);
    const [clientLanguage, setClientLanguage] = useState(props.language);
    const [clientCorrectWords, setClientCorrectWords] = useState([]);
    const [dictionary, setDictionary] = useState(turkish_dictionary);
        
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

    const childSetClientCorrectWords = (value) => {
        setClientCorrectWords([...clientCorrectWords, value]);
    }

    // When language changes get a word in the new language
    useEffect(()=>{
        // Set the dictionary to the new language dictionary
        if (clientLanguage === "TR") {
            setDictionary(turkish_dictionary)
        } else if (clientLanguage === "EN") {
            setDictionary(english_dictionary)
        } else {
            throw new Error("Support for the selected language is not currently present.")
        }
        getRandomWord(dictionary, clientLanguage)
    },[clientLanguage])

    return (
        <div className="flex flex-row justify-start items-start pt-64 pl-52" id="game-container">
            <LanguageManager clientLanguage={clientLanguage} childSetClientLanguage={childSetClientLanguage}/>
            <InputSide score={score} setScore={setScore} clientCorrectWords={clientCorrectWords} childSetClientCorrectWords={childSetClientCorrectWords} clientShuffledWord={clientShuffledWord} clientCenterLetter={clientCenterLetter} clientLanguage={clientLanguage} childSetClientShuffledWord={childSetClientShuffledWord}/>
            <OutputSide score={score} setScore={setScore} clientCorrectWords={clientCorrectWords} childSetClientCorrectWords={childSetClientCorrectWords} clientShuffledWord={clientShuffledWord} clientLanguage={clientLanguage}/>
    </div>
    )
}

export default ClientTopLevelComponent