import React from 'react'
import GridView from './GridView'
import styled from 'styled-components'
import ListView from './ListView'



const ProductRow = () => {
  return (
    <Wrapper className="product-row-2 col-10 col-md-9 col-xl-9">
      {/* <GridView/> */}
      <ListView/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({theme})=> theme.colors.mainBg};
`
export default ProductRow