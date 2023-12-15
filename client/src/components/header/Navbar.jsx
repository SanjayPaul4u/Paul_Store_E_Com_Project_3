import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaRegUserCircle } from "react-icons/fa";




const Navbar = () => {
    
  return (
    <Wrapper className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"> <span>PAUL</span> STORE</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/home">Home</NavLink>
                </li>   
                            
                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/products">Products</NavLink>
                </li>   

                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" style={{marginRight: "-0.5rem"}}>
                    <FaRegUserCircle className='iconStyle'/>
                </NavLink>
                </li>               
            </ul>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    background-color: ${({theme})=> theme.colors.black};

    .container-fluid .navbar-brand{
        color: #fff;
        font-family: ${({theme})=> theme.fonts.brandFont};
        font-size: 1.6rem;
    }
    .container-fluid .navbar-brand span{
        color: #cacaca;
        font-size: 1.8rem;
    }
    .navbar-nav .nav-item{
        .nav-link{
            color: ${({theme})=> theme.colors.lowWhite};
            text-transform: uppercase;
            font-size: 0.8rem;
            font-family: ${({theme})=> theme.fonts.font1};

            .iconStyle{
                color: ${({theme})=> theme.colors.white};
                font-size: 1.2rem;
            }
        }
        .nav-link-hover:hover{
            color: ${({theme})=> theme.colors.white};
            
        }
        .active{ // nav-item automatic set active 
            background-color: ${({theme})=> theme.colors.lowBlack};
            color: #fff;
        }
    }
    
    
`
export default Navbar