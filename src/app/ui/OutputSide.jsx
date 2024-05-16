import React from 'react'
import FoundWords from './FoundWords'

const OutputSide = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center p-0" id='output-side-container'>
        <FoundWords shuffledWord={props.clientShuffledWord} />
    </div>
  )
}

export default OutputSide