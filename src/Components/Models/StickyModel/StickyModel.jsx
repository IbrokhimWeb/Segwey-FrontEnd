
// Import React
import { React } from 'react';

// Import Css
import s from './StickyModel.module.css';


// Import Icons
import { MdSpeed, MdBatteryCharging30 } from 'react-icons/md'
import { GiPathDistance } from 'react-icons/gi'

function StickyModel(props) {
    return (
        <>
            <section className={s.container} >
                <div >
                    <MdSpeed className={s.icons} /> Max. speed  
                </div> <hr />
                <div >
                    <GiPathDistance className={s.icons} /> Range (miles)
                </div> <hr />
                <div >
                    <MdBatteryCharging30 className={s.icons} /> Battery Capacity
                </div> <hr />
                <div >
                    <MdSpeed className={s.icons} /> Net Weight
                </div> <hr />
                <div >
                    <MdSpeed className={s.icons} /> Payload
                </div> <hr />
                <div >
                    <MdSpeed className={s.icons} /> Chargin Time
                </div> <hr />
                <div >
                    <MdSpeed className={s.icons} /> Number of Batteries
                </div> <hr />
                <div >
                    <MdSpeed className={s.icons} /> Motor power
                </div> <hr />
                <div>
                    <MdSpeed className={s.icons} /> Power Output
                </div> <hr />
                <div>
                    <MdSpeed className={s.icons} /> Max. Incline
                </div> <hr />
                <div>
                    <MdSpeed className={s.icons} /> Shock Absorption
                </div> <hr />
                <div>
                    <MdSpeed className={s.icons} /> Safety
                </div> <hr />
                <div>
                    <MdSpeed className={s.icons} /> Atmosphere Light
                </div> <hr />
            </section>
        </>
    );
}

export default StickyModel;