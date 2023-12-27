import React from 'react'
import styled from 'styled-components'
import { IoMdAlert } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import {useSelector} from 'react-redux';

const MainAlert = () => {
    const main_important_data = useSelector((state)=>{
        return state.importants;
    })
    const {Alert} = main_important_data; // from state;
  
  return (
    <Wrapper>
    {Alert && Alert.type==="error" && <div className='fixed-top container' id='main-alert'>
        <div id='sub-alert-div'>
            <div className="alert alert1" role="alert">
                <IoMdAlert className='me-2 main-alert-icon'/>
                {Alert.message}
            </div>
        </div>
    </div>}

    {Alert && Alert.type==="success" && <div className='fixed-top container' id='main-alert'>
        <div id='sub-alert-div'>
            <div className="alert alert2 " role="alert">
                <FaCheckCircle className='me-2 main-alert-icon'/>
                 {Alert.message}
            </div>
        </div>
    </div>}
    </Wrapper>
  )
}
const Wrapper = styled.section`
#main-alert{
    padding: 0rem 1.5rem;
    margin-top: 5rem;
    
    
}
#sub-alert-div{
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    align-items: flex-end;
}
#main-alert .alert{
    overflow: hidden;
    width: 40%;
    min-height: 5rem;
    max-height: auto;
    display: flex;
    align-items: center;
    animation: AlertSliding 0.5s linear 1;
    
}
#main-alert .alert1{
    background-color: Gainsboro;
    color: #303030;
    border-left: 0.4rem solid ${({theme})=>theme.colors.red};
    border-radius: 0;

    .main-alert-icon{
    font-size: 1.5rem;
    color: ${({theme})=>theme.colors.red};
    }

}
#main-alert .alert2{
    background-color: Gainsboro;
    color: #303030;
    border-left: 0.4rem solid ${({theme})=>theme.colors.green};
    border-radius: 0;

    .main-alert-icon{
    font-size: 1.5rem;
    color: ${({theme})=>theme.colors.green};
    }
}
@keyframes AlertSliding{
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0%);
    }
    
}

@media only screen and (max-width:991px) {
    #main-alert .alert{
        width: 60%;
    }
}
@media only screen and (max-width:574px) {
    #main-alert .alert{
        width: 75%;
        min-height: 3rem;
        max-height: auto;
    }
    #main-alert{
        padding: 0 1rem;
    }
}
@media only screen and (max-width:460px) {
    #main-alert .alert{
        width: 100%;
    }
    #main-alert .main-alert-icon{
        font-size: 1.1rem;
    }
    #main-alert .alert2{
        font-size: 0.8rem;
    }
    #main-alert .alert1{
        font-size: 0.8rem;
    }
}
`
export default MainAlert