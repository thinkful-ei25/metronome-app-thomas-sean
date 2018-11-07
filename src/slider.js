import React from 'react';

export default function Slider (props) {
  return (
    <input type="range" min="40" max="200" onChange={(e) =>  props.handleChange(Number(e.target.value))}></input>
  );
}