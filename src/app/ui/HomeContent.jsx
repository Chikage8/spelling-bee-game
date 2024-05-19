import React from 'react'
import Image from "next/image";
import '../styles/global.css';
import PlayButton from './PlayButton';

const HomeContent = () => {
  return (
    // className='fixed h-96 w-96 flex flex-col align-center justify-center'
    <div id='home-content' >
        <Image
            src="/bee.png"
            alt="Bee Image"
            className="dark:invert"
            width={100}
            height={24}
            priority
        />
        <p className='text-6xl font-black mt-5 mb-8'>Spelling Bee</p>
        <p className='text-4xl font-normal'>How many words can you make </p>
        <p className='text-4xl font-normal'>with 7 letters? </p>
        <PlayButton />
    </div>
  )
}

export default HomeContent