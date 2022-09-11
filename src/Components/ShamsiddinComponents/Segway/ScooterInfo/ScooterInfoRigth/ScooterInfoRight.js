import React from 'react';
import s from './ScooterInfoRight.module.css';
import InfoFoto from '../../segway/ScooterInfo/Right-1.png';

export default function ScooterInfoRight() {
  return (
    <div className={s.InfoRight}>
        <button 
            id='prev'
            className={s.prev}>
              <span></span>
        </button>

        <img src={InfoFoto} />
        <div className={s.InfoButtons}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>

        <button 
          id='next'
          className={s.next}>
            <span></span>
        </button>
    </div>
  )
}
