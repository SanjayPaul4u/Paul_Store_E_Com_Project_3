import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'



const Header = () => {
  return (
    <Wrapper>
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