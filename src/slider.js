import React from 'react';

export default function Slider (props) {
  return (
    <input type="range" min="0" max="200" onChange={(e) =>  props.handleChange(e.target.value)}></input>
  );
}