import React from 'react';

// Import for for Charging Component
import ChargingFoto from '../images/fast-charging.png';

// Import CSS style
import s from './FirstCharging.module.css';

export default function FirstCharging() {
  return (
    // FirstChanrging start
    <div className={s.FirstChangingStyle}>
        {/* FirstChargingInner */}
        <div className={s.FirstChargingInner}>
            {/* FirstChanrgingFoto */}
            <div className={s.FirstChargingFoto}>
                <img src={ChargingFoto} />
            </div>
            {/* /FirstChanrgingFoto */}
            {/* FirstChargingText */}
            <div className={s.FirstChargingText}>
                <h1>
                    easy one cord fast charging
                </h1>
                <p>
                    The built-in charger lets 
                    riders recharge it easily 
                    when on the go without having 
                    to carry along a bulky charging 
                    adapter. 3A fast charge will 
                    give Ninebot KickScooter MAX 
                    a full charge in 6 hours.
                </p>
            </div>
            {/* /FirstChargingText */}
        </div>
        {/* /FirstChargingInner */}
    </div>
    // FirstChanrging end
  )
}
