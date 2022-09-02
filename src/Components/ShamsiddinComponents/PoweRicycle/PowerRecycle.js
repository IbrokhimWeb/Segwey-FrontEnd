import React from 'react';
import Classes from './PowerRicycle.module.css';
import PowerRiciclesFoto from '../images/power-recycle.png';

export default function PowerRecycle() {
  return (
    // PowerRicycle start
    <div className={Classes.PowerRicycle}>
        {/* PowerRicycleInner */}
        <div className={Classes.PowerReciclesInner}>
            {/* PowerText */}
            <div className={Classes.PowerText}>
                <h1>regenerative brake for <br /> power recycle</h1>
                <p>The innovative regenerative brake system turns Ninebot 
                    KickScooter MAX into an electric vehicle powered by 
                    electricity and recycled energy from riding. Energy 
                    will be collected from regenerative braking and 
                    distributed when you need a boost. </p>
            </div>
            {/* /PowerText */}
            {/* PowerImg */}
            <div className={Classes.PowerRecicleFoto}>
                <img src={PowerRiciclesFoto} />
            </div>
            {/* /PowerImg */}
        </div>
        {/* /PowerRicycleInner */}
    </div>
    // PowerRicycle end
  )
}
