import React from 'react';

const Slider = ({bpm, min, max, sliderChange}) => {

   const handleSliderInput = ({target: {value}}) => {
     sliderChange(value)
   }

   return(
     <div className="slider-box">
       <label htmlFor="slider">{bpm}bpm</label>
       <input onChange={handleSliderInput} type="range" min={min} max={max} id="slider" />
     </div>
   )
}

export default Slider;
