import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from '../../store/async-thunk-helper/asyncThunkHelper'
import OurProduct from '../products/OurProduct'
import {Button} from '../../styles/Button'
import { NavLink } from 'react-router-dom'
import Spinner from '../Spinner'




const Features = () => {
  // USING DISPATCH
  const dispatch = useDispatch();

  // USING useSelector
  const main_products_data = useSelector((state)=>{
    return state.products;
  });
  const {isLoading, contentSize, page, productsData  } = main_products_data;

  // USING useEffect
  useEffect(() => {
    dispatch(fetchProducts({contentSize, page}));
    
  }, []);
  

  return (
    <Wrapper>
        <h3>Features Product</h3>
        {isLoading && <Spinner/>}
        <div className="row">
            {
              productsData.map((element, index) =>{
                if(index<4){
                return(<div
                        key={element._id}
                        className="raw-item col-6 col-md-3 col-xl-3">
                          <OurProduct  ProductData={element}/>
                        </div> 
                )}
              })

            }
        </div>

        <div className="our-btn">
          <NavLink to="/products" >
            <Button> Go Main Product Page</Button>
          </NavLink>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 2.5rem;
padding: 0.5rem;
background-color: ${({ theme }) => theme.colors.mainBg};
  h3{
    background-color: ${({ theme }) => theme.colors.mainBg};
    font-family: ${({ theme }) => theme.fonts.font2};
    color: ${({ theme }) => theme.colors.mediumBlack};
    border-radius: 0.5rem;
  }
  .our-btn{
    /* text-align: end; */
    margin-bottom: 2rem;
    Button{
      background-color: #fff;
      color: ${({ theme }) => theme.colors.green};
      border: 0.15rem solid ${({ theme }) => theme.colors.green};
      &:hover{
        background-color: ${({ theme }) => theme.colors.green};
        color: #fff;
      }
    }
  }
  .raw-item{
    padding: 1rem 1rem;
  }
  a {
      text-decoration: none;
    }
    .card {
      border: none;
      .badge-div {
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: end;
        .badge {
          padding: 0.5rem;
          background-color: ${({ theme }) => theme.colors.green};
          opacity: 0.8;
        }
      }

      img {
        height: 18rem;
      }
      .card-body {
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 1rem;
        font-family: ${({ theme }) => theme.fonts.font2};

        div {
          p {
            margin: 0;
            color: ${({ theme }) => theme.colors.mediumBlack};
          }
          h5 {
            margin: 0;
            padding-top: 0.5rem;
            color: ${({ theme }) => theme.colors.black};
          }
        }
        .rate-para {
          color: ${({ theme }) => theme.colors.mediumBlack};
          .icon-style {
            margin-top: -0.2rem;
            color: #ffbb00;
          }
        }
      }
    }

    @media (max-width: 1199px) {
      .row .raw-item{
        padding: 1rem 0.5rem;
      }
      a .card img{
        height: 12rem;
      }
    }
    @media (max-width: 991px) {
      .row .raw-item{
        padding: 1rem 0.5rem;
      }
    }
    @media (max-width: 767px){
      .row .raw-item{
        padding: 1rem 1rem;
      }
    } 
    @media (max-width: 450px){
      margin-top: 0;
      h3{
        font-size: 1.2rem;
      }
      a .card .card-body{
        padding: 0.4rem 0.4rem;
      }
      a .card .card-body div{
        h5{
          font-size: 1rem;
        }
        p{
          font-size: 0.7rem;
        }

      }
      a .card .card-body .rate-para{
        font-size: 0.7rem;
      }
      a .card img{
        height: 10rem;
      }
      .row .raw-item{
        padding: 0.4rem 0.4rem;
      }
    } 
`
export default Features