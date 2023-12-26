import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BsCake } from "react-icons/bs";
import { IoIceCreamOutline } from "react-icons/io5";
import { CgIcecream } from "react-icons/cg";
import { LiaBreadSliceSolid } from "react-icons/lia";
import Services from './Services';
import Features from './Features';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <Wrapper className='container'>
        <div className="main-home-div">

          <div className="banner">
          <div className="row">
            <div className='col-4 col-md-4 col-xl-4 rows-1'>
             <CgIcecream className='ice-icon'/>
            </div>
            <div className='col-4 col-md-4 col-xl-4 rows-1'>
              <IoIceCreamOutline className='ice-creame-icon'/>
            </div>
            <div className='col-4 col-md-4 col-xl-4 rows-1'>
              <LiaBreadSliceSolid className='bread-icon'/>
            </div>

            <div className='col-3 col-md-3 col-xl-3 rows'></div>
            <div className='col-6 col-md-6 col-xl-6 rows banner-title'>
              <h1>Raw Material Seller<br /></h1>
              <h2>Of Bakery, Ice Creme and Cake Item</h2>
              <h4></h4>
            </div>
            <div className='col-3 col-md-3 col-xl-3 rows'></div>

            <div className='col-4 col-md-4 col-xl-4 rows-3'></div>
            <div className='col-4 col-md-4 col-xl-4 rows-3'>
              <BsCake className='cake-icon'/>
            </div>
            <div className='col-4 col-md-4 col-xl-4 rows-3'>
            </div>
          </div>
          </div>


          <Services/>
          <Features/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  max-height: auto;
  padding-top: 8rem;
  .main-home-div{
    padding: 0 0.7rem;
    .banner{
      overflow: hidden;
      background-color:#2c1608;
      height: 70vh;
      color: #fff;
      .banner-title{
        color: #fff;
        text-align: center;
        h1{
          font-family: ${({theme})=> theme.fonts.font2};
          font-weight: bolder;
          font-size: 3rem;
        }
        h2{
          font-family: ${({theme})=> theme.fonts.font2};
        }
       
      }
      .rows-1{
        text-align: center;
        .ice-icon{
          font-size: 12rem;
            opacity: 0.1;
        }
        .ice-creame-icon{
            font-size: 15rem;
            opacity: 0.1;
            margin-top: -5rem;
        }
        .bread-icon{
          font-size: 12rem;
            opacity: 0.1;
        }
      }
      .rows-3{
          display: flex;
          justify-content: center;
          align-items: flex-end;
          .cake-icon{
            font-size: 10rem;
            opacity: 0.1;
            margin-top: 6rem;
          }
        }
    }
  }
  
`
export default Home