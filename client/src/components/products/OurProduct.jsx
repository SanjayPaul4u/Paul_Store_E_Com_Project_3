import React from 'react'
import { FaStar } from "react-icons/fa6";
import PriceFormat from '../../helper/PriceFormat'
import { NavLink } from 'react-router-dom';


const OurProduct = ({ProductData}) => {
  const {_id, name, category, image, price, stars} = ProductData;
  return (
    <NavLink to={`/products/${_id}`}>
    <div className="card position-relative">
            {/* badge */}
            <div className='badge-div position-absolute'>
                <span className=" badge">
                    {category} item
                </span>          
            </div>            

            <img src={`data:${image[0].fileType};base64,${image[0].imagebase64}`} className="card-img-top" alt="product-img-err"/>

            <div className="card-body">            
                <div>
                    <p>{name}</p>
                    <h5 className="card-title price"><PriceFormat price={price*100}/></h5>
                </div>
                <p className='rate-para'><FaStar className='icon-style'/> {stars}</p>
            </div>
    </div>
    </NavLink>
  )
}

export default OurProduct