import React from 'react'
import styled from 'styled-components'
import Img from '/img3.png'


const SingleImage = () => {
  return (
    <Wrapper className='col-6 col-md-6 col-xl-6'>
        <div className="card position-relative">
             {/* badge */}
             <div className='badge-div position-absolute'>
                <span className=" badge">
                    IceCreame bakery
                </span>          
            </div> 
            <img src={Img} className="main-image card-img-top" alt="single-main-img-err"/>
        </div>

        <div className="other-images row">
            <div className="col-3 col-md-3 col-xl-3">
                <img src={Img} className="other-image card-img-top" alt="single-main-img-err"/>
            </div>
            <div className="col-3 col-md-3 col-xl-3">
                <img src={Img} className="other-image card-img-top" alt="single-main-img-err"/>
            </div>
            <div className="col-3 col-md-3 col-xl-3">
                <img src={Img} className="other-image card-img-top" alt="single-main-img-err"/>
            </div>
            <div className="col-3 col-md-3 col-xl-3">
                <img src={Img} className="other-image card-img-top" alt="single-main-img-err"/>
            </div>
        </div>        
    </Wrapper>
  )
}
const Wrapper = styled.div`
    padding: 0;
    .card{
        border: none;
        border-radius: 0rem;
        img{
            box-shadow: 0.4rem 0.2rem 3rem #bcbcbc;            
        }
        .badge-div{
            width: 100%;
            padding: 0.4rem;
            .badge{
                padding: 0.5rem 1rem;
                background-color: ${({theme})=>theme.colors.green};
                font-size: 1rem;
            }
        }
        
    }
    .other-images{
        padding-top: 1rem;
        .other-image{
            box-shadow: 0.1rem 0.2rem 2rem #bcbcbc;
        }
                
    }
`
export default SingleImage