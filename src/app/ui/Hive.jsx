import React from 'react'
import Hexagon from './Hexagon';

const Hive = (props) => {
    
    let hexagons = []

    props.letters.map((letter, index) => {
        hexagons.push(<Hexagon key={index}><p>{letter}</p></Hexagon>)
    })

    return (
        <div>
            {hexagons}
        </div>
    )
}

export default Hive