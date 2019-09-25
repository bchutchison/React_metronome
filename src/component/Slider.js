import React from 'react';

const Slider = () => {
   return(
     <div className="slider-box">
       <label for="slider"></label>
       <input type="range" min="40" max="200" id="slider" />
     </div>
   )

}

export default Slider;
