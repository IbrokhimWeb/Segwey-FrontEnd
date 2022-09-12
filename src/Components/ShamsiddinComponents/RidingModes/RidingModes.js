import React from 'react';

// Import foto for RidingModes Component
import RidingFoto from '../images/riding-modes.png';

// Import CSS style
import s from './RidingModes.module.css';

export default function RidingModes() {
  return (
    <>
        {/* RidintModesStyle */}
        <div className={s.RidingModesStyle}>
            {/* RidingModesInner */}
            <div className={s.RidingModesInner}>
                {/* RidingModesText */}
                <div className={s.RidingModesText}>
                    <h1>
                        3 riding modes
                    </h1>
                    <p>
                        Eco, Standard, and Sports modes can 
                        be directly accessed by the intuitive  
                        LED dashboard, which also displays 
                        maintenance signals, power levels, 
                        Bluetooth connectivity and more.
                    </p>
                </div>
                {/* /RidingModesText */}
                {/* RidingFoto */}
                <div className={s.RidingModesFoto}>
                    <img src={RidingFoto} />
                </div>
                {/* /RidingFoto */}
            </div>
            {/* /RidingModesInner */}
        </div>
        {/* /RidintModesStyle */}
    </>
  )
}
