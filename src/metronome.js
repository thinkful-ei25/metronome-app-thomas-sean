import React from 'react';
import Bpm from './bpm';
import Slider from './slider';
import Playbutton from './playbutton';

let audio = new Audio('http://freesound.org/data/previews/60/60604_701086-lq.mp3'); 
export default class Metronome extends React.Component{
  constructor(props){ 

    super(props); 
    this.state = { 
      bpm : 120,
      transport: false
    }
  }

  playAudio(){
    if(this.state.transport === true)audio.play();
    else audio.pause();  
  }

  setTransport(){ 
    this.setState({transport : !this.state.transport}, () => this.playAudio());
  }

  render(){
    return (
      <div>
        <h1>Metronome</h1>
        <Bpm bpmVal={this.state.bpm} />
        <Slider handleChange={(val) => this.setState({bpm : val})}/>
        <Playbutton  value={(this.state.transport) ? 'Pause' : 'Play'} 
        handleClick={() =>  this.setTransport()}/>
      </div>
    );
  }
}
