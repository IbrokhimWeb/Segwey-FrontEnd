// Import React
import { React } from 'react'

// Import React-Router-Dom
import { BrowserRouter } from "react-router-dom";

// Import Css
import './App.css';

// Import Components
import Models from './Components/Models/Models'


function App() {
    return (
        <BrowserRouter>
            <Models />
        </BrowserRouter>
    );
}

export default App;
