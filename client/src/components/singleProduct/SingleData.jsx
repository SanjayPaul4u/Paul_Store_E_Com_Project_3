import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa6";
import PriceFormat from '../../helper/PriceFormat'
import {Button} from '../../styles/Button'


const SingleData = () => {
  return (
    <Wrapper>
        <p>Visit PualStore</p>
        <h3>Magic Powder</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor eligendi corrupti magnam est nobis perferendis quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, autem!</p>
        <p>Weight: 1 kg</p>
        <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <span>( 55 Reviews )</span></p>
        <p>
            MRP: <del><PriceFormat price={(999*100)*1.50}/></del>
        </p>
        <p>Buy Now: <PriceFormat price={999*100}/></p>
        <div>Color: </div>
        <div>Cart Amount Toggle</div>

        <Button style={{backgroundColor: "#00b973"}}>
            Add To Cart
        </Button>
        <p>Available: In Stock</p>
        <p>Id: kjasld46546adsf</p>
        <p>Brand: Tower</p>

        
    </Wrapper>
  )
}
const Wrapper = styled.div`
`
export default SingleData