import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SlLocationPin } from "react-icons/sl";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";





const MainContact = () => {
    useEffect(() => {
      window.scrollTo(0 ,0);
    }, [])
    
  return (
    <Wrapper>
        <div className="container main-contact">
            <div className="row">

                <div className="first-row col-md-6 col-xl-6">
                    <h4>Address</h4>
                    <div className='address-div'>
                        <SlLocationPin className='iconStyle'/>
                        <p>West Bengal, Alipurduar, Barobish</p>
                    </div>
                    <h4>Online</h4>
                    <div className='online-div'>
                        <div>
                            <CiMobile3 className='iconStyle'/>
                            <p>+91 9064784593</p>
                        </div>
                        <div>
                            <MdOutlineEmail className='iconStyle'/>
                            <p>sanjoypaul655@gmail.com</p>
                        </div>
                    </div>
                    
                </div>

                <div className="second-row col-md-6 col-xl-6">
                    <h4>On a Map</h4>
                    <div className='our-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d817.3591808575716!2d89.80386998967373!3d26.46437519595365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI3JzUxLjgiTiA4OcKwNDgnMTguMSJF!5e1!3m2!1sen!2sin!4v1703132352757!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    min-height: 100vh;
    max-height: auto;
    padding-top: 4rem;
    font-family: ${({theme})=> theme.fonts.font2};
    .main-contact{
        padding: 1.2rem;
        
        .row{
            .first-row{
                h4{
                    margin-top: 2rem;
                }
                .iconStyle{
                    margin-top: -0.3rem;
                    font-size: 2.5rem;
                }
                .address-div{
                    display: flex;
                    justify-content:flex-start;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    border: 0.15rem solid ${({theme})=>theme.colors.mediumBlack};
                }
                .online-div{
                    padding: 1.5rem;
                    border: 0.15rem solid ${({theme})=>theme.colors.mediumBlack};
                    border-radius: 1rem;
                    div{
                        margin-top: 1rem;
                        display: flex;
                        justify-content:flex-start;
                        
                    }
                }
           } 
            .second-row{
                h4{
                    margin-top: 2rem;
                }
                .our-map{
                    height: 100%;
                    background-color: ${({theme})=>theme.colors.mainBg};
                    iframe{
                        height: 100%; 
                        width: 100%;
                    }
                }
            }
        }
    }
`
export default MainContact