import React from 'react';
import Bpm from './bpm';
import Slider from './slider';
import Playbutton from './playbutton';

let audio = new Audio('http://freesound.org/data/previews/423/423772_8326967-lq.mp3'); 
export default class Metronome extends React.Component{
  constructor(props){ 

    super(props); 
    this.state = { 
      bpm : 120,
      transport: false,
      interval: null

    }
  }

  playAudio(){
    const time = 60000 / this.state.bpm;
    console.log(time)
    if(this.state.transport) {
      this.setState({interval: setInterval(this.myCallback, time)})
    }
    
    if(!this.state.transport) {
      clearInterval(this.state.interval);
      audio.pause();
    } 
  }

  myCallback() {
    console.log('test')
    audio.play();
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
