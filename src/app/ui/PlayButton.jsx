'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

const PlayButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/en");
    }

    return (
    <button className='text-6xl font-black mt-12 text-white bg-black border border-black rounded-full px-12 py-4' onClick={handleClick}>Play</button>
    )
}

export default PlayButton