
// Import React
import { React, useEffect, useState } from 'react'

// Import React-Router-Dom
import { BrowserRouter } from "react-router-dom";

// Import Css
import './App.css';

// Import Components
import Header from './Components/ShamsiddinComponents/Segway/Header/Header';
import Logotip from './Components/ShamsiddinComponents/Segway/LogoTip/Logotip';
import CoruselSlider from './Components/ShamsiddinComponents/Segway/CoruselSlider/CoruselSlider';
import BlueLine from './Components/ShamsiddinComponents/Segway/BlueLine/BlueLine';
import ScooterInfo from './Components/ShamsiddinComponents/Segway/ScooterInfo/ScooterInfo';
import Report from './Components/ShamsiddinComponents/Segway/Report/Report';

import Accessories from './Components/Accessories/MainApp'

import OneStep from './Components/ShamsiddinComponents/OneStepes/OneSteps';
import PowerRicycle from './Components/ShamsiddinComponents/PoweRicycle/PowerRecycle';
import FirstCharging from './Components/ShamsiddinComponents/FirstCharging/FirstCharging';
import RidingModes from './Components/ShamsiddinComponents/RidingModes/RidingModes';

import { SegwayProtective } from './Components/SegwayProtective/SegwayProtective';


import Models from './Components/Models/Models'




function App() {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])
    return (
        <BrowserRouter>

            {
                loader ?
                    (
                        <div className="loader_content">
                            <div className="" role="main" >
                                <div className="loader loader-6"></div>
                            </div>
                        </div>
                    ) : (

                        <>
                            <Header />
                            <Logotip />
                            <CoruselSlider />
                            <BlueLine />
                            <ScooterInfo />
                            <Report/>

                            <Accessories/>

                            <OneStep/>
                            <PowerRicycle/>
                            <FirstCharging/>
                            <RidingModes/>

                            <SegwayProtective/>

                            {/* <Models/> */}

                            
                        </>
                        // <>
                        //     <div className="tamirda">
                        //         <h1>Repairs are currently underway</h1>
                        //     </div>
                        // </>
                    )
            }
            



        </BrowserRouter>
        // BrowserRouter
    );

}

export default App;
