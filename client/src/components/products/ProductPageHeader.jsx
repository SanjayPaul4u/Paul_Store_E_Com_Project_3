import React from 'react'
import { IoGridOutline } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";//<IoGrid /> 
import { TfiViewListAlt } from "react-icons/tfi";
import { FaThList } from "react-icons/fa";//<FaThList />
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux'
import { girdViewFunc, listViewFunc } from '../../store/slices/importantSlice'




const ProductPageHeader = () => {
    // using dispatch
    const dispatch = useDispatch();

    // using selector
    const data = useSelector((state)=>{
        return state.importants;
      });

    // set grid func
    const setGridFunc = ()=>{
        dispatch(girdViewFunc());
    }
    // set list func
    const setListFunc = ()=>{
        dispatch(listViewFunc());
    }
  return (
      <Wrapper>
        <div className="product-header-content container">
            <div className='first-row'>
                <div className="product-count-div">
                    <h6>45 Products Available</h6>
                </div>

                <form className="d-flex mx-4">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline" type="submit">Search</button>
                </form>
            </div>
            

            <div className='second-row'>
                <div className="sorting-div">
                    <select className="form-select" aria-label="Default select example">
                        <option>Sort</option>
                        <option value="high-low">Price: High-Low</option>
                        <option value="low-high">Price: Low-High</option>
                        <option value="a-z">Name: a-z</option>
                        <option value="z-a">Name: z-a</option>
                    </select>
                </div>

                <div 
                className="grid-btn-div mx-4"
                onClick={setGridFunc}
                >
                    {
                    data.gridView?
                    <h5><IoGrid /></h5>:                   
                    <h5><IoGridOutline /></h5>
                    }
                    <p>Grid</p>
                </div>

                <div 
                className="list-btn-div"
                onClick={setListFunc}
                >   {
                    data.gridView?
                    <h5><TfiViewListAlt /></h5>:
                    <h5><FaThList /></h5>
                    }
                    
                    <p>List</p>
                </div>

          </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
    border-bottom: 0.1rem solid ${({theme})=> theme.colors.productBg};
    .product-header-content{
        padding: 1.5rem;
        padding-top: 0.7rem;
        padding-bottom: 0rem;
        display: flex;
        justify-content: space-between;
        color: ${({theme})=> theme.colors.black};

        .first-row{
            display: flex;
            align-items: center;

            .product-count-div{
            }
            form{
                .btn-outline{
                    color: ${({theme})=> theme.colors.green};
                    border-color: ${({theme})=> theme.colors.green};
                    &:hover{
                        background-color: ${({theme})=> theme.colors.green};
                        color:${({theme})=> theme.colors.white};
                    }
                }
            }
        }

        .second-row{
            display: flex;
            justify-content: space-between; 

            p{
               font-size: 0.8rem;
               font-weight: 500;
               margin-bottom: 0rem;
               cursor: pointer;
            }
            h5{
                text-align: center;
                margin-bottom: 0rem;
                cursor: pointer;
            }
        }
    }
`
export default ProductPageHeader