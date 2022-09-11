import React from 'react'
import SegwayProtectiveImg from  "../../images/SegwayProtective-img.png"
import "./SegwayProtective.css"

export const SegwayProtective = () => {
  return (
    <div className="segway container">
        <img className="segway__img" src={SegwayProtectiveImg} alt="Segway Protective" width="278" heigjy="201"/>
        <div className="segway__content">
        <h3 className="segway__title">Segway Protective Gear Set as a gift</h3>
        <p className="segway__desc">The cost of a protection kit when buying a scooter is $ 0 instead of $ $29.99</p>
        </div>
    </div>
  )
}
