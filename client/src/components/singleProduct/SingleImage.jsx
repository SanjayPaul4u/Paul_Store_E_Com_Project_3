import React, { useState } from 'react'
import styled from 'styled-components'


const SingleImage = ({singleProductData}) => {
    const [mainImage, setMainImage] = useState(0);
    const {image, category} = singleProductData;
    // console.log(image);

    const setMainImageFunc = (index)=>{
        setMainImage(index);
    }
  return (
    <>
    {image && <Wrapper className='col-12 col-md-8 col-xl-6'>
        <div className="card position-relative">
             {/* badge */}
             <div className='badge-div position-absolute'>
                <span className=" badge">
                    {category} Item
                </span>          
            </div> 
            <img src={`data:${image[mainImage].fileType};base64,${image[mainImage].imagebase64}`} className="main-image card-img-top" alt="single-main-img-err"/>
        </div>

        <div className="other-images row">
            {image.map((e, index)=>{
                return <div
                    key={e.filePath}
                    onClick={()=>{setMainImageFunc(index)}}
                    className="col-3 col-md-3 col-xl-3">
                    <img src={`data:${e.fileType};base64,${e.imagebase64}`} 
                    className="other-image card-img-top" alt="single-main-img-err"/>
                </div>
            })}
        </div>        
    </Wrapper>}
    </>
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
        /* background-color: red; */
        display: flex;
        align-items: flex-end;
        padding-top: 1rem;
        .other-image{
            cursor: pointer;
            box-shadow: 0.1rem 0.2rem 2rem #bcbcbc;
            margin-bottom: 0;
        }
                
    }

    
`
export default SingleImage