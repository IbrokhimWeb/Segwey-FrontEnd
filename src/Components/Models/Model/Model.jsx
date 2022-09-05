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

                        <p> {model.maxSpeed} км/ч</p> <hr />
                        <p> {model.Range} </p> <hr />
                        <p> {model.batteryCapacity} </p> <hr />
                        <p> {model.netWeight} </p> <hr />
                        <p> {model.payload} </p> <hr />
                        <p> {model.charginTime} </p> <hr />
                        <p> {model.nuberOfBatteries} </p> <hr />
                        <p> {model.motorPower} </p> <hr />
                        <p> {model.powerOutput} </p> <hr />
                        <p> {model.maxIncline} </p> <hr />
                        <p> {model.shockAbsorption} </p> <hr />
                        <p> {model.safety} </p> <hr />
                        <p> {model.atmosphereLight} </p> <hr />
                        <p> {model.chena} </p> 
                        <button>Qwerty</button>
                    </div>

                </section>
        </>
    );
}

export default Model;