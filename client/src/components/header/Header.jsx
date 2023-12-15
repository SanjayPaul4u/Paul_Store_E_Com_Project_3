import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'



const Header = () => {
  return (
    <Wrapper className='fixed-top'>
        <div  className='container'>
         <Navbar/>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.header`
    background-color: ${({theme})=> theme.colors.black};
`

export default Header