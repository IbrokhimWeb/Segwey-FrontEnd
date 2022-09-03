
// Import React
import { React } from 'react'

// Import React-Router-Dom
import { BrowserRouter } from "react-router-dom";

// Import Css
import './App.css';

// Import Components
import Models from './Components/Models/Models'
// import OneSteps from "./Components/ShamsiddinComponents/OneStepes/OneSteps";
// import PowerRecicle from './Components/ShamsiddinComponents/PoweRicycle/PowerRecycle';
// import FirstCharging from './Components/ShamsiddinComponents/FirstCharging/FirstCharging';
// import RidingModes from './Components/ShamsiddinComponents/RidingModes/RidingModes';



function App() {
    return (
        <BrowserRouter>
            <Models/>
        </BrowserRouter>
    );
}

export default App;
