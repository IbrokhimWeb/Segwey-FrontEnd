
// Importr React and useState
import { React, useState } from 'react';

// import css
import "./main.css";

// Import Accessories component
import Accessories from './Accessories';

// Import Components
import FeaturesSection from './FeaturesSection';

function MainApp() {


    // Object in accessories Data
    const [accessories, setAccessories] = useState(
        [
            {
                info_title: "NineboT Engine Speaker",
                info_text: "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
                acces_price: 149.99
            },
            {
                info_title: "Extension Rod",
                info_text: "The Extension Rod helps you to easily maneuver your scooter, so you no longer need to bend over and push it, making it easier to take with you anywhere.",
                acces_price: 29.99
            },
            {
                info_title: "Segway Protective Gear Set",
                info_text: "The curved, streamlined design of the helmet shell, coupled with the thick, high-quality fabrics create a helmet that is stylish, protective and comfortable to wear.",
                acces_price: 29.99
            },
            {
                info_title: "Ninebot Leisure Backpack",
                info_text: "The Ninebot leisure backpack adopts a stylish gray-yellow color contrast, adding a trendy accessory to your wardrobe.",
                acces_price: 69.99
            },
            {
                info_title: "Segway External Battery",
                info_text: "It is easy to install and increases the range of the ES1, ES2 & E22 to 27.9, 28 and 27 miles respectively and It also increases the speed",
                acces_price: 249.99
            },
            {
                info_title: "Segway Charger",
                info_text: "Whether at home, the office, or on your KickScooter journey, this Ninebot KickScooter by Segway Charger is designed to provide a safe and stable charge anytime, anywhere.",
                acces_price: 79.99
            },
            {
                info_title: "Segway Scooter Bag",
                info_text: "Tough EVA material, suitable for the entire Ninebot KickScooter by Segway line. 3L capacity gives you plenty of room to carry your phone, charger, bottled water, and other personal items.",
                acces_price: 49.99
            },
            {
                info_title: "Segway Phone Holder",
                info_text: "The dual screw, non-slip design offers ultimate security and versatility. The phone holder is applicable to multiple vehicle series.",
                acces_price: 29.99
            },
            {
                info_title: "Segway Phone Holder",
                info_text: "This scooter seat is designed to work with the MAX. It offers high quality, comfort and safety that is in line with the MAX KickScooter.",
                acces_price: 119.99
            }
        ])

    // Object In features data
    const [features, setFeatures] = useState([
        { features__title: '10"', features__text: "Pneumatic Tires" },
        { features__title: "LED", features__text: "Front LED Lights" },
        { features__title: "18.6 mph", features__text: "Max Speed" },
        { features__title: "40.4 Miles", features__text: "Max Range" },
        { features__title: "20%", features__text: "Hill Grade" },
        { features__title: "IPX5", features__text: "Water-Resistant" },
        { features__title: "6H", features__text: "Fast Charging" },
        { features__title: "551Wh", features__text: "Battery" }
    ])

    return (
        <>
            {/* Main Section Start */}
            <main className='site_main'>
                {/* Accessories Section */}
                <Accessories accessories={accessories} />
                {/* FeaturesSection */}
                <FeaturesSection features={features} />
            </main>
            {/* Main Section End */}
        </>

    )
}

export default MainApp;

