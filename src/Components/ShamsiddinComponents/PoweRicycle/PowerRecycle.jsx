import React from 'react';

// Import CSS style
import Classes from './PowerRicycle.module.css';

// Import foto for PowerRecycle Component
import PowerRiciclesFoto from '../images/power-recycle.png';

export default function PowerRecycle() {
  return (
    // PowerRicycle start
    <div className={Classes.PowerRicycle}>
        {/* PowerRicycleInner */}
        <div className={Classes.PowerReciclesInner}>

            {/* PowerImgBottom */}
            <div className={Classes.PowerRecicleFotoTop}>
                <img src={PowerRiciclesFoto} />
            </div>
            {/* /PowerImgBottom */}

            {/* PowerText */}
            <div className={Classes.PowerText}>
                <h1>regenerative brake for <br /> power recycle</h1>
                <p>The innovative regenerative brake system turns Ninebot 
                    KickScooter MAX into an electric vehicle powered by 
                    electricity and recycled energy from riding. Energy 
                    will be collected from regenerative braking and 
                    distributed when you need a boost. gi</p>
            </div>
            {/* /PowerText */}

            {/* PowerImgBottom */}
            <div className={Classes.PowerRecicleFotoBottom}>
                <img src={PowerRiciclesFoto} />
            </div>
            {/* /PowerImgBottom */}

        </div>
        {/* /PowerRicycleInner */}
    </div>
    // PowerRicycle end
  )
}
