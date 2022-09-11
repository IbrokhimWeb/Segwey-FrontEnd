import React from 'react';
import '../Style.css';
import s from './Logotop.module.css';
import LogoTipLog from '../segway/segway2.png';
import Directory from '../segway/Directory.png';

export default function Logotip() {
  return (
    <div className='Container'>
        <div className={s.LogotipInner}>
            <img src={LogoTipLog} />
            <div className={s.Director}>
                <img src={Directory} />
                <div className={s.DirectorText}>
                    <h4>john smith</h4>
                    <a href='#'>ask a question</a>
                    <a href='#'>to the director</a>
                </div>
            </div>
        </div>
    </div>
  )
}
