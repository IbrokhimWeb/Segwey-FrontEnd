
// Import React
import { React } from 'react'

// Import React-Router-Dom
import { BrowserRouter } from "react-router-dom";

// Import Css
import './App.css';
import MainApp from './Components/Accessories/MainApp';

// Import Components
import Models from './Components/Models/Models'
// import OneSteps from "./Components/ShamsiddinComponents/OneStepes/OneSteps";
// import PowerRecicle from './Components/ShamsiddinComponents/PoweRicycle/PowerRecycle';
// import FirstCharging from './Components/ShamsiddinComponents/FirstCharging/FirstCharging';
// import RidingModes from './Components/ShamsiddinComponents/RidingModes/RidingModes';
import Segway from './Components/ShamsiddinComponents/Segway/Segway';



function App() {
    return (
        <BrowserRouter>
            {/* <MainApp/> */}
            <Segway/>
        </BrowserRouter>
    );

}

export default App;
