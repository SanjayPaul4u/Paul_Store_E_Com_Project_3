import React, { useRef } from 'react'
import Img1 from '/img2.png'
import styled from 'styled-components'
import PriceFormat from '../../helper/PriceFormat'
import { RiDeleteBack2Fill } from "react-icons/ri";
import CartAmountToggle from '../singleProduct/CartAmountToggle'
import { incrementQuantity, decrementQuantity } from '../../store/slices/CartSlice';
import {useDispatch} from 'react-redux'
import { updateQuantityApiCall } from '../../store/async-thunk-helper/cartThunkHelper';






const UserCartData = ({data, deleteCartProductFunc}) => {
    const {name, color, weight, quantity, price, max_quantity, image, _id} = data;
    // using useRef
    const saveRef = useRef();

    // using useDispatch
    const dispatch = useDispatch();

    // INCREMENT, DECREMENT FUNCTION 📌
    const IncrementFunc = async ()=>{
        const result  = await dispatch(incrementQuantity({_id}));
        if(result.payload._id){
            saveRef.current.click();
        }
    }
    const DecrementFunc = async()=>{
        const result  = await dispatch(decrementQuantity({_id}));
        if(result.payload._id){
            saveRef.current.click();
        }
    }
    
    const onClickSaveFunc = ()=>{
        dispatch(updateQuantityApiCall({_id, quantity}));
    }
  return (
    <Wrapper className="user-cart-item row">
        <button className="btn btn-sm btn-danger d-none" ref={saveRef} onClick={onClickSaveFunc}>save</button>

        <div className='product-data col-md-5 col-xl-5'>
            <div className='product-img'>
                <img src={`data:${image.fileType};base64,${image.imagebase64}`} alt="img-error" className='card-img-top'/>
            </div>

            <div className="product-details">
                <h5>{name}</h5>
                {color!=="" && <p>color: <button className='clrBtn' style={{color:`#${color}`, backgroundColor:`#${color}`}}>1</button></p>}
                <p>{weight}</p>
            </div>
        </div>

        <div className="product-price col-md-2 col-xl-2">
            <p><PriceFormat price={price*100}/></p>
        </div>

        <div className="product-quantity col-md-2 col-xl-2">
             {/* quantity, Increment, Decrement */}
            {/* <p>{quantity}</p> */}
            <CartAmountToggle 
            quantity={quantity}
            Increment = {IncrementFunc}
            Decrement = {DecrementFunc}
            />
        </div>

        <div className="product-total-price col-md-2 col-xl-2">
            <p><PriceFormat price={(price*quantity)*100}/></p>
        </div>

        <div className="delete-item col-md-1 col-xl-1">
            <RiDeleteBack2Fill className='iconStyle' onClick={()=>{deleteCartProductFunc(_id)}}/>
        </div>
  </Wrapper>
  )
}

const Wrapper = styled.div`
background-color: #fff;
border-bottom:0.1rem solid ${({theme})=>theme.colors.productBg};
padding: 0.8rem 0.3rem;
font-family: ${({theme})=>theme.fonts.font2};
font-size: 0.9rem;

    .product-data{
        display: flex;
        align-items: center;
        .product-img{
            img{
                height: 3rem;
            }
        }
        .product-details{
            margin-left: 1rem;
            h5{
                color:  ${({theme})=>theme.colors.mediumBlack};
            }
            p{  
                font-size: 1rem;
                text-transform: capitalize;
                margin: 0;
                color:  ${({theme})=>theme.colors.green};
                .clrBtn{
                    width: 1.2rem;
                    font-size: 0.7rem;
                    border-radius: 50%;
                    border: 0.1rem solid #7a7a7a;
                }
            }
            
        }
    }

    .product-price{
        display: flex;
        align-items: center;
        color:  ${({theme})=>theme.colors.lowBlack};
    } 
    .product-quantity{
        display: flex;
        align-items: center;
        color:  ${({theme})=>theme.colors.lowBlack};
    }
    .product-total-price{
        display: flex;
        align-items: center;
        color:  ${({theme})=>theme.colors.black};
    }
    .delete-item{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0;
        .iconStyle{
            font-size: 1.5rem;
            color:  ${({theme})=>theme.colors.red};
            cursor: pointer;
        }
    }
`
export default UserCartData