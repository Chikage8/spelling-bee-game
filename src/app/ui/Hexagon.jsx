import React from 'react';
// import styles from './Hexagon.module.css';

const Hexagon = ({ children, id }) => {

  return (
    <div className="hexagon" id={id}>
      <div className="inner">
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
