import React from 'react';
import Classes from './OnseSteps.module.css';
import StepsFoto from '../images/one-steps.png';

export default function OneSteps() {
  return (
    <div className={Classes.Steps}>
        <div className={Classes.StepInner}>
            <div className={Classes.stepsText}>
                <h1>one-step folding mechanism</h1>
                <p>Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds</p>
            </div>
            <div className={Classes.stepsImg}>
                <img src={StepsFoto} /> 
            </div>
        </div>
    </div>
  )
}
