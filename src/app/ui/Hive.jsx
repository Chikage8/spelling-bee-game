import React from 'react'
import Hexagon from './Hexagon';
// import styles from './Hive.module.css';

const Hive = (props) => {
    
    let hexagons = []

    props.letters.map((letter, index) => {
        hexagons.push(<Hexagon id={`hexagon-${index}`} key={index}><p>{letter}</p></Hexagon>)
    })

    return (
        <div>
            {/* {hexagons} */}
            <Hexagon id='hexagon-0'> {props.letters[0]} </Hexagon>
            <Hexagon id='hexagon-1'> {props.letters[1]} </Hexagon>
            <Hexagon id='hexagon-2'> {props.letters[2]} </Hexagon>
            <Hexagon id='hexagon-3'> {props.letters[3]} </Hexagon>
            <Hexagon id='hexagon-4'> {props.letters[4]} </Hexagon>
            <Hexagon id='hexagon-5'> {props.letters[5]} </Hexagon>
            <Hexagon id='hexagon-6'> {props.letters[6]} </Hexagon>
        </div>
    )
}

export default Hive