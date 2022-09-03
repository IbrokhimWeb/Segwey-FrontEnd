// Import React 
import { React } from 'react';

// Import Components
import FeaturesSectionItem from './FeaturesSectionItem'


export default function FeaturesSection(props) {
    return (
        <>
            {/* FeaturesSection Start */}
            <section className="features">
                {/* Background Image Section Start */}
                <div className="container-fluit display-flex justify-content-center">
                    <div className="features__bg"></div>
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
