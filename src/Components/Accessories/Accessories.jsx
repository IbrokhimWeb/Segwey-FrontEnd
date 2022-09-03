// Import React
import React from 'react';

// Import Link in react router dom
import { Link } from 'react-router-dom';

// Import AccessoriesItem
import AccessoriesItem from './AccessoriesItem';


export default function Accessories({accessories}) {

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

                            {accessories.map((item, idx) => (

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
