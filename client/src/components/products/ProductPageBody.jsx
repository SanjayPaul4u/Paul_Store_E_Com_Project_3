import React from 'react'
import styled from 'styled-components'
import FilterRow from './FilterRow'
import ProductRow from './ProductRow'




const ProductPageBody = () => {
  return (
    <Wrapper>
        <div className='product-body-content container' id='diplay-1'>
            <div className="row">
                <FilterRow/>
                <ProductRow/>
            </div>
        </div>
        <div className='product-body-content container' id='diplay-2'>
            <div className="row">
                <ProductRow/>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .product-body-content{
        padding: 1.5rem;
        padding-top: 0;
        height: 100%;
    }
    #diplay-2{
        display: none;
    }

    @media (max-width: 767px) {
        #diplay-1{
            display: none;
        }
        #diplay-2{
            display: block;
        }
    }
    @media (max-width: 450px) {
        .product-body-content{
            padding: 0.3rem;
        }
    }
    
`
export default ProductPageBody;