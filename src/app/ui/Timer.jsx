'use client'

import React, {useEffect} from 'react'

const Timer = (props) => {
    let dateStart = Date.now()

    useEffect(()=>{
        const interval = setInterval(()=>{
            let elapsedTime = Math.round((Date.now() - dateStart)/1000);
            // console.log(elapsedTime);
            props.setRemainingSeconds(props.remainingSeconds - elapsedTime);
        }, 1000)
        return () => clearInterval(interval);
    })
    return (
        <div>{props.remainingSeconds}</div>
    )
}

export default Timer