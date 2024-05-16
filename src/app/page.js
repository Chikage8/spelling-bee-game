import Image from "next/image";
import { english_dictionary, turkish_dictionary, english_letters_sorted_by_frequency, turkish_letters_sorted_by_frequency } from "./lib/dictonaries";
import React from 'react';
import Hive from './ui/Hive';
import './styles/global.css';
import ClientTopLevelComponent from "./ui/ClientTopLevelComponent";
import Buttons from "./ui/Buttons";
import InputSide from "./ui/InputSide";
import OutputSide from "./ui/OutputSide";

export function shuffleWord(word, center_letter) {
  if (!center_letter) {
    console.log("shuffleWord function requires center_letter to be defined");
    return;
  }

  console.log("SHUFFLING");
  console.log("word: ", word);
  console.log("center_letter: ", center_letter);

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

  let shuffledWordStr = shuffledWord.join("");


  return shuffledWordStr;
}

export default function Home() {
  let language = "en-US"; // either en-US or TR case by case
  console.log("language: ", language)
  let dictionary;
  let letters_sorted_by_frequency;

  function setDictionaryAndFrequentLetters(language) {
    console.log("language: ", language)
    console.log('"en-US": ', "en-US")
    console.log('language === "en-US": ', language === "en-US");
    if (language === "en-US") {
      console.log("ENTERS IF")
      dictionary = english_dictionary;
      letters_sorted_by_frequency = english_letters_sorted_by_frequency
    } else if (language === "TR") {
      dictionary = turkish_dictionary;
      letters_sorted_by_frequency = turkish_letters_sorted_by_frequency;
    } else {
      console.log("ENTERS ELSE")
      throw new Error('The current language is not supported, please select one of the languages from the dropdown');
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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

  console.log("word: ", word);

  // Pick the most common letter
  const center_letter = pickMostCommonLetter(word);
  console.log("************************", center_letter)

  // Create the letters array of the random word
  // let shuffledWord = "";
  // shuffleWord(word, center_letter).then(word => {
    // shuffledWord = word
  // });
  let shuffledWord = shuffleWord(word, center_letter);

  console.log("shuffledWord: ", shuffledWord);

  console.log(shuffledWord);
  console.log(center_letter);
  
  return (
    <main>
      <ClientTopLevelComponent shuffledWord={shuffledWord} center_letter={center_letter} language={language}/>
    </main>
  );
}
