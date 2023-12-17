import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from 'styled-components';


const CartAmountToggle = (props) => {
    const {quantity, Increment, Decrement} = props;
  return (
    <Wrapper>
        <div className='cart-btn'>
            <div className="amount-toggle">
                <button onClick={()=>{Decrement()}}>
                    <FaMinus />
                </button>

                <div className='quantity-style'>{quantity}</div>

                <button onClick={()=>{Increment()}}>
                    <FaPlus />
                </button>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .cart-btn{
        .amount-toggle{
            display: flex;
            button{
                border: none;
                background-color: ${({theme})=> theme.colors.mainBg};
                color: ${({theme})=> theme.colors.lowBlack};
                &:hover{
                    color: ${({theme})=> theme.colors.black};
                }
            }
            div{
                margin: 0 0.8rem;
                margin-top: 0.3rem;
            }
        }
    }

`
export default CartAmountToggle