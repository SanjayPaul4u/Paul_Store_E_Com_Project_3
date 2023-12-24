import React, { useEffect } from 'react'
import styled from 'styled-components'
import UserCartData from './UserCartData'
import PriceFormat from '../../helper/PriceFormat'
import {Button} from '../../styles/Button'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getfromCartApiCall, deleteFromCartApiCall } from '../../store/async-thunk-helper/cartThunkHelper'
import GetCookie from '../../hooks/getCookie'
import { removeAlertFunc, setAlertFunc } from '../../store/slices/importantSlice';




const MainCart = () => {
  // using useDispatch
  const dispatch = useDispatch();

  // using useSelector
  const main_cart_data = useSelector((state)=>{
    return state.cart;
  })
  const { isLoading, cartData } = main_cart_data;

  // total price 📌📌📌
  const updatePriceValue = cartData.reduce((initialVal, curEle)=>{
    initialVal = initialVal +(curEle.price * curEle.quantity);

    return initialVal;
  },0);

   // delete cart product
   const deleteCartProductFunc = async(id)=>{
    const result = await dispatch(deleteFromCartApiCall({id}));
    if(result.payload.success){
      dispatch(getfromCartApiCall());
      dispatch(setAlertFunc({type: "success", message :result.payload.message}));
    }else{
      dispatch(setAlertFunc({type: "error", message :result.payload.message}));
    }
    setTimeout(() => {
      dispatch(removeAlertFunc());
    }, 3000);
  }
  // onClickOrderFunc
  const onClickOrderFunc = () =>{
    dispatch(setAlertFunc({type: "success", message :"Working on Order Functionality"}));
    setTimeout(() => {
      dispatch(removeAlertFunc());
    }, 3000);
  }

  // using useEffect
  useEffect(() => {
    if(GetCookie("paul-store-token")){
      dispatch(getfromCartApiCall());
    }
  }, []);

 
  return (
    <Wrapper>
      {isLoading && <h4 className='text-center mt-4'>...Loading</h4>}
      {!isLoading && cartData.length ===0 &&  <h2 className='text-center mt-4'>Your Cart is Empty</h2>}
      
      {cartData.length !==0 && <div className="container main-cart">
        <div className="row sub-main-cart">
          <h4 className='cart-heading-text'>Your Shopping Cart</h4>
          <div className='item-rows col-10 col-md-9 col-xl-9'>
            <div className="row">
              <p className='col-md-5 col-xl-5'>Item</p>
              <p className='col-md-2 col-xl-2' >Price</p>
              <p className='col-md-2 col-xl-2'>Quantity</p>
              <p className='col-md-2 col-xl-2'>Total</p>
              <p className='col-md-1 col-xl-1'>Delete</p>
            </div>
          </div>

          {/* CART DATA DIV */}
          <div className="cart-data-div col-10 col-md-9 col-xl-9">
            {cartData.length > 0 && cartData.map((element)=>{
              return <UserCartData key={element._id} data = {element} deleteCartProductFunc={deleteCartProductFunc}/>
            })}
            <div className="conti-shopping-btn">
                <NavLink to="/products">
                  <Button>Continue Shopping</Button>
                </NavLink>
            </div>
          </div>

          {/* ORDER DIV */}
          <div className="order-div col-10 col-md-3 col-xl-3">
            <div className="order-data">

              <div>
                <h6>Sub Total</h6>
                <p><PriceFormat price={updatePriceValue*100}/></p>
              </div>

              <div>
                <h6>Shipping Fee (3%)</h6>
                <p><PriceFormat price={(updatePriceValue*0.03)*100}/></p> 
              </div>

              <div className='order-total'>
                <h6>Order Total</h6>
                <p><PriceFormat price={((updatePriceValue*0.03) + updatePriceValue)*100}/></p> 
              </div>


              <div className="order-btn">
                <Button onClick={onClickOrderFunc}>Order Now</Button>
              </div>

            </div>
          </div>


        </div>
      </div>}
    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 100vh;
padding-top: 4rem;
background-color: ${({theme})=> theme.colors.mainBg};

  .main-cart{
    min-height: 100%;
    max-height: auto;
    padding: 1rem 2rem;
    .sub-main-cart{
      .cart-heading-text{
        font-weight: 700;
        letter-spacing: 0.1rem;
        padding: 1rem 0;
        color: ${({theme})=> theme.colors.mediumBlack};
      }
      .item-rows{
        color:  ${({theme})=>theme.colors.lowBlack};
        font-weight: 600;
        letter-spacing: 0.15rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        border-bottom:0.25rem solid ${({theme})=> theme.colors.productBg};
      }

      .cart-data-div{
        .conti-shopping-btn{
          display: flex;
          justify-content: flex-end;
          text-decoration: none;
          Button{
            background-color: ${({theme})=> theme.colors.green};
          }
        }
        
      }

      .order-div {
        padding: 0 1rem;
        .order-data{
          background-color: #fff;
          div{
            padding: 0.5rem;
            display: flex;
            justify-content: space-between;
          }
          .order-total{
            border-top: 0.15rem solid ${({theme})=> theme.colors.productBg};
            color: solid ${({theme})=> theme.colors.black};
            font-weight: 700;
          }
          .order-btn{
            display: flex;
            justify-content: flex-end;
            Button{
              background-color: ${({theme})=> theme.colors.green};
            }
          }
        }
      }
    }
  }
`
export default MainCart