// Import React
import { React } from 'react';

// Import Css
import s from './Model.module.css'



function Model({ model, index }) {
    // console.log(models);
    // console.log((index%2));
    
    return (
        <>
           

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
            

        </>
    );
}

export default Model;