import React from 'react'
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'



const Signup = () => {
  return (
    <Wrapper className='container' id='main-signup'>
        <div id="sub-signup-div" className='col-10 col-md-6 col-xl-4'>
          <div id='heading-div'>
            <h3>SignUp</h3>
            <p>Creat Account</p> 
          </div>
          <form>

            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name='name' minLength={3} maxLength={25}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' minLength={3} maxLength={20}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword1" name='confirmPassword'  minLength={3} maxLength={20}/>
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