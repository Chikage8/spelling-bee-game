import React from 'react'
import { shuffleWord } from '../page'

const FoundWords = (props) => {
  return (
    <div id='found-words-container' className='ml-64 border border-black rounded-md h-96 w-96 px-8 py-3'>
      <p>You have found 0 words</p>
      <p>{props.shuffledWord}</p>
    </div>
  )
}

export default FoundWords