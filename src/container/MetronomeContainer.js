import React, {Component} from 'react';
import Slider from '../component/Slider.js';
import Play from '../component/Play.js';
import SoundSelector from '../component/SoundSelector.js';

class MetronomeContainer extends Component {
constructor(props) {
  super(props);
  const sounds = [
    {
     name: "beep",
     volume: 0.08,
  },
    {
     name: "click",
     volume: 1.0,
  },
    {
     name: "swish",
     volume: 0.9,
  },
    {
     name: "bear",
     volume: 0.5,
  },
    {
     name: "meow",
     volume: 0.2,
  },
]
const selectedSound = sounds[0]
  this.state = {
    selectedSound,
    sounds,
    playing: false,
    bpm: 60,
    timerID: null
  };

  this.sliderChange = this.sliderChange.bind(this);
  this.togglePlay = this.togglePlay.bind(this);
  this.startPlaying = this.startPlaying.bind(this);
  this.selectChange = this.selectChange.bind(this);
}

togglePlay() {
  this.state.playing ? this.stopPlaying() : this.startPlaying();
}

startPlaying() {
  const sound = this.state.selectedSound.name;
  const audio = new Audio(`sounds/${sound}.wav`);
  audio.volume = this.state.selectedSound.volume;
  audio.play();
  const msDelay = 60000 / this.state.bpm;
  const timerID = setTimeout(this.startPlaying, msDelay);
  this.setState({playing: true, timerID});
}

stopPlaying() {
  this.setState({playing: false});
  clearTimeout(this.state.timerID);
}

sliderChange(sliderValue) {
  this.setState({
    bpm: sliderValue
  });
}

selectChange(i) {
  const sound = this.state.sounds[i]
  this.setState({selectedSound: sound})
}

render() {
  return(
    <div className="m-container">
    <Play togglePlay={this.togglePlay} playing={this.state.playing} />
    <SoundSelector sounds={this.state.sounds} selectChange={this.selectChange} />
    <Slider min={10} max={200} bpm={this.state.bpm} sliderChange={this.sliderChange} />
    </div>
  )

}


}

export default MetronomeContainer;
