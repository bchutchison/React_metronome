import React from 'react';
import './index.css';

const Play = ({togglePlay, playing}) => {

  const handleClick = () => {
    togglePlay();
  }

   return(
     <button onClick={handleClick}>
     {playing ? "Stop" : "Play"}
     </button>
   )

}

export default Play;
