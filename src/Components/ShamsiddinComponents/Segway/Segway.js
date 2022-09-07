import React from 'react';
import Header from './Header/Header';
import Logotip from './LogoTip/Logotip';
import CoruselSlider from './CoruselSlider/CoruselSlider';
import BlueLine from './BlueLine/BlueLine';
import ScooterInfo from './ScooterInfo/ScooterInfo';
import Report from './Report/Report';

export default function Segway() {
  return (
    <div>
        <Header />
        <Logotip />
        <CoruselSlider />
        <BlueLine />
        <ScooterInfo />
        {/* <Report /> */}
    </div>
  )
}
