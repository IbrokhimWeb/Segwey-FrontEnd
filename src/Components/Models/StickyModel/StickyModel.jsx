import React from 'react';
import s from './StickyModel.css';


// Import Icons
import { MdSpeed, MdBatteryCharging30 } from 'react-icons/md'
import { GiPathDistance } from 'react-icons/gi'

function StickyModel(props) {
    return (
        <>
            <section >
                <div >
                    <MdSpeed /> Max. speed
                </div>
                <div >
                    <GiPathDistance /> Range (miles)
                </div>
                <div >
                    <MdBatteryCharging30 /> Battery Capacity
                </div>
                <div >
                    <MdSpeed /> Net Weight
                </div>
                <div >
                    <MdSpeed /> Payload
                </div>
                <div >
                    <MdSpeed /> Chargin Time
                </div>
                <div >
                    <MdSpeed /> Number of Batteries
                </div>
                <div >
                    <MdSpeed /> Motor power
                </div>
                <div>
                    <MdSpeed /> Power Output
                </div>
                <div>
                    <MdSpeed /> Max. Incline
                </div>
                <div>
                    <MdSpeed /> Shock Absorption
                </div>
                <div>
                    <MdSpeed /> Safety
                </div>
                <div>
                    <MdSpeed /> Atmosphere Light
                </div>
            </section>
        </>
    );
}

export default StickyModel;