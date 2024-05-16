'use client'

import React from 'react'
import Hexagon from './Hexagon';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';

const Hive = (props) => {
    return (
        <div className='hive-container'>
            <div className='hive-upper-row'>
                <Hexagon id='hexagon-0'> {props.word[0]} </Hexagon>
                <Hexagon id='hexagon-1'> {props.word[1]} </Hexagon>
            </div>
            <div className='hive-middle-row'>
                <Hexagon id='hexagon-2'> {props.word[2]} </Hexagon>
                <Hexagon id='hexagon-3'> {props.word[3]} </Hexagon>
                <Hexagon id='hexagon-4'> {props.word[4]} </Hexagon>
            </div>
            <div className='hive-lower-row'>
                <Hexagon id='hexagon-5'> {props.word[5]} </Hexagon>
                <Hexagon id='hexagon-6'> {props.word[6]} </Hexagon>
            </div>
        </div>
    )
}

export default Hive