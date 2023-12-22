import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { SignupApiCall } from '../store/async-thunk-helper/asyncThunkHelper2'
import { setAlertFunc, removeAlertFunc } from '../store/slices/importantSlice'
import { useDispatch } from 'react-redux'
import GetCookie from '../hooks/getCookie'




const Signup = () => {
  // using "useNavigate"
  const navigate = useNavigate();

  // using "useDispatch"
  const dispatch = useDispatch();
  
  // using "useState"
  const [signUpData, setSignUpData] = useState({
    name : "", email: "", password: "", confirmPassword:"" 
  });
  const {name, email, password, confirmPassword} = signUpData;

  // onChange function
  const onChangeFunc = (event)=>{
    setSignUpData({...signUpData, [event.target.name] : event.target.value})
  }

  // signupSubmitFunc
  const signupSubmitFunc = async(e) =>{
    e.preventDefault();
    const a = await dispatch(SignupApiCall({signUpData}));

    if(a.payload.success){
      dispatch(setAlertFunc({type: "success", message: a.payload.message}));
      setSignUpData({name : "", email: "", password: "", confirmPassword:""});
      navigate(-1);
    }else{
      dispatch(setAlertFunc({type: "error", message: a.payload.message}));
    }

    setTimeout(() => {
      dispatch(removeAlertFunc());
    }, 3000);
  }

  // use Effect
  useEffect(() => {
    if(GetCookie("paul-store-token")){
      navigate(-1);
    }
  }, [])
  
  return (
    <Wrapper className='container' id='main-signup'>
        <div id="sub-signup-div" className='col-10 col-md-6 col-xl-4'>
          <div id='heading-div'>
            <h3>SignUp</h3>
            <p>Creat Account</p> 
          </div>
          <form onSubmit={signupSubmitFunc}>

            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name='name' minLength={3} maxLength={25} value={name} onChange={onChangeFunc}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={onChangeFunc}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' minLength={3} maxLength={20} value={password} onChange={onChangeFunc}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword1" name='confirmPassword'  minLength={3} maxLength={20} value={confirmPassword} onChange={onChangeFunc}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <div id='footer-div'>
              <p>Have you already account? <NavLink to="/login">LogIn</NavLink></p>
            </div>
        </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    min-height: 100vh;
    max-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

#sub-signup-div{
    margin-top: 10rem;
    margin-bottom: 2rem;
    font-family: 'Ubuntu', sans-serif;
    padding: 1rem;
    border: 0.1rem solid #f0e8e1;
    border-radius: 0.3rem;
    background-color: #f7f6f9;
}

#sub-signup-div #heading-div{
    background-color: ${({theme})=>theme.colors.green};
    margin: -1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    color: #fff;
    text-align: center;
}
#sub-signup-div #heading-div p{
    color: #e5e5e5;
    font-weight: 500;
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
}
#sub-signup-div #footer-div{
    font-size: 0.8rem;
    margin-bottom: -1rem;
    margin-top: 2rem;
}
#sub-signup-div #footer-div a{
    color: ${({theme})=>theme.colors.red};
    font-weight: 500;
    font-size: 0.9rem;
    font-family: 'Kanit', sans-serif;
}

#sub-signup-div form{
}
#sub-signup-div form .btn{
    border:none;
    background-color: ${({theme})=>theme.colors.green};
}
#sub-signup-div form .btn:hover{
    border:none;
    background-color: ${({theme})=>theme.colors.green};
}

@media only screen and (max-width: 360px) {
    #sub-signup-div #footer-div p {
        margin-top: -1.8rem;
    }
    #sub-signup-div form .form-label {
        margin-bottom: 0rem;
    }
}

`
export default Signup