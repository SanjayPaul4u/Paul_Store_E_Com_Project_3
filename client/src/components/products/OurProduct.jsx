import React from 'react'
import Img1 from '/img2.png'
import { FaStar } from "react-icons/fa6";
import PriceFormat from '../../helper/PriceFormat'
import { NavLink } from 'react-router-dom';



const OurProduct = () => {
  return (
    <NavLink to={`/products/515adf54adf`}>
    <div className="card position-relative" style={{width: "auto"}}>
            {/* badge */}
            <div className='badge-div position-absolute'>
                <span className=" badge">
                    IceCreame bakery
                </span>          
            </div>            

            <img src={Img1} className="card-img-top" alt="product-img-err"/>

            <div className="card-body">            
                <div>
                    <p>Sccharin</p>
                    <h5 className="card-title price"><PriceFormat price={999*100}/></h5>
                </div>
                <p className='rate-para'><FaStar className='icon-style'/> 4.5</p>
            </div>
    </div>
    </NavLink>
  )
}

export default OurProduct