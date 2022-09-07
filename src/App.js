
// Import React
import { React, useEffect, useState } from 'react'

// Import React-Router-Dom
import { BrowserRouter } from "react-router-dom";

// Import Css
import './App.css';

// Import Components
import Accessories from './Components/Accessories/Accessories';
import AccessoriesItem from './Components/Accessories/AccessoriesItem';



function App() {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 5000)
    }, [])
    return (
        <>

            {/* {
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
            } */}
            <Accessories/>



        </>
        // BrowserRouter
    );

}

export default App;
