import Image from "next/image";
import { english_dictionary, turkish_dictionary, english_letters_sorted_by_frequency, turkish_letters_sorted_by_frequency } from "./lib/dictonaries";
import React from 'react';
import Hive from './ui/Hive';
import './styles/global.css';
import Buttons from "./ui/Buttons";

export default function Home() {
  let language = "en-US"; // either en-US or TR case by case
  
  let dictionary;
  let letters_sorted_by_frequency;

  function setDictionaryAndFrequentLetters(language) {
    if (language === "en-US") {
      dictionary = english_dictionary;
      letters_sorted_by_frequency = english_letters_sorted_by_frequency
    } else if (language === "TR") {
      dictionary = turkish_dictionary;
      letters_sorted_by_frequency = turkish_letters_sorted_by_frequency;
    } else {
      throw new Error('The current language is not supported, please select one of the languages from the dropdown');
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function shuffleWord(word) {
    if (!center_letter) {
      console.log("generateLettersArray function requires center_letter to be defined");
      return;
    }

    // let word_array = [];
    // // if word is a string convert it to an array
    // if (typeof word === "string") {
    //   for(let i = 0; i < word.length; i++) {
    //     word_array.push(word.charAt(i));
    //   }
    // } else {
    //   word_array = word;
    // }
    
    let shuffledWord = [];

    // Find the center letter, place it on the middle of the shuffledWord and remove it from the original word
    shuffledWord[3] = center_letter;
    word = word.replace(center_letter, "");

    console.log("After center_letter operations... shuffledWord: ", shuffledWord, " word: ", word);

    // Shuffle the rest of the word by placing random letters from the to the shuffledWord excluding index 3 which holds the center letter
    console.log("shuffling")
    let shuffledWordIndex = 0;
    while (word.length > 0) {
      const randomLetter = word.charAt(Math.floor(Math.random() * word.length));

      console.log("randomLetter: ", randomLetter)
      console.log("shuffledWordIndex: ", shuffledWordIndex)

      shuffledWord[shuffledWordIndex] =randomLetter;
      word = word.replace(randomLetter, "");

      console.log("shuffledWord", shuffledWord)

      if (shuffledWordIndex !== 2) {
        shuffledWordIndex++;
      } else {
        shuffledWordIndex+=2;
      }
    }

    let shuffledWordStr = shuffledWord.toString();


    return shuffledWord;
  }

  function pickMostCommonLetter(letters) {
    for (let i = 0; i < letters_sorted_by_frequency.length; i++) {
      // Check if the most common english letter is in our letters array
      if (letters.includes(letters_sorted_by_frequency[i])) {
        console.log("!!!!!!!!!!!!!!!!!!!", letters_sorted_by_frequency[i])
        return letters_sorted_by_frequency[i]
      }
      if (i === letters_sorted_by_frequency.length - 1) {
        throw new Error('None of your letters was found in the alphabet!!!');
      }
    }
  }

  setDictionaryAndFrequentLetters(language);
  
  for (let i = 0; i < letters_sorted_by_frequency.length; i++) {
    console.log(letters_sorted_by_frequency[i]);
  }

  // Get random word from the dictionary
  const randomWordIndex = getRandomInt(dictionary[7].length);
  const word = dictionary[7][randomWordIndex].toLocaleUpperCase('en-US');

  // Pick the most common letter
  const center_letter = pickMostCommonLetter(word);

  // Create the letters array of the random word
  const shuffledWord = shuffleWord(word);

  console.log(shuffleWord);
  console.log(center_letter);
  
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
        {/* <input type="text"></input> */}
        <input type="text" id="input-text" placeholder="Click the Below Letters"></input>

        <Hive shuffledWord={shuffledWord}></Hive>

        <Buttons />

    </main>
  );
}
