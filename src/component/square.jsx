import React from 'react';
import '../css/square.css';

const Square = function Square(props) {
  return (
      <button
          className="square"
          onClick={() => props.onClick()}
      >
        {props.value}
      </button>
  );
};
export default Square;
