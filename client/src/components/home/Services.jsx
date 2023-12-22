import React from 'react'
import styled from 'styled-components'
import { FaDelicious } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaIndianRupeeSign } from "react-icons/fa6";





const Services = () => {
  return (
    <Wrapper>
        <div className="row">
            <div className="a-x-raw-materials col-4 col-md-4 col-xl-4">
                <div>
                    <FaDelicious className='iconStyle'/> 
                    <h5>A-Z Raw Materials</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum sit nulla molestias fuga commodi consequatur maxime.</p>
                </div>
            </div>
            <div className="cash-on-delivery col-4 col-md-4 col-xl-4">
                <div>
                    <TbTruckDelivery className='iconStyle'/>
                    <h5>Cash On Delivery</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, deleniti.</p>
                </div>
            </div>
            <div className="money-back-guaranteed col-4 col-md-4 col-xl-4">
                <div>
                    <FaIndianRupeeSign className='iconStyle'/>
                    <h5>Money Back Guaranteed</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam, soluta quasi veritatis quaerat fugit.</p>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin-top: 3rem;
    .row{    
        h3{
            color: red;
        }
        .a-x-raw-materials, .cash-on-delivery, .money-back-guaranteed{
            padding: 1rem;
            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                background-color: ${({theme})=> theme.colors.mainBg};
                border: 0.15rem solid ${({theme})=> theme.colors.lowBlack};
                border-radius: 1rem;
                height: 15rem;
                .iconStyle{
                    font-size: 3rem;
                    color: ${({theme})=> theme.colors.mediumBlack};
                    margin-bottom: 0.8rem;
                }
                h5{
                    color: ${({theme})=> theme.colors.black};  
                }
                p{
                    color: ${({theme})=> theme.colors.mediumBlack};  
                }
            }
        }
    }
    
`
export default Services