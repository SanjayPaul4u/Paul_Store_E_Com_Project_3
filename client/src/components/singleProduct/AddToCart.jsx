import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {Button} from '../../styles/Button'
import styled from 'styled-components';
import CartAmountToggle from './CartAmountToggle';



const AddToCart = () => {
  const [Quantity, setQuantity] = useState(1);
  // IncrementFunc
  const IncrementFunc = ()=>{
    Quantity < 10 ?  setQuantity(Quantity + 1): Quantity;
    
  }
  // DecrementFunc
  const DecrementFunc = ()=>{
    Quantity > 1 ?  setQuantity(Quantity - 1): Quantity;
  }
  console.log(Quantity);
  return (
    <Wrapper>
        <div className="color-choose mt-4">
          <span>Colors: </span>
            <div>
              <button className="btn-color-item"></button>
              <button className="btn-color-item"></button>
              <button className="btn-color-item active"></button>
              <button className="btn-color-item"></button>
            </div>
        </div>

        <CartAmountToggle 
        quantity ={Quantity} 
        Increment = {IncrementFunc} 
        Decrement = {DecrementFunc}
        />

        <Button style={{backgroundColor: "#00b973"}}>
            <FaShoppingCart />  Add To Cart
        </Button>
    </Wrapper>
    
  )
}
const Wrapper = styled.div`
    .color-choose {
    h6 {
      background-color: ${({theme})=>theme.colors.mainBg};
    }
    div {
      display: inline-block;
      
      .btn-color-item {
        background-color: #dd2fc9;
        margin-right: 0.6rem;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.colors.lowBlack};
        font-weight: 500;
        opacity: 0.6;
      }
      .active {
        opacity: 1;
        font-weight: 500;
      }
    }
  }
`
export default AddToCart