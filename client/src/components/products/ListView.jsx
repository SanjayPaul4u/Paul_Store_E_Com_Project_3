import React from 'react'
import Img1 from '/img1.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PriceFormat from '../../helper/PriceFormat'
import { FaStar } from "react-icons/fa6";


const ListView = () => {
  return (
    <Wrapper className="row gird-view">
      <div className="row-products col-12 col-md-12 col-xl-12">
        {/* cart-start */}
        <NavLink to={`/products/515adf54adf`} className="card mb-3 position-relative" >

          {/* badge */}
          <div className='badge-div position-absolute'>
                <span className="badge">
                    IceCreame bakery
                </span>          
            </div>
          {/* badge end*/}

          <div className="row g-0">
            <div className="col-md-3">
              <img src={Img1} className="img-fluid rounded-start" alt="list-product-img-err"/>
            </div>
            <div className="col-md-9">
              <div className="card-body">            
                      <div>
                          <h5>Sccharin</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum molestias exercitationem, ut dolorum</p>
                          <p>Available: <span> In Stock</span></p>
                          <p>Id:<span> fasdf568a65ad</span></p>
                          <h5 className="card-title price"><PriceFormat price={999*100}/></h5>
                      </div>
                      <p className='rate-para'><FaStar className='icon-style'/> 4.3</p>

              </div>
            </div>
          </div>
        </NavLink>
         {/* cart-end */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 1rem;
  .row-products{
    .card{
      text-decoration: none;
      border: none;

      .badge-div{
              padding: 1rem;
              width: 100%;
              display: flex;
              justify-content: start;
              .badge{
                padding: 0.5rem;
                background-color: ${({theme})=> theme.colors.green};
                opacity: 0.8;
              }
      }
      .card-body{
                height: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0.4rem 1rem;
                font-family: ${({theme})=> theme.fonts.font2};
                
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    p{
                    margin: 0;
                    color: ${({theme})=> theme.colors.lowBlack};
                    font-size: 0.8rem;
                    span{
                      color: ${({theme})=> theme.colors.mediumBlack};
                      font-weight: 600;
                      font-family: ${({theme})=> theme.fonts.font2};
                    }
                    }
                    h5{
                        margin: 0;
                        padding-top: 0.5rem;
                        color: ${({theme})=> theme.colors.black};
                    }
                }
                .rate-para{
                    display: flex;
                    justify-content: center;
                    color: ${({theme})=> theme.colors.mediumBlack};
                    .icon-style{
                        margin-top: 0.2rem;
                        color: #ffbb00;
                    }
                }
               
                
            }
    }
  }
`
export default ListView