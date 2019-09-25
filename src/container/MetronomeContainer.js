import React, {Component} from 'react';
import Slider from '../component/Slider.js';
import Play from '../component/Play.js';

class MetronomeContainer extends Component {
constructor(props) {
  super(props);
  this.state = {bpm: 60};
  this.sliderChange = this.sliderChange.bind(this)
}


sliderChange(sliderValue) {
  this.setState({
    bpm: sliderValue
  });
}



render() {
  return(
    <>
    <h1>Metronome</h1>
    <Play/>
    <Slider min={40} max={200} bpm={this.state.bpm} sliderChange={this.sliderChange}/>
    </>
  )

}


}

export default MetronomeContainer;
