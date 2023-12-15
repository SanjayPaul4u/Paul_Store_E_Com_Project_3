import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'



const del = () => {
  return (
    <Wrapper>
        <h1>del component</h1>
        <Button className='btn'>CLick Here</Button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    background-color: ${({theme})=> theme.colors.bgColor};
`
export default del