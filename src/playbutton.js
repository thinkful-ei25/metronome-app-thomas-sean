import React from 'react';

export default function Playbutton(props) {
  return (
    <div>
      <button type='button' onClick={() => props.handleClick()} >{props.value}</button>
    </div>
  );
}