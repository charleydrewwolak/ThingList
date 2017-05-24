import React from 'react'
import './ThingSubmit.css'

const ThingSubmit = ({ addThing }) => {
  return (

    <button type="submit" 
    className="ThingSubmit" 
    onClick={addThing}
    >
        <i className="fa fa-star"></i>   Add Thing   <i className="fa fa-star"></i>
    </button>

  )
}

export default ThingSubmit