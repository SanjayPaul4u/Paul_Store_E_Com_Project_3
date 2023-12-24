import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {Button} from '../../styles/Button'
import styled from 'styled-components';
import CartAmountToggle from './CartAmountToggle';
import {useNavigate} from 'react-router-dom'
import { FaCheck } from "react-icons/fa6";
import GetCookie from '../../hooks/getCookie';
import { addToCartApiCall } from '../../store/async-thunk-helper/cartThunkHelper';
import {useDispatch} from 'react-redux'
import { removeAlertFunc, setAlertFunc } from '../../store/slices/importantSlice';




const AddToCart = ({singleProductData}) => {
  const {colors, product_id, name, price, stock, image, weight} = singleProductData;
  const [Quantity, setQuantity] = useState(1);
  const [Color, setColor] = useState(""); // check useEffect
  const [cartData, setCartData] = useState({
    product_id: "",
    name: "",
    color: "",
    weight: "",
    quantity: 0, 
    price: 0,
    max_quantity: 0,
    image: []
  })

  // using useDispatch
  const dispatch = useDispatch();

  // using useNavigate
  const navigate = useNavigate();
  
  // IncrementFunc
  const IncrementFunc = ()=>{
    Quantity < stock ?  setQuantity(Quantity + 1): Quantity;
    
  }
  // DecrementFunc
  const DecrementFunc = ()=>{
    Quantity > 1 ?  setQuantity(Quantity - 1): Quantity;
  }
  // onclickColor 
  const onclickColor = (color) =>{
    setColor(color);
  }
  // useEffect 1
  useEffect(() => {
    if(colors && colors.length>0){
      setColor(colors[0]);
    }else{
      setColor("");
    }
  }, [colors])
  
   // useEffect 2
  useEffect(() => {
    if(image){
    setCartData({
      product_id: product_id,
      name: name,
      color: Color,
      weight: weight,
      quantity: Quantity, 
      price: price,
      max_quantity: stock,
      fileName :image[0].fileName,
      filePath: image[0].filePath,
      fileSize: image[0].fileSize,
      fileType: image[0].fileType
    })}
  }, [singleProductData, Quantity, Color])
  
  // addToCartFunc 📌
  const addToCartFunc = async ()=>{
    if(GetCookie("paul-store-token")){
      const result = await dispatch(addToCartApiCall({cartData}))
      if(result.payload.success){
        navigate("/cart");
        dispatch(setAlertFunc({type: "success", message :result.payload.message}));
      }else{
        dispatch(setAlertFunc({type: "error", message :result.payload.message}));
      }
      
      setTimeout(() => {
        dispatch(removeAlertFunc());

      }, 3000);

    }else{
      navigate("/login");
    }
  }
 
  // console.log(Color);
  return (
    <Wrapper>
        {colors && colors.length > 0 && <div className="color-choose mt-4">
          <span>Colors: </span>
            <div>
              {colors.map((element, index)=>{
                return <button key={index}
                 onClick={()=>{onclickColor(element)}}
                 style={{backgroundColor: `#${element}`}}
                 className={`btn-color-item ${Color===element && "active"}`}
                 >
                  {Color===element && <FaCheck className='iconStyle'/>}
                 </button>
              })}
            </div>
        </div>}

        <CartAmountToggle 
        quantity ={Quantity} 
        Increment = {IncrementFunc} 
        Decrement = {DecrementFunc}
        />

        <Button style={{backgroundColor: "#00b973"}} onClick={addToCartFunc}>
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
        border: 0.1rem solid #7a7a7a;
        outline: none;
        color: ${({ theme }) => theme.colors.lowBlack};
        font-weight: 500;
        opacity: 0.4;
        .iconStyle{
          margin-top: -0.6rem;
        }
      }
      .active {
        opacity: 1;
        font-weight: 500;
      }
    }
  }
`
export default AddToCart