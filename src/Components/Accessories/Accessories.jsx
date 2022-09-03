import React from 'react'
// Import React
import { Link } from 'react-router-dom'
// Import Link in react router dom
import AccessoriesItem from './AccessoriesItem'
// Import AccessoriesItem


export default function Accessories(props) {
    return (
        <>
            {/* AccessoriesSection Start */}
            <section className="acces">
                <div className="container">
                    <div className="acces__box">
                        <h2 className="acces__theme">
                            Accessories
                        </h2>
                        {/* AccessoriesItem mapping  Start */}
                        <ul className="acces__list overflow-auto">
                            {props.accessories.map((item, idx) => (
                                <AccessoriesItem key={idx} item={item} />
                            ))}
                        </ul>
                        {/* AccessoriesItem mapping end */}
                        <Link to="/" class="acces__link">
                            SEE MORE
                        </Link>
                    </div>
                </div>
            </section>
            {/* AccessoriesSection End */}
        </>
    )
}
