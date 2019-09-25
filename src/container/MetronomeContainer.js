import React, {Component} from 'react';
import Slider from '../component/Slider.js';
import Play from '../component/Play.js';

class MetronomeContainer extends Component {


render() {
  return(
    <>
    <h1>Metronome</h1>
    <Play/>
    <Slider/>
    </>
  )

}


}

export default MetronomeContainer;
