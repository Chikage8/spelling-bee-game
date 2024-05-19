import Image from "next/image";
import React from 'react';
import './styles/global.css';
import HomeContent from "./ui/HomeContent";

export function setLanguage(newLanguage) {
  language = newLanguage;
}

export function getRandomWord(dictionary, language) {
  const randomWordIndex = Math.floor(Math.random() * dictionary[7].length);
  let localeLanguageCode = language === "EN" ? "en-US" : language;
  const word = dictionary[7][randomWordIndex].toLocaleUpperCase(localeLanguageCode);
  return word;
}

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
  return (
    <div id="main-page" className="min-h-screen min-w-screen bg-amber-300">
      <HomeContent />
    </div>
  );
}
