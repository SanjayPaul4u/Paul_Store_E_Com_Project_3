import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa6";
import PriceFormat from '../../helper/PriceFormat'
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa";
import AddToCart from './AddToCart';


const SingleData = () => {
  return (
    <Wrapper>
        <p className='visit-store'>Visit PualStore</p>
        <h3 className='product-name'>Magic Powder</h3>
        <p className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor eligendi corrupti magnam est nobis perferendis quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem!</p>

        <p className='product-weight'>Weight: <span>1 kg</span></p>

        <p className='rateAndReview'>
          <FaStar className='star-icon-style'/>
          <FaStar className='star-icon-style'/>
          <FaStar className='star-icon-style'/>
          <FaStar className='star-icon-style'/>
          <FaStar className='star-icon-style'/>
           <span> ( 55 Reviews )</span>
        </p>

        <p className='del-mrp'>
            MRP: <del><PriceFormat price={(999*100)*1.50}/></del>
        </p>
        <h6 className='actual-price'>Buy Now: <PriceFormat price={999*100}/></h6>


        {/* Add to Cart */}
        <AddToCart/>

        <p className='stock'>Available: <span>In Stock</span></p>
        <p className='id'>Id: <span>78aa56df5665dfdb</span></p>
        <p className='brand'>Brand: <span>Tower</span></p>

        <hr />
        
        <div className="about-service">
          <div className="our-services">
            <TbTruckDelivery className='iconStyle'/>
            <p>Free & Quick Delivery</p>
          </div>
          <div className="our-services">
            <TbReplace className='iconStyle'/>
            <p>7 Days Replacement</p>
          </div>
          <div className="our-services">
            <MdSecurity className='iconStyle' />
            <p>Warranty Available</p>
          </div>
          <div className="our-services">
            <FaAmazonPay className='iconStyle' />
            <p>Secure Payment</p>
          </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
font-family: ${({theme})=>theme.fonts.font2};
  .visit-store{
    color: ${({theme})=>theme.colors.lowBlack};
    margin-bottom: -0.1rem;
  }
  .product-name{
    color: ${({theme})=>theme.colors.black};
    
  }
  .product-description{
    color: ${({theme})=>theme.colors.mediumBlack};
    margin-bottom: 0.2rem;
    font-size: 0.85rem;
  }
  .product-weight{
    color: ${({theme})=>theme.colors.mediumBlack};
    span{
      color: ${({theme})=>theme.colors.black};
      font-weight: 400;
    }

  }
  .rateAndReview{
    .star-icon-style{
      color: #ffbb00;
    }
  }

  .del-mrp{
    font-size: 0.9rem;
    margin-bottom: 0;
    color: ${({theme})=>theme.colors.red};
  }
  .actual-price{
    color: ${({theme})=>theme.colors.black};
  }
  .stock{
    margin-top: 0.8rem;
    margin-bottom: 0rem;
    color: ${({theme})=>theme.colors.lowBlack};
    font-size: 0.9rem;
    span{
      color: ${({theme})=>theme.colors.black};
    }
  }
  .id, .brand{
    margin-bottom: 0rem;
    color: ${({theme})=>theme.colors.lowBlack};
    font-size: 0.9rem;
    span{
      color: ${({theme})=>theme.colors.black};
    }
  }
  .about-service{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .our-services{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconStyle{
        font-size: 2rem;
        color: ${({theme})=>theme.colors.black};
      }
      p{
        font-size: 0.8rem;
        color: ${({theme})=>theme.colors.mediumBlack};
      }
    }
  }
`
export default SingleData