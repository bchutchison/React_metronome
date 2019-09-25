import React from 'react';

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
