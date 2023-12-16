import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import SingleImage from './SingleImage'
import SingleData from './SingleData'



const SingleProduct = () => {
  const {id}  = useParams();
  return (
    <Wrapper>
      <div className="header">
        <div className='container header-div'>
          <h6>Product Id: <strong>{id}</strong></h6>          
        </div>
      </div>

      <div className='single-main-product'>
        <div className="row single-product-body">
          <div className="img-row col-6 col-md-6 col-xl-6">
            <SingleImage/>
          </div>
          <div className="data-row col-6 col-md-6 col-xl-6">
            <SingleData/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height: 100vh;
    padding-top: 4rem;
    .header{
      color: ${({theme})=> theme.colors.lowBlack};
      .header-div{
        padding: 1.5rem;
        strong{
          color: ${({theme})=> theme.colors.mediumBlack};
        }
      }
    }

    .single-main-product{
      background-color: ${({theme})=> theme.colors.mainBg};
      height: 100%;
      padding: 1.5rem;
      
      .single-product-body{
        .img-row{
          /* padding: 0; */
          display: flex;
          justify-content: end;
        }
        .data-row{
        }
      }
    }
`
export default SingleProduct