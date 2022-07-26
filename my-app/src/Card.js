import React from 'react'
import './App.css'

function Card() {
  return (
    <div classname ="card">
        <div className='img-wrapper'>
            <img src='model-x.jpg' />

        </div>
        <div className='info'>
            <p>tesla model x</p>
            <p>specifications</p>
        </div>
    </div>
  )
}

export default Card