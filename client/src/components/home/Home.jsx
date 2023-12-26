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
  }, []);
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

            <div className='col-0 col-md-3 col-xl-3 rows'></div>
            <div className='col-12 col-md-6 col-xl-6 rows banner-title'>
              <h1>Raw Material Seller<br /></h1>
              <h2>Of Bakery, Ice Creme and Cake Item</h2>
              <h4></h4>
            </div>
            <div className='col-0 col-md-3 col-xl-3 rows'></div>

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
      height: 70%;
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
            margin-top: 1rem;
            margin-bottom: -0.5rem;
          }
        }
    }
  }
  
  @media (max-width: 1390px){}
  @media (max-width: 1199px){
    .banner{
      .row{
        .rows-1{
          .ice-icon, .ice-creame-icon, .bread-icon{
            font-size: 9rem;
          }
          .ice-creame-icon{
            margin-top: -2rem;
          }
        }
        .rows-3{
            .cake-icon{
              font-size: 8rem;
            }
          }
        .banner-title{
          h1{
            font-size: 2rem;
          }
          h2{
            font-size: 1.7rem
          }
        }
      }
    }
  }
  @media (max-width: 1199px){
    padding: 0rem;
    padding-top: 6rem;
    .main-home-div{
      padding: 0rem;
    }
  }
  @media (max-width: 767px){
    .banner{
      .row{
        .banner-title{
          h1{
            font-size: 1.7rem;
          }
          h2{
            font-size: 1.5rem
          }
        }
      }
    }
  }
  @media (max-width: 450px){
    .banner{
      .row{
        .rows-1{
          .ice-icon, .ice-creame-icon, .bread-icon{
            font-size: 6rem;
          }
          .ice-creame-icon{
            margin-top: -2rem;
          }
        }
        .rows-3{
            .cake-icon{
              font-size: 6rem;
            }
          }
        .banner-title{
          h1{
            font-size: 1.5rem;
          }
          h2{
            font-size: 1.2rem
          }
        }
      }
    }
  }
`
export default Home