'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { english_dictionary, turkish_dictionary, english_letters_sorted_by_frequency, turkish_letters_sorted_by_frequency } from "../lib/dictonaries";
import InputSide from './InputSide'
import OutputSide from './OutputSide'
import LanguageSelectDropdown from './LanguageManager'
import LanguageManager from './LanguageManager'
import { getRandomWord } from '../page'
import { useRouter } from 'next/navigation';
import GameOver from './GameOver';
import { Gemunu_Libre } from 'next/font/google';


const ClientTopLevelComponent = (props) => {
    const router = useRouter();

    const [score, setScore] = useState(0);
    const [clientShuffledWord, setClientShuffledWord] = useState(props.shuffledWord);
    const [clientCenterLetter, setClientCenterLetter] = useState(props.center_letter);
    const [clientLanguage, setClientLanguage] = useState(props.language);
    const [clientCorrectWords, setClientCorrectWords] = useState([]);
    const [dictionary, setDictionary] = useState(turkish_dictionary);
    const [isTimeEnded, setIsTimeEnded] = useState(false);

    // if (isTimeEnded) {
    //     router.push(`/`);
    //     router.refresh();
    // }
        
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
        <div className="flex flex-row justify-start items-start pt-64 pl-52 client-top-level" id="game-container">
            <GameOver score={score} isGameOver={isTimeEnded}/>
            <LanguageManager isGameOver={isTimeEnded} clientLanguage={clientLanguage} childSetClientLanguage={childSetClientLanguage}/>
            <InputSide isGameOver={isTimeEnded} setIsTimeEnded={setIsTimeEnded} score={score} setScore={setScore} clientCorrectWords={clientCorrectWords} childSetClientCorrectWords={childSetClientCorrectWords} clientShuffledWord={clientShuffledWord} clientCenterLetter={clientCenterLetter} clientLanguage={clientLanguage} childSetClientShuffledWord={childSetClientShuffledWord}/>
            <OutputSide isGameOver={isTimeEnded} score={score} setScore={setScore} clientCorrectWords={clientCorrectWords} childSetClientCorrectWords={childSetClientCorrectWords} clientShuffledWord={clientShuffledWord} clientLanguage={clientLanguage}/>
    </div>
    )
}

export default ClientTopLevelComponent