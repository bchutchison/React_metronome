import React from 'react';

const SoundSelector = ({sounds, selectChange}) => {
    const options = sounds.map((s,i) => {
        return ( <option value={i} key={i} >{s.name}</option> )
    })

    const handleChange = ({target: {value}}) => {
      selectChange(value)
    }

return (
  <>
    <select onChange={handleChange} >
      {options}
    </select>
  </>
)

}

export default SoundSelector;
