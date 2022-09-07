import React from 'react';
import '../../../../index.css';
import s from './ScooterInfo.module.css';
import InfoTextFoto from '../segway/ScooterInfo/Слой 0 2.png';
import InfoFoto from '../segway/ScooterInfo/Right-1.png';

import LeftText from './InfoLeft/LeftText/LeftText';

export default function ScooterInfo() {

    const payingFoto = [
        '../segway/pay/Vector.png',
        '../segway/pay/Vector (1).png',
        '../segway/pay/Vector (2).png',
        '../segway/pay/Vector (3).png',
        '../segway/pay/Vector (4).png',
        '../segway/pay/Vector (5).png',
        '../segway/pay/Vector (6).png',
        '../segway/pay/Vector (7).png',
        '../segway/pay/Vector (8).png',
        '../segway/pay/Vector (9).png',
        '../segway/pay/Vector (10).png',
        '../segway/pay/Vector (11).png',
        '../segway/pay/Vector (12).png',
        '../segway/pay/Vector (13).png',
        '../segway/pay/Vector (14).png',
        '../segway/pay/Vector (15).png',
        '../segway/pay/Vector (16).png'
    ]

  return (
    <div className='Container'>
        <div className={s.ScooterInfoInner}>
            <div className={s.InfoLeft}>
                {/* <LeftText /> */}
                <button>In stock</button>
                <h1>segway ninebot kickscooter max</h1>

                <div className={s.InfoLeftInner}>
                    <h4>Add an extended warranty from <span>Extend</span></h4>
                    <div className={s.InfoLeftBoxes}>
                        <p>1 Year - $139</p>
                        <p>2 Year - $209</p>
                        <p>3 Year - $279</p>
                    </div>
                    <div className={s.InfoLeftText}>
                        <div className={s.Texts}>
                            <h5>$1049.99</h5>
                            <h2>$949.99</h2>
                        </div>
                        <h3>
                            Segwat Protective Gear Setas a gift
                        </h3>
                        <dvi className={s.InfoLeftImg}>
                            <img src={InfoTextFoto} />
                        </dvi>
                    </div>
                    <div className={s.InfoLeftInnerButtons}>
                        <button>by now</button>
                        <button>add to cart</button>
                    </div>
                </div>
                
                <div className={s.Pays}>
                    <p>
                        Payment Methods:
                        <span className={s.Blue}>Starting at $55/mo with</span>
                        <span className={s.Green}>Prequalify now</span>
                    </p>
                    <div className={s.PaysImg}>
                        {payingFoto.map((keyFoto, index) => <img key={index} src={keyFoto} />)}
                    </div>
                </div>
            </div>

            <div className={s.InfoRight}>
                <img src={InfoFoto} />
                <div className={s.InfoButtons}>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>

        </div>        
    </div>
  )
}
