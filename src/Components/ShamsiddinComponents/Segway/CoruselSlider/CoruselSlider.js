import React from 'react';
import s from './CoruselSlide.module.css';
import SliderBoxes from './SliderBox/SliderBox';
import AResizeConsTraction from '../AResizedContractionHoc/AResizeConsTraction';
import SliderHoc from '../AResizedContractionHoc/SliderHoc';

export default function CoruselSlider() {
    
    const responsive = [
        {breakpointer: {width: 0, item: 4}},
        {breakpointer: {width: 750, item: 5}},
        {breakpointer: {width: 850, item: 6}},
        {breakpointer: {width: 950, item: 7}}
    ];

    const [container, target, boxWidth, items] = AResizeConsTraction(responsive);
    
    let namesBox = ['ks e22', 'ks es1l', 
                    'ks air t15', 'ks f30', 
                    'ks e45', 'ks max', 
                    'ks max', 'ks es2',
                    'ke es3', 'eks zing e8',
                    'esk zing e10', 'eks zing e12',
                    'ks es 4', 'accessories'];

    const [btnsSlider, transitionSec, count] = SliderHoc(items, namesBox);

  return (
    <div ref={target} className={s.CoruselSlides}>
        <div ref={container} className='Container' style={{
                                                            overflow: 'hidden',
                                                            position: 'relative'
                                                        }}>
            <button 
                onClick={(prev) => btnsSlider(prev)}
                id='prev'
                className={s.prev}>
                    <span></span>
            </button>
                <div 
                    style={{
                        transform: `translateX(${count * -boxWidth}px)`,
                        transition: `${transitionSec}s ease`
                    }}
                    className={s.SliderCorusel}>
                    {namesBox.map((keys, index) => <SliderBoxes 
                                                            key={index}
                                                            kesyName={keys}
                                                            indexes={index}
                                                            width={boxWidth}
                                                        />)}
                </div>
            <button 
                onClick={(prev) => btnsSlider(prev)}
                id='next'
                className={s.next}>
                    <span></span>
            </button>
        </div>        
    </div>
  )
}
