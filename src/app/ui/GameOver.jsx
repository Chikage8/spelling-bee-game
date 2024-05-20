import React from 'react'
import { useRouter } from 'next/navigation';



const GameOver = (props) => {
    const router = useRouter();
    const goBackToHomePage = () => {
        router.push("/");
        router.refresh();
    }


    return (
        <div>{props.isGameOver &&
            <div> 
                <p className='ml-96'>Game Has Ended! Your Score is: {props.score}</p>
                <button onClick={goBackToHomePage} className='text-2xl font-black text-white bg-black border border-black rounded-full px-12 py-4 ml-80 mt-32 mb-96'>Go Back To Home Page</button>
                <p className='mb-20'></p>
            </div>
        }</div>
    )
}

export default GameOver