import React from 'react'
import FoundWords from './FoundWords'

const OutputSide = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-0" id='output-side-container'>
        <FoundWords />
    </div>
  )
}

export default OutputSide