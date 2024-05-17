'use client'

import React, { useEffect, useState } from 'react'
import { shuffleWord } from '../page'

const FoundWords = (props) => {
  console.log("ClientTopLevelComponent->props.clientCorrectWords: ", props.clientCorrectWords);
  console.log("ClientTopLevelComponent->props.clientCorrectWords[0]: ", props.clientCorrectWords[0]);
  // Create p element for each correct word
  const  [correctWordTexts, setCorrectWordTexts] = useState([]);
  useEffect(()=>{
    for (let i = 0; i < props.clientCorrectWords.length; i++) {
      setCorrectWordTexts([...correctWordTexts, <p>{props.clientCorrectWords[i]}</p>]);
      // correctWordTexts.push(<p>{props.clientCorrectWords[i]}</p>);
    }
  },[props.clientCorrectWords])

  return (
    <div id='found-words-container' className='ml-64 border border-black rounded-md h-96 w-96 px-8 py-3'>
      <p>You have found 0 words</p>
      <p>{props.shuffledWord}</p>
      {/* {props.clientCorrectWords} */}
      {correctWordTexts}
    </div>
  )
}

export default FoundWords