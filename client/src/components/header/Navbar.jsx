import React, { useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { getUserApiCall } from '../../store/async-thunk-helper/asyncThunkHelper2'
import GetCookie from '../../hooks/getCookie'
import {useDispatch, useSelector} from 'react-redux'
import RemoveCookie from '../../hooks/removeCookie';
import { setAlertFunc, removeAlertFunc } from '../../store/slices/importantSlice';
import { getfromCartApiCall } from '../../store/async-thunk-helper/cartThunkHelper';
import { LogOutFunc } from '../../store/actions';






const Navbar = () => {
    // USING USE-REF
    const collapse_ref = useRef();
    
    // USING USE-NAVIGATE
    const navigate = useNavigate();

    // 📌 USING USE-DISPATCH 
    const dispatch = useDispatch();

    // 📌 USING USE-SELECTOR
    const main_importants_data = useSelector((state)=>{
        return state.importants;
    });
    const main_cart_data = useSelector((state)=>{
        return state.cart;
    });
    const { isLoading, user } = main_importants_data;
    const { cartData } = main_cart_data;
    // console.log(main_importants_data);
    
    // 📌 USING USE-EFFECT
    useEffect(() => {
        if(GetCookie("paul-store-token")){
            dispatch(getUserApiCall());
            dispatch(getfromCartApiCall());
        }
    }, [GetCookie("paul-store-token")]);
    
    
    // 📌 ON CLICK LOG OUT FUNCTION
    const onClickLogoutFunc = ()=>{
        dispatch(LogOutFunc());
        RemoveCookie("paul-store-token");
        dispatch(setAlertFunc({type: "success", message: "Loged Out Successfully"}));
        collapse_ref.current.click();
        setTimeout(() => {
            dispatch(removeAlertFunc());
        }, 3000);
    }

    // onclick_navbar_collapse
    const onclick_navbar_collapse = ()=>{
        collapse_ref.current.click();
    }

  return (
    <Wrapper className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"> <span>PAUL</span> STORE</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ref={collapse_ref}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/home" onClick={onclick_navbar_collapse}>Home</NavLink>
                </li>   
                         
                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/products" onClick={onclick_navbar_collapse}>Products</NavLink>
                </li>   

                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/contact" onClick={onclick_navbar_collapse}>Contact</NavLink>
                </li>  


                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover position-relative" aria-current="page" to="/cart" onClick={onclick_navbar_collapse}>
                    <FaShoppingCart className='iconStyle'/>
                    <span className="mt-2 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{fontFamily:"sans-serif"}}
                    >
                        {GetCookie("paul-store-token")?cartData.length:0}
                    </span>
                </NavLink>
                </li>   

                <li className="nav-item">
                <NavLink className="nav-link mx-2" id='user' aria-current="page" to="/" onClick={onclick_navbar_collapse}>
                    {isLoading ? "..loading " :user && user.email? user.email: <FaRegUserCircle className='iconStyle'/>}
                </NavLink>
                </li>    


                {/* LOGOUT AND SIGNUP AND LOGIN📌 */}
                {user && user.length === 0 ? <>
                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/login" onClick={onclick_navbar_collapse}>LogIn</NavLink>
                </li> 

                <li className="nav-item">
                <NavLink className="nav-link nav-link-hover" aria-current="page" to="/signup" onClick={onclick_navbar_collapse}>SignUp</NavLink>
                </li>  
                </>:
                <button className="btn btn-sm btn-danger" onClick={onClickLogoutFunc}>LogOut</button>
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
    .navbar-nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    
        .nav-item{
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
    }
    #user{
        text-transform: lowercase;
        font-family: ${({theme})=>theme.fonts.font2};
    }

    @media (max-width:991px) {
        .navbar-nav .nav-item .nav-link{
            padding: 0.5rem;
        }
    }
    @media (max-width:450px) {
        .container-fluid .navbar-brand{
            font-size: 1.2rem;
            span{
                font-size: 1.2rem;
            }
        }
    }
`
export default Navbar