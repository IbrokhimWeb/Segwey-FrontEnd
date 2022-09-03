// Import React
import { React, useState } from 'react';

// Import Css
import s from "./Models.module.css";

// Import Images
import E22 from '../../images/backpack.png';

// Imort Icons 
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

// Import Components 
import Model from './Model/Model'

function Models(props) {

    const [index, setIndex] = useState(0);

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
            atmosphereLight: 'none'
        },
        {
            id: 2,
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
            atmosphereLight: 'none'
        },
        {
            id: 3,
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
            atmosphereLight: 'none'
        },
        {
            id: 4,
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
            atmosphereLight: 'none'
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
            atmosphereLight: 'none'
        },
        {
            id: 2,
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
            atmosphereLight: 'none'
        },
        {
            id: 3,
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
            atmosphereLight: 'none'
        },
        {
            id: 3,
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
            atmosphereLight: 'none'
        }
    ]);


    return (
        <>
            {/* Models Section */}
            <section className={s.modelsContainer}>
                <h1>COMPARE SPECIFICATIONS</h1>
                <h2>Add model to compare</h2>

                <div className={s.modelsBlok}>

                    {/* <AiOutlineDoubleLeft 
                        onClick={() => setIndex(e => e += 4)} 
                        
                        className={s.modelsBlok__icon} /> */}

                    <div className={s.fourModels__data}>

                        {
                            models.map((m, i) => {
                                i+= index;
                               return <Model model={models[i]} index={i} />
                            })
                        }

                    </div>

                    {/* <AiOutlineDoubleRight 

                        onClick={() => setIndex((e) => e > 0 ? e -= 4 : index)} 
                        
                        className={s.modelsBlok__icon} /> */}

                </div>

            </section>
            {/* /Models Section */}

        </>
    );
}

export default Models;