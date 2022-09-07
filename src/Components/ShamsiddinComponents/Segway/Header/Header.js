import React from 'react';
import '../Style.css';
import s from './Header.module.css';
import Logo from '../segway/segway2.png';

export default function Header() {
  return (
    <div className={s.Headers}>
        <div className='Container'>
            <div className={s.HeaderInner}>
                <div className={s.BurgerMenu}>
                    <i className='bx bx-menu' ></i>
                </div>
                <div className={s.Navbor}>
                    <a href="#">REVIEWS</a>
                    <a href="#">SHIPPING AND PAYMENT</a>
                    <a href="#">WHOLESALE</a>
                    <a href="#">BLOG</a> 
                    <a href="#">CONTACTS</a>
                </div>
                <div className={s.Logo}>
                    <img src={Logo} />
                </div>
                <div className={s.SosiolMedia}>
                    <a href="#" className={s.Korzinka}>
                        <span>0</span>
                        <i className='bx bx-cart'></i>
                    </a>
                    <a href="#"><i className='bx bxl-instagram' ></i></a>
                    <p>+1 (888) 888-88-88</p>
                    <a href='#' className={s.Phone}>
                        <i className='bx bx-phone-call'></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
