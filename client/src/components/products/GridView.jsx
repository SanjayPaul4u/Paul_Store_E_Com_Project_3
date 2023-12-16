import React from 'react'
import OurProduct from './OurProduct'
import styled from 'styled-components'

const GridView = () => {
  return (
    <Wrapper className="row gird-view">
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
          <div className="row-products col-10 col-md-4 col-xl-4">
            <OurProduct/>
          </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-top: 0.5rem;
    .row-products{
        padding: 1.5rem;
        &:hover{
          /* background-color: red; */
            /* padding-left: 0;
            padding-right: 0; */
            padding: 0;
            transition: 0.5s;
        }
        a{
          text-decoration: none;
        }
        .card{
            border: none;
            .badge-div{
              padding: 1rem;
              width: 100%;
              display: flex;
              justify-content: end;
              .badge{
                padding: 0.5rem;
                background-color: ${({theme})=> theme.colors.green};
                opacity: 0.8;
              }
            }
            
            img{
                  /* height: 13rem; */
                }
            .card-body{
              /* background-color: red; */
                display: flex;
                justify-content: space-between;
                padding: 0.4rem 1rem;
                font-family: ${({theme})=> theme.fonts.font2};
                
                div{
                    p{
                    margin: 0;
                    color: ${({theme})=> theme.colors.mediumBlack};
                    }
                    h5{
                        margin: 0;
                        padding-top: 0.5rem;
                        color: ${({theme})=> theme.colors.black};
                    }
                }
                .rate-para{
                    color: ${({theme})=> theme.colors.mediumBlack};
                    .icon-style{
                        margin-top: -0.2rem;
                        color: #ffbb00;
                    }
                }
               
                
            }
        }
    }
`
export default GridView