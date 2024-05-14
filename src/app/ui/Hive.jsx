import React from 'react'
import Hexagon from './Hexagon';
// import styles from './Hive.module.css';

const Hive = (props) => {

    

    return (
        <div className='hexagon-container'>
            <div className='hive-upper-row'>
                <Hexagon id='hexagon-0'> {props.shuffledWord[0]} </Hexagon>
                <Hexagon id='hexagon-1'> {props.shuffledWord[1]} </Hexagon>
            </div>
            <div className='hive-middle-row'>
                <Hexagon id='hexagon-2'> {props.shuffledWord[2]} </Hexagon>
                <Hexagon id='hexagon-3'> {props.shuffledWord[3]} </Hexagon>
                <Hexagon id='hexagon-4'> {props.shuffledWord[4]} </Hexagon>
            </div>
            <div className='hive-lower-row'>
                <Hexagon id='hexagon-5'> {props.shuffledWord[5]} </Hexagon>
                <Hexagon id='hexagon-6'> {props.shuffledWord[6]} </Hexagon>
            </div>
        </div>
    )
}

export default Hive