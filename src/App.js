
// Import React
import { React, useEffect, useState } from 'react'

// Import React-Router-Dom
import { BrowserRouter } from "react-router-dom";

// Import Css
import './App.css';
import MainApp from './Components/Accessories/MainApp';

// Import Components
import Models from './Components/Models/Models'
import OneSteps from "./Components/ShamsiddinComponents/OneStepes/OneSteps";
import PowerRecicle from './Components/ShamsiddinComponents/PoweRicycle/PowerRecycle'



function App() {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 5000)
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
                            <div className="tamirda">
                                <h1>Repairs are currently underway</h1>
                            </div>
                        </>
                    )
            }


        </BrowserRouter>
    );

}

export default App;
