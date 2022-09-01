import { React } from 'react';
import s from './OnseSteps.module.css';
import StepsFoto from '../images/one-steps.png';

function OneSteps() {
  return (
    <div className={s.Steps}>
        <div className={s.StepInner}>
            <div className={s.stepsText}>
                <h1>one-step folding mechanism</h1>
                <p>Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds</p>
            </div>
            <div className={s.stepsImg}>
                <img src={StepsFoto} /> 
            </div>
        </div>
    </div>
  )
}


export default OneSteps;
