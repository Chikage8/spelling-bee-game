'use client'

import React from 'react'
import Hexagon from './Hexagon';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';

const Hive = (props) => {

    const [word,setWord] = useState(props.shuffledWord)
    
    function childSetWord(value) {
        setWord(value);
    }

    useEffect(()=> {
        setWord(props.shuffledWord)
    }, [props.shuffledWord])

    return (
        <>
            <div className='hexagon-container'>
                <div className='hive-upper-row'>
                    <Hexagon id='hexagon-0'> {word[0]} </Hexagon>
                    <Hexagon id='hexagon-1'> {word[1]} </Hexagon>
                </div>
                <div className='hive-middle-row'>
                    <Hexagon id='hexagon-2'> {word[2]} </Hexagon>
                    <Hexagon id='hexagon-3'> {word[3]} </Hexagon>
                    <Hexagon id='hexagon-4'> {word[4]} </Hexagon>
                </div>
                <div className='hive-lower-row'>
                    <Hexagon id='hexagon-5'> {word[5]} </Hexagon>
                    <Hexagon id='hexagon-6'> {word[6]} </Hexagon>
                </div>
            </div>
            <Buttons word={word} childSetWord={childSetWord} center_letter={props.center_letter}/>
        </>
    )
}

export default Hive