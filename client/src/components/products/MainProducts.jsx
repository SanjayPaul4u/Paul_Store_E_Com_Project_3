import React from 'react'
import styled from 'styled-components'
import ProductPageHeader from './ProductPageHeader'
import ProductPageBody from './ProductPageBody'



const MainProducts = () => {
  return (
    <Wrapper className='main-product'>
        <ProductPageHeader/>
        <ProductPageBody/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh; 
  max-height: auto;
  padding-top: 4rem;
  
`
export default MainProducts