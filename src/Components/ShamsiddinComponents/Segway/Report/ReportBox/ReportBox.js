import React, { useContext } from 'react';
import { Context } from '../../AResizedContractionHoc/ReportFunction/Context';
import s from './ReportBox.module.css';

export default function ReportBox({foto, title1, title2, index, active}) {
  const {dispatch, setReportBodyCHeck} = useContext(Context);
  
  return (
    <div 
        onClick={() => {
          setReportBodyCHeck(indexes => indexes = index);
          dispatch({
            type: 'change',
            index: index
          })
        }}
        id={index} className={s.ReportBox} 
        style={{
          background: active ? '#009eff' : ''
        }}
        >
        <img src={foto} />
        <div className={s.ReportBoxTitle}>
            <p style={{color: active ? '#fff' : ''}} >{title1}</p>
            <p style={{color: active ? '#fff' : ''}} >{title2}</p>
        </div>
    </div>
  )
}
