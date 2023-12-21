import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


const Login = () => {
  return (
    <Wrapper className='container' id='main-login'>
        <div id="sub-login-div" className='col-10 col-md-6 col-xl-4'>
          <div id='heading-div'>
            <h3>Login</h3>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' minLength={2} maxLength={25}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' minLength={2} maxLength={25}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

            <div id='footer-div'>
              <p>Don't have account? <NavLink to="/signup">SignUp</NavLink></p>
            </div>
        </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    min-height: 100vh;
    max-height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

#sub-login-div{
    margin-top: 7rem;
    font-family: 'Ubuntu', sans-serif;
    padding: 1rem;
    border: 0.1rem solid #f0e8e1;
    border-radius: 0.3rem;
    background-color: #f7f6f9;
}
#sub-login-div #heading-div{
    background-color: ${({theme})=>theme.colors.green};
    margin: -1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    color: #fff;
    text-align: center;
}
#sub-login-div #footer-div{
    font-size: 0.8rem;
    margin-bottom: -1rem;
    margin-top: 2rem;
}
#sub-login-div #footer-div a{
    color: ${({theme})=>theme.colors.red};
    font-weight: 500;
    font-size: 0.9rem;
    font-family: 'Kanit', sans-serif;
    
}
#sub-login-div form{
}
#sub-login-div form .btn{
    border:none;
    background-color: ${({theme})=>theme.colors.green};
}
#sub-login-div form .btn:hover{
    border:none;
    background-color: ${({theme})=>theme.colors.green};
}

`
export default Login