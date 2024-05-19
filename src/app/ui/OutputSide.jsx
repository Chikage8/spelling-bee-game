'use client'

import React from 'react'
import FoundWords from './FoundWords'

const OutputSide = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center p-0" id='output-side-container'>
        <FoundWords score={props.score} setScore={props.setScore} clientCorrectWords={props.clientCorrectWords} setClientCorrectWords={props.childSetClientCorrectWords} shuffledWord={props.clientShuffledWord} clientLanguage={props.clientLanguage}/>
    </div>
  )
}

export default OutputSide