import { React } from 'react';

// Import CSS style
import s from './OnseSteps.module.css';

// Import foto for OneSteps Component
import StepsFoto from '../images/one-steps.png';

function OneSteps() {
    return (
        <>
            {/* Steps section */}
            <div className={s.Steps}>
                {/* StepInner section */}
                <div className={s.StepInner}>
                    {/* stepsText section */}
                    <div className={s.stepsText}>
                        <h1>one-step folding mechanism</h1>
                        <p>Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds.</p>
                    </div>
                    {/* /stepsText section */}
                    {/* stepsImg section */}
                    <div className={s.stepsImg}>
                        <img src={StepsFoto} />
                    </div>
                    {/* /stepsImg section */}
                </div>
                {/* /StepInner section */}
            </div>
            {/* /Steps section */}
        </>
    )
}


export default OneSteps;
