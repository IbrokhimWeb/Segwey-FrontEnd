// Import React
import { React } from 'react';

// Import Css
import s from './Model.module.css'

// Import Icons
import { MdSpeed, MdBatteryCharging30 } from 'react-icons/md'
import { GiPathDistance } from 'react-icons/gi'

function Model({ model, index }) {
    // console.log(models);
    console.log((index%2));
    
    return (
        <>
            {index === 0 || index === 4 || index === 8 || index === 12 
                ?
                <section className={s.modelContainer}>

                    <div className={s.modelBlok__0}>
                        <img src={model.img} />
                        <h1> NININEBOT<br />KICKSCOOTER {model.model} </h1>


                        <div className={s.modelTitle}>
                            <MdSpeed/> Max. speed
                        </div>
                        <p> {model.maxSpeed} км/ч</p>
                        <div className={s.modelTitle}>
                            <GiPathDistance/> Range (miles)
                        </div>
                        <p> {model.Range} </p>
                        <div className={s.modelTitle}>
                            <MdBatteryCharging30/> Battery Capacity
                        </div>
                        <p> {model.batteryCapacity} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Net Weight
                        </div>
                        <p> {model.netWeight} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Payload
                        </div>
                        <p> {model.payload} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Chargin Time
                        </div>
                        <p> {model.charginTime} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Number of Batteries
                        </div>
                        <p> {model.nuberOfBatteries} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Motor power
                        </div>
                        <p> {model.motorPower} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Power Output
                        </div>
                        <p> {model.powerOutput} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Max. Incline
                        </div>
                        <p> {model.maxIncline} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Shock Absorption
                        </div>
                        <p> {model.shockAbsorption} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Safety
                        </div>
                        <p> {model.safety} </p>
                        <div className={s.modelTitle}>
                            <MdSpeed/> Atmosphere Light
                        </div>
                        <p> {model.atmosphereLight} </p>
                    </div>

                </section>

                :

                <section className={s.modelContainer}>

                    <div className={s.modelBlok}>
                        <img src={model.img} />
                        <h1> NININEBOT<br />KICKSCOOTER {model.model} </h1>

                        <p> {model.maxSpeed} км/ч</p>
                        <p> {model.Range} </p>
                        <p> {model.batteryCapacity} </p>
                        <p> {model.netWeight} </p>
                        <p> {model.payload} </p>
                        <p> {model.charginTime} </p>
                        <p> {model.nuberOfBatteries} </p>
                        <p> {model.motorPower} </p>
                        <p> {model.powerOutput} </p>
                        <p> {model.maxIncline} </p>
                        <p> {model.shockAbsorption} </p>
                        <p> {model.safety} </p>
                        <p> {model.atmosphereLight} </p>
                    </div>

                </section>
            }

        </>
    );
}

export default Model;