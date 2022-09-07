import React, {useState} from 'react';

export default function SliderHoc(items, namesBox) {
    const [count, setCount] = useState(0);
    const [transitionSec, setTrasitionSec] = useState(0);

    const btnsSlider = (elem) => {
        if(elem.target.id === 'next'){
            if(count >= namesBox.length - items){
                setCount(counter => counter = namesBox.length - items);
            }else {
                setCount(counter => counter += 1);
                setTrasitionSec(second => second = .3);
            }
        }
        if(elem.target.id === 'prev'){
            if(count <= 0){
                setCount(counter => counter = 0);
            }else {
                setCount(counter => counter -= 1);
                setTrasitionSec(second => second = .3);
            }
        }
    }

  return [btnsSlider, transitionSec, count];
}
