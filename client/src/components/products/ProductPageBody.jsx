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
`
export default ProductPageBody;