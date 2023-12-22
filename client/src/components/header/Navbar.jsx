import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { getUserApiCall } from '../../store/async-thunk-helper/asyncThunkHelper2'
import GetCookie from '../../hooks/getCookie'
import {useDispatch, useSelector} from 'react-redux'
import RemoveCookie from '../../hooks/removeCookie';
import { logOutFunc } from '../../store/slices/importantSlice';





const Navbar = () => {
    // using useDispatch
    const dispatch = useDispatch();

    // using useSelector
    const main_importants_data = useSelector((state)=>{
        return state.importants;
    });
    const { isLoading, user } = main_importants_data;
    // console.log(main_importants_data);
    
    // using useEffect
    useEffect(() => {
        if(GetCookie("paul-store-token")){
            dispatch(getUserApiCall());
        }
    }, [GetCookie("paul-store-token")]);
    
    // ON CLICK LOG OUT FUNCTION
    const onClickLogoutFunc = ()=>{
        dispatch(logOutFunc());
        RemoveCookie("paul-store-token");
    }
    
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
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/contact">Contact</NavLink>
                </li>  


                <li className="nav-item">
                <NavLink
                className="nav-link nav-link-hover" aria-current="page" to="/cart"><FaShoppingCart className='iconStyle'/></NavLink>
                </li>   

                <li className="nav-item">
                <NavLink className="nav-link" id='user' aria-current="page" to="/" style={{marginRight: "-0.5rem"}}>
                    {isLoading ? "..loading " :user && user.email? user.email: <FaRegUserCircle className='iconStyle'/>}
                </NavLink>
                </li>    


                {/* LOGOUT AND SIGNUP AND LOGIN📌 */}
                {user && user.length === 0 ? <>
                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/login">LogIn</NavLink>
                </li> 

                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/signup">SignUp</NavLink>
                </li>  
                </>:
                <button className="btn btn-sm btn-danger ms-2" onClick={onClickLogoutFunc}>LogOut</button>
                } 
                {/* 📌*/}           
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
    
    #user{
        text-transform: lowercase;
        font-family: ${({theme})=>theme.fonts.font2};
    }
`
export default Navbar