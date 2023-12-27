import React from 'react'
import styled from 'styled-components'
import FilterRow from './FilterRow'
import ProductRow from './ProductRow'




const ProductPageBody = () => {
  return (
    <Wrapper>
        <div className='product-body-content container'>
            <div className="row">
                <FilterRow/>
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

    @media (max-width: 767px) {
        .filter-row-1{
            display: none;
        }
    }
    @media (max-width: 450px) {
        .product-body-content{
            padding: 0.3rem;
        }
    }
    
`
export default ProductPageBody;