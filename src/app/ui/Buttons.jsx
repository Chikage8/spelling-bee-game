'use client'

import React, {useEffect, useState} from 'react'
import { shuffleWord } from '../page';
import { english_dictionary, turkish_dictionary, english_letters_sorted_by_frequency, turkish_letters_sorted_by_frequency } from "../lib/dictonaries";

const Buttons = (props) => {
    let dictionary;
    const [deleteText, setDeleteText] = useState("DELETE");
    const [shuffleText, setShuffleText] = useState("SHUFFLE");
    const [enterText, setEnterText] = useState("ENTER");

    const setTextLanguage = (language) => {
        if (language === "EN") {
            setDeleteText("DELETE");
            setShuffleText("SHUFFLE");
            setEnterText("ENTER");
        } else if(language === "TR") {
            setDeleteText("SİL");
            setShuffleText("KARIŞTIR");
            setEnterText("GİR");
        }
    };    

    useEffect(()=> {
        setTextLanguage(props.clientLanguage);
    }, [props.clientLanguage]);

    if (props.clientLanguage === "EN") {
        dictionary = english_dictionary;
    } else if (props.clientLanguage === "TR") {
        dictionary = turkish_dictionary;
    } else {
        throw new Error('The current language is not supported, please select one of the languages from the dropdown');
    }

    const checkWord = () => {
        let word = document.getElementById("input-text").value;
        for (let i = 0; i < dictionary[word.length].length; i++) {
            console.log(dictionary[word.length][i])
        }
        if (dictionary[word.length].includes(word)) {
            // Input word is in the dictionary
            // First check if it has been found previously 
            if (props.clientCorrectWords.includes(word)) {
                alert("You have already found this word!");
            } else {
                // CORRECT WORD CASE
                // Add correctly found word to clientCorrectWords array
                props.childSetClientCorrectWords(word);
                props.setScore(props.score + word.length);
                props.setRemainingSeconds(parseInt(props.remainingSeconds) + 15);
                console.log("props.clientCorrectWords: ", props.clientCorrectWords)
                console.log("props.clientCorrectWords[0]: ", props.clientCorrectWords[0])
            }
        } else {
            alert("WRONG WORD BRUH!");
        }
        document.getElementById("input-text").value = "";
    }

    const handleDelete = (e) => {
        // alert("Delete Clicked")
        let word = document.getElementById("input-text").value
        word = word.substring(0, word.length - 1);
        document.getElementById("input-text").value = word;
    }
    
    const handleShuffle = (e) => {
        props.childSetClientShuffledWord(shuffleWord(props.clientShuffledWord, props.clientCenterLetter));
    }
    
    const handleEnter = (e) => {
        checkWord();
    }
        
    return (
        <div id='button-container' className='flex gap-1 ml-9'>
            <button className='gap-1 border-2 border-black p-1' id="delete-button" onClick={handleDelete}>{deleteText}</button>
            <button className='gap-1 border-2 border-black p-1 ml-2' id="shuffle-button" onClick={handleShuffle}>{shuffleText}</button>
            <button className='gap-1 border-2 border-black p-1 ml-2' id="enter-button" onClick={handleEnter}>{enterText}</button>
        </div>
    )
}

export default Buttons