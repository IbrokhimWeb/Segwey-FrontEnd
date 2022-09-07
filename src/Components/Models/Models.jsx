// Import React
import { React, useState } from 'react';

// Import Css
import s from "./Models.module.css";

// Import Images
import E22 from '../../images/backpack.png';

// Imort Icons 
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

// Import Components 
import Model from './Model/Model'
import StickyModel from './StickyModel/StickyModel';

function Models(props) {

    // const [index, setIndex] = useState(0);

    const [models, useModel] = useState([
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
         {
            id: 1,
            img: E22,
            model: 'E22',
            maxSpeed: 20,
            Range: 22,
            batteryCapacity: 5100,
            netWeight: 13.5,
            payload: [25, 100],
            charginTime: 3.5,
            nuberOfBatteries: '1 встроенная',
            motorPower: 300,
            powerOutput: 71,
            maxIncline: 15,
            shockAbsorption: 'none',
            safety: 'Задний LED-фонарь',
            atmosphereLight: 'none',
            chena: 99.999
        },
        
    ]);


    return (
        <>
            {/* Models Section */}
            <section className={s.modelsContainer}>
                <h1>COMPARE SPECIFICATIONS</h1>
                <h2>Add model to compare</h2>

                <div className={s.modelsBlok}>
                    <div className={s.fourModels__data}>


                        <div className={s.modelsSticky}>
                            <StickyModel />
                        </div>

                        {models.map((m, i) => <Model model={m} index={i} />)}
                    </div>
                </div>

            </section>
            {/* /Models Section */}

        </>
    );
}

export default Models;