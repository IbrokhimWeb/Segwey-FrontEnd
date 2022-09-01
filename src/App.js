// Import React
import { React } from 'react'

// Import React-Router-Dom
import { BrowserRouter } from "react-router-dom";

// Import Css
import './App.css';

// Import Components
import Accessories from './Components/Accessories/Accessories'


function App() {
    return (
        <BrowserRouter>
            <Accessories />
        </BrowserRouter>
    );
}

export default App;
