// import React
import React from 'react';

export default function FeaturesSectionItem(props) {

    return (
        <>
            {/* FeaturesSectionItem Start */}
            <ul className="features__list">
                {props.features.map((item, idx) => (
                    <li key={idx} className="features__item">
                        <span className="features__title">
                            {item.features__title}
                        </span>
                        <p className="features__text">
                            {item.features__text}
                        </p>
                    </li>
                ))}

            </ul>
            {/* FeaturesSectionItem End */}
        </>
    )
}
