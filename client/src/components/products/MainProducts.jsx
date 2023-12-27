import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ProductPageHeader from './ProductPageHeader'
import ProductPageBody from './ProductPageBody'
import FilterOfcampas from './FilterOfcampas'



const MainProducts = () => {
  // USING USE-REF
  const ofcampas_ref = useRef();

  // USING USE-EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <Wrapper className='main-product'>
        <FilterOfcampas ofcampas_ref={ofcampas_ref}/>

        <ProductPageHeader ofcampas_ref={ofcampas_ref}/>
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