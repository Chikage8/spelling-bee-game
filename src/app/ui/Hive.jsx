import React from 'react'
import Hexagon from './Hexagon';

const Hive = (props) => {
  return (
    <div>
        <Hexagon>
            <p>{props.letter}</p>
        </Hexagon>
    </div>
  )
}

export default Hive