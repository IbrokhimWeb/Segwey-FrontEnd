import React, {useRef, useState, useCallback} from 'react';

export default function AResizeConsTraction(responsive) {

    let container = useRef();
    let target = useRef();
    let observ = useRef();
    const [boxWidth, setBoxWidth] = useState(0);
    const [items, setItems] = useState(0);

    let itemx = 0;
    function resizeSLider() {
        responsive.forEach(elem => {
            if(window.innerWidth > elem.breakpointer.width){
                itemx = elem.breakpointer.item;
                setItems(itm => itm = elem.breakpointer.item);
            }
        });

        let containerWidth = container.current.offsetWidth;
        let boxesWidth = Math.floor(containerWidth / itemx);
        setBoxWidth(boxes => boxes = boxesWidth); 
    }

    target = useCallback((elems) => {
        if(elems){
            observ.current = new ResizeObserver(resizeSLider).observe(elems);
        }
    }, []);

  return [container, target, boxWidth, items];
}
