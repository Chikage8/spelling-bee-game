'use client'

import React, { useEffect, useState } from 'react'
import { shuffleWord } from '../page'

const FoundWords = (props) => {
  
  // const [score, setScore] = useState(0);
  const [scoreText, setScoreText] = useState("You haven't found any words yet...");

  // Create p element for each correct word
  const  [correctWordTexts, setCorrectWordTexts] = useState([]);
  useEffect(()=>{
    // Recalculate the score
    // setScore(0);
    for (let i = 0; i < props.clientCorrectWords.length; i++) {
      // code enters here
      console.log("props.clientCorrectWords[i].length: ", props.clientCorrectWords[i].length)
      // setScore(score + props.clientCorrectWords[i].length);
    }

    console.log("SETTING SCORE TEXT with score: ", props.score)
    // setScoreText(`YourScore: ${score} `)
    // Set score text based on the current score
    console.log("!?!?!?!?!?!?!?!??!?: ", props.clientLanguage);
    if (props.clientLanguage === "EN") {
      props.score === 0 ? setScoreText("You haven't found any words yet...") : setScoreText(`Your current score is: ${props.score}`)
    } else if (props.clientLanguage === "TR") {
      props.score === 0 ? setScoreText("Henüz herhangi bir kelime bulmadın  ...") : setScoreText(`Güncel skorun: ${props.score}`)
    }
    console.log("scoreText: ", scoreText);

    // List the found words on the right panel
    for (let i = 0; i < props.clientCorrectWords.length; i++) {
      setCorrectWordTexts([...correctWordTexts, <p key={i}>{props.clientCorrectWords[i]}</p>]);
      // correctWordTexts.push(<p>{props.clientCorrectWords[i]}</p>);
    }
  },[props.clientCorrectWords, props.clientLanguage])

  return (
    <div id='found-words-container' className='ml-64 border border-black rounded-md h-96 w-96 px-8 py-3'>
      {scoreText}
      {/* {props.clientCorrectWords} */}
      {correctWordTexts}
    </div>
  )
}

export default FoundWords