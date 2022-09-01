// Import React
import { React } from 'react';

// Import Css
import './Model.css'

function Model({ model }) {
    // console.log(models);

    return (
        <>
            <section className="model-container">

                <div className="model-blok">
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