import React, {Component} from 'react';
import Slider from '../component/Slider.js';
import Play from '../component/Play.js';

class MetronomeContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    sound: new Audio('beep.wav'),
    playing: false,
    bpm: 60,
    timerID: null
  };
  this.sliderChange = this.sliderChange.bind(this);
  this.togglePlay = this.togglePlay.bind(this);
  this.startPlaying = this.startPlaying.bind(this);
}

togglePlay() {
  this.state.playing ? this.stopPlaying() : this.startPlaying();
}

startPlaying() {
  this.state.sound.play();
  const msDelay = 60000 / this.state.bpm;
  const timerID = setTimeout(this.startPlaying, msDelay);
  this.setState({playing: true, timerID});
}

stopPlaying() {
  this.setState({playing: false});
  clearInterval(this.state.timerID);
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
    <Play togglePlay={this.togglePlay} playing={this.state.playing}/>
    <Slider min={40} max={200} bpm={this.state.bpm} sliderChange={this.sliderChange}/>
    </>
  )

}


}

export default MetronomeContainer;
