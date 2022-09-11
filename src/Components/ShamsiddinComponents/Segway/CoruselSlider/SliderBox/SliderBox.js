import React from 'react';
import s from './SliderBox.module.css';
import BoxFoto from '../../segway/Slider/slide-1.png';

export default function SliderBox({kesyName, indexes, width}) {
  
  return (
    <div
      style={{
        width: width
      }} 
      className={s.SliderBox}>

        <img src={BoxFoto} alt='' onDragStart={(e) => e.preventDefault()}/>
        <h3>{kesyName}</h3>
    </div>
  )
}
