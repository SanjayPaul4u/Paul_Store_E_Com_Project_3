import React from 'react'
import linkedinImg from '/linkedin.png'
import whatsappImg from '/whatsapp.png'
import facebookImg from '/facebook.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Wrapper className='' id='main-footer'>

      {/* MAIN FOOTER - CONTENT*/}
      <div className='container' id='main-footer-content'>
        <div className="row">

          <div className="col-6 col-md-3 col-xl-3 main-footer-topic">
              <ul>
                <h4>Paul Store</h4>
                <li>E-commerce TOY Project</li>
                <li>FullStack E-commerce Web App</li>
                <li>Implement MERN Technology</li>
              </ul>
          </div>

          <div className="col-6 col-md-3 col-xl-3 main-footer-topic">
              <ul>
                <h4> Pages </h4>
                <li> <NavLink to="/home"> Home </NavLink> </li>
                <li> <NavLink to="/contact"> Contact </NavLink> </li>
                <li> <NavLink to="/products"> Product </NavLink> </li>
                <li> <NavLink to="/cart"> Your Cart </NavLink> </li>
                <li> <NavLink to="/login"> LogIn </NavLink> </li>
                <li> <NavLink to="/signup"> SignUp </NavLink> </li>
              </ul>
          </div>

          <div className="col-6 col-md-3 col-xl-3 main-footer-topic">
              <ul>
                <h4>Contact</h4>
                <li><i className="fa-solid fa-phone"></i> 9064784593</li>
                <li><i className="fa-solid fa-envelope"></i> sanjoypaul655@gmail.com</li>
                <li><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/sanjoy-paul-001605239" rel="noreferrer" target='_blank'>LinkedIn</a> </li>
              </ul>
          </div>

          <div className="col-6 col-md-3 col-xl-3 main-footer-topic">
              <ul>
                <h4>Atribute</h4>
                <li>Flaticon</li>
                <li>FontAwesome</li>
                <li>w3 school</li>
                <li>ChatGTP 3.5</li>
                <li>Nicepage</li>
                <li>Pixabay</li>
              </ul>
          </div>


        </div>
      </div>

      {/* SUB MAIN FOOOTER */}
      <div id='sub-main-footer'>
        <div className='me-4'>
        <img src={facebookImg} alt="imgError" />
          {/* <a className='mx-2' href="/"><img src={facebookImg} alt="imgError" /></a> */}

          <a className='mx-2' href="https://www.linkedin.com/in/sanjoy-paul-001605239" rel="noreferrer" target='_blank'><img src={linkedinImg} alt="imgError" /></a>

          <a className='mx-2' href="https://wa.me/9064784593" rel="noreferrer" target='_blank'><img src={whatsappImg} alt="imgError" /></a>
        </div>
        <div>
            <p className='mt-3'>© 2024 Paul Store E-Commerce || Toy Project - All Rights Reserved</p>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding-top: 2rem;
    background-color: #3e3e3e;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
#main-footer-content .main-footer-topic h4{
    font-family: 'Kanit', sans-serif;
    color: #fff;

}
#main-footer-content .main-footer-topic ul{
    /* background-color: red; */
}
#main-footer-content .main-footer-topic ul li{
    list-style: none;
    color: #d6d5d5;
}
#main-footer-content .main-footer-topic ul li a{
    font-family: 'Ubuntu', sans-serif;
   text-decoration: none;
}
/* --------------------------------- */
#sub-main-footer{
    padding-top: 0.5rem;
    font-family: 'Ubuntu', sans-serif;
    background-color: #535353;
    height: 30%;
    margin: 0;
    color: white;
    margin-bottom: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
#sub-main-footer img{
    height: 1.5rem;
}

@media only screen and (max-width: 721px) {
    #main-footer-content .main-footer-topic ul{
        font-size: 0.9rem;
    }
    #sub-main-footer{
        flex-direction: column;
    }
    
}
@media only screen and (max-width: 490px) {
    #main-footer-content .row{
        margin-right: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    #main-footer-content .row .main-footer-topic{
        width: 100%;
        text-align: center;
        margin-top: 2.5rem;
    }
    #sub-main-footer{
        font-size: 0.8rem;
        text-align: center;
    }
    
}
`
export default Footer
