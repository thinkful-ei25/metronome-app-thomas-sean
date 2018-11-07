import React from 'react';
import Bpm from './bpm';
import Slider from './slider';
import Playbutton from './playbutton';

export default function Metronome (){
  return (
    <div>
      <h1>Metronome</h1>
      <Bpm />
      <Slider />
      <Playbutton />
    </div>
  );
}
