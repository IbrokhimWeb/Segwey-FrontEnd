// Import React 
import { React } from 'react';

// Import Img

import features__bg from "../../images/features-bg.png"

// Import Components
import FeaturesSectionItem from './FeaturesSectionItem'


export default function FeaturesSection(props) {
    return (
        <>
            {/* FeaturesSection Start */}
            <section className="features">
                {/* Background Image Section Start */}
                <div className="container-fluit display-flex justify-content-center">
                    <img src={features__bg} className="features__bg" />
                </div>
                {/* Background Image Section End */}
                <div className="container">
                    <div className="features__box">
                        <h2 className="features__theme">
                            IMPRESSIVE FEATURES
                        </h2>
                        <FeaturesSectionItem features={props.features} />
                    </div>
                </div>
            </section>
            {/* FeaturesSection End */}
        </>
    )
}
