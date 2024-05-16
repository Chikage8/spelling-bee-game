'use client'

import React from 'react'
import Hexagon from './Hexagon';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';

const Hive = (props) => {

    console.log(props.clientShuffledWord)

    return (
        <div className='hive-container'>
            <div className='hive-upper-row'>
                <Hexagon id='hexagon-0'> {props.clientShuffledWord ? props.clientShuffledWord[0] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-1'> {props.clientShuffledWord ? props.clientShuffledWord[1] : "ZZ"} </Hexagon>
            </div>
            <div className='hive-middle-row'>
                <Hexagon id='hexagon-2'> {props.clientShuffledWord ? props.clientShuffledWord[2] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-3'> {props.clientShuffledWord ? props.clientShuffledWord[3] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-4'> {props.clientShuffledWord ? props.clientShuffledWord[4] : "ZZ"} </Hexagon>
            </div>
            <div className='hive-lower-row'>
                <Hexagon id='hexagon-5'> {props.clientShuffledWord ? props.clientShuffledWord[5] : "ZZ"} </Hexagon>
                <Hexagon id='hexagon-6'> {props.clientShuffledWord ? props.clientShuffledWord[6] : "ZZ"} </Hexagon>
            </div>
        </div>
    )
}

export default Hive