import React, { useReducer, useState } from 'react';
import '../../../../index.css';
import s from './Report.module.css';
import ReportBox from './ReportBox/ReportBox';
import ReportFunction from '../AResizedContractionHoc/ReportFunction/Reducer';
import {Context} from '../AResizedContractionHoc/ReportFunction/Context';

import reportFoto1 from '../segway/Report/01.png';
import reportFoto2 from '../segway/Report/02.png';
import reportFoto3 from '../segway/Report/03.png';
import reportFoto4 from '../segway/Report/04.png';

import ReportBodyFoto1 from '../segway/ReportBody/body-1.png';
import ReportBodyFoto2 from '../segway/ReportBody/body-2.png';
import ReportBodyFoto3 from '../segway/ReportBody/body-3.png';
import ReportBodyFoto4 from '../segway/ReportBody/body-4.png';

export default function Report() {

    const reportBox = [
        {
            foto: reportFoto1,
            title1: 'Delivery within',
            title2: '1 business day',
            active: true
        },

        {
            foto: reportFoto2,
            title1: 'Basic 1 year',
            title2: 'warranty',
            active: false
        },

        {
            foto: reportFoto3,
            title1: 'After Sales',
            title2: 'Support',
            active: false
        },

        {
            foto: reportFoto4,
            title1: 'Up to 40 miles',
            title2: 'per charge',
            active: false
        }
    ]

    const [state, dispatch] = useReducer(ReportFunction, reportBox);

    const reportBody = [
        {
            foto: ReportBodyFoto1,
            textOneH1: 'we are in ',
            textTwoH1: 'los angeles, ca',
            textP: 'Free California 1day shiping. US Free Shiping 3-5 days',
        },

        {
            foto: ReportBodyFoto2,
            textOneH1: 'one year ',
            textTwoH1: 'manufacturer\'s warrant',
            textP: 'The basic warranty is 1year. You can also extend the warranty up 4 years.',
        },

        {
            foto: ReportBodyFoto3,
            textOneH1: 'after sales',
            textTwoH1: 'support',
            textP: 'If you have any difficulties with your kickscooter, our specialists will contact you within 15 minutes',
        },

        {
            foto: ReportBodyFoto4,
            textOneH1: 'Up to 40 miles of range',
            textTwoH1: 'on a single charge',
            textP: `With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, 
                    the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.`,
        }
    ]

    const [reportBodyCheck, setReportBodyCHeck] = useState(0);

  return (
    <Context.Provider value={{
        dispatch,
        setReportBodyCHeck
    }}>
        <div className='Container'>
            <div className={s.ReportInner}>
                <div className={s.ReportBoxes}>
                    {state.map((keys, index) => <ReportBox
                                                            index={index}
                                                            key={index} 
                                                            {...keys} />)}
                </div>
                <div className={s.ReportBody}>
                    <div className={s.ReportBodyTitl}>
                        <h1>{reportBody[reportBodyCheck].textOneH1}</h1>
                        <h1>{reportBody[reportBodyCheck].textTwoH1}</h1>
                        <p>{reportBody[reportBodyCheck].textP}</p>
                    </div>
                    <img src={reportBody[reportBodyCheck].foto} />
                </div>
            </div>
        </div>
    </Context.Provider>
  )
}
