import React from 'react';
import Bpm from './bpm';
import Slider from './slider';
import Playbutton from './playbutton';

export default class Metronome extends React.Component{
  constructor(props){ 
    super(props); 
    this.state = { 
      bpm : 120,
      transport: false
    }
  }

  render(){ 
    return (
      <div>
        <h1>Metronome</h1>
        <Bpm bpmVal={this.state.bpm} />
        <Slider handleChange={(val) => this.setState({bpm : val})}/>
        <Playbutton handleClick={() => this.setState(prevState => ({transport: !prevState.transport}))}/>
      </div>
    );
  }
}
