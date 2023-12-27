import React, { useState } from 'react'
import { IoGridOutline } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";//<IoGrid /> 
import { TfiViewListAlt } from "react-icons/tfi";
import { FaThList } from "react-icons/fa";//<FaThList />
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux'
import { girdViewFunc, listViewFunc } from '../../store/slices/importantSlice'
import { useSearchParams} from 'react-router-dom';


const ProductPageHeader = ({ofcampas_ref}) => { // ref - form - MainProduct.jsx
    const [searchVal, setSearchVal] = useState("");
    const [query, setQuery] = useSearchParams();
    const copy = new URLSearchParams(query);

    // using dispatch
    const dispatch = useDispatch();

    // using selector
    const main_important_data = useSelector((state)=>{
        return state.importants;
      });
    // using selector
    const main_products_data = useSelector((state)=>{
        return state.products;
      });
    const {totalResult} = main_products_data;

    // set grid func
    const setGridFunc = ()=>{
        dispatch(girdViewFunc());
    }
    // set list func
    const setListFunc = ()=>{
        dispatch(listViewFunc());
    }

    // ONCHANGE FUNC 📌
    const onChangeFunc = (e) =>{
        setSearchVal(e.target.value);
    }

    // SEARCH FUNCTION 📌
    const onClickSearchFunc = (event) =>{
        event.preventDefault();
        copy.set("search", searchVal);
        setQuery(copy);
    }
    // SORT FUNCTION 📌
    const onClickSortFunc = (e) =>{
        copy.set("sort", e.target.value);
        setQuery(copy);
    }

    // 
    const onClickFilterBtn =()=>{
        ofcampas_ref.current.click();
    }
  return (
      <Wrapper>
        <div className="product-header-content container">
            <div className='first-row'>
                {/* TOTAL PRODUCT */}
                <div className="product-count-div">
                    <h6>{totalResult} Products Available</h6>
                    <button className="btn btn-outline-success filter-btn"
                    onClick={onClickFilterBtn}
                    >
                        filter
                    </button>
                </div>

                {/* SEARCH */}
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchVal} onChange={onChangeFunc}/>

                    <button className="btn btn-outline" type="submit" 
                    onClick={onClickSearchFunc}
                    >Search</button>
                </form>
            </div>
            

            <div className='second-row'>
                <div className="sorting-div">
                    <select 
                    className="form-select" aria-label="Default select example"
                    onChange={onClickSortFunc}
                    >
                        <option value="">Sort</option>
                        <option value="low-high">Price: Low-High</option>
                        <option value="high-low">Price: High-Low</option>
                        <option value="a-z">Name: a-z</option>
                        <option value="z-a">Name: z-a</option>
                    </select>
                </div>

                <div 
                className="grid-btn-div mx-4"
                onClick={setGridFunc}
                >
                    {
                    main_important_data.gridView?
                    <h5><IoGrid /></h5>:                   
                    <h5><IoGridOutline /></h5>
                    }
                    <p>Grid</p>
                </div>

                <div 
                className="list-btn-div"
                onClick={setListFunc}
                >   {
                    main_important_data.gridView?
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
                h6{
                    margin-right: 0.5rem;
                    
                }
                .filter-btn{
                    display: none;
                }

            }
            form{
                margin-right: 0.5rem;
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
    @media (max-width: 767px) {
        .product-header-content{
            flex-direction: column;
            /* justify-content: flex-start; */
            align-items: flex-start;
            .first-row{
                flex-direction: column;
                align-items: flex-start;
                .product-count-div{
                    margin-bottom: 0.5rem;
                    h6{
                        margin-right: 1rem;
                        display: inline-block;
                    }
                    .filter-btn{
                        display: inline-block;
                    }
                }
                form{
                   margin : 0;
                   margin-bottom: 0.8rem;
                }
            }
        }
    }
`
export default ProductPageHeader