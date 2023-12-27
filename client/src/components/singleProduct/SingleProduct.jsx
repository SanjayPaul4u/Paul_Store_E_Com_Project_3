import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import SingleImage from './SingleImage'
import SingleData from './SingleData'
import { fetchSingleProduct } from '../../store/async-thunk-helper/asyncThunkHelper'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../Spinner'



const SingleProduct = () => {
  const {id}  = useParams();
  const dispatch = useDispatch();

  // Use Effect 📌
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleProduct({id}));
  }, []);
 
  // Use Use Selector 📌
  const main_products_data = useSelector((state)=>{
    return state.products;
  });
  const {singleProductData, isLoading} = main_products_data;


  return (
    <Wrapper>
      {isLoading && <div className='mt-4'><Spinner/></div>}
      {!isLoading && <>
      <div className="header">
        <div className='container header-div'>
          <h6>Product Id: <strong>{id}</strong></h6>          
        </div>
      </div>
      <div className='single-main-product'>
        <div className='container'>       
        <div className="row single-product-body">
          <div className="img-row col-12 col-md-6 col-xl-6">
            <SingleImage singleProductData={singleProductData}/>
          </div>
          <div className="data-row col-12 col-md-6 col-xl-6">
            <SingleData singleProductData={singleProductData}/>
          </div>
        </div>
        </div>
      </div>
      </>}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    min-height: 100vh;
    max-height: auto;
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
      /* height: 100%; */
      padding: 1.5rem;
      .container{
        padding: 0 1.5rem;
      }
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

    @media (max-width: 380px) {
      .single-main-product{
        padding: 0;
      }
      .header .header-div{
        h6{
          font-size: 0.8rem;
        }
      }
  }
`
export default SingleProduct