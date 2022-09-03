import React from 'react'
// Import React
export default function AccessoriesItem(props) {
    // destructuring in props
    const { info_title, info_text, acces_price } = props.item
  return (
      <>
          {/* AccessoriesItem start */}
          <li className="acces__item">
              <div className="acces__info">
                  <div className="acces__info-titlebox">
                      <h3 className="acces__info-title">
                          {info_title}
                      </h3>
                  </div>
                  <p className="acces__info-text">
                      {info_text}
                  </p>
                  <ins className="acces__cost">
                      ${acces_price}
                  </ins>

                  <button className="acces__btn">
                      ADD TO CART
                  </button>
              </div>
          </li>
          {/* AccessoriesItem end */}
      </>
  )
}
