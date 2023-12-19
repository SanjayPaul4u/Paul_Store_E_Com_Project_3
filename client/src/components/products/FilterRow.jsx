import React from "react";
import styled from "styled-components";
import PriceFormat from "../../helper/PriceFormat";
import { Button } from "../../styles/Button";
import { useSearchParams } from "react-router-dom";
import { clearFilter } from "../../store/async-thunk-helper/asyncThunkHelper";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";



const FilterRow = () => {
  
  // GOT PRODUCT DATA by useSelector 📌
  const main_products_data = useSelector((state) => {
    return state.products;
  });
  const { contentSize, page} = main_products_data;
  const dispatch = useDispatch();

  // 📌
  const [query, setQuery] = useSearchParams();
  // console.log(copy.size);
  const copy  = new URLSearchParams(query);
  const category = query.get("category");
  const price = query.get("price");
  const color = query.get("color");
  
  const onClickCategory = (e) =>{
    copy.set("category", e.target.value);
    setQuery(copy);
  }
  const onClickPrice = (e)=>{
    copy.set("price", e.target.value);
    setQuery(copy);
  }
  const onChangeCompany = (e)=>{
    copy.set("company", e.target.value);
    setQuery(copy);
  }
  const onChangeWeight = (e)=>{
    copy.set("weight", e.target.value);
    setQuery(copy);
  }
  const onClickColor = (value)=>{
    copy.set("color", value);
    setQuery(copy);
  }
  // 📌
  const clearFilterFunc = ()=>{
    setQuery({});
    dispatch(clearFilter({contentSize, page}));
  }
  return (
    <Wrapper className="filter-row-1 col-10 col-md-3 col-xl-3">
      {/* CATEGORY FILTER */}
      <div className="category-filter">
        <h6>CATEGORY:</h6>
        <div>
          <button value="all" className={`btn-category-item ${category==="all"?"active":""}`} onClick={onClickCategory}>All</button>
          <button value="ice creame" className={`btn-category-item ${category==="ice creame"?"active":""}`} onClick={onClickCategory}>Ice Creame</button>
          <button value="bakery" className={`btn-category-item ${category==="bakery"?"active":""}`} onClick={onClickCategory}>Bakery</button>
          <button value="cake" className={`btn-category-item ${category==="cake"?"active":""}`} onClick={onClickCategory}>Cake</button>
          <button value="others" className={`btn-category-item ${category==="others"?"active":""}`} onClick={onClickCategory}>Others</button>
        </div>
      </div>

      {/* PRICE FILTER */}
      <div className="price-filter mt-2">
        <h6>PRICE:</h6>
        <div>
          <button value="all" className={`btn-price-item ${price==="all"?"active":""}`} onClick={onClickPrice}>
            All
          </button>
          <button value="0-500" className={`btn-price-item ${price==="0-500"?"active":""}`} onClick={onClickPrice}>
            <PriceFormat price={0}/> - <PriceFormat price={500*100}/>
          </button>
          <button value="500-1000" className={`btn-price-item ${price==="500-1000"?"active":""}`} onClick={onClickPrice}>
            <PriceFormat price={500*100}/> - <PriceFormat price={1000*100}/>
          </button>
          <button value="1000-9000" className={`btn-price-item ${price==="1000-9000"?"active":""}`} onClick={onClickPrice}>
            <PriceFormat price={1000*100}/> - <PriceFormat price={9000*100}/>
          </button>
          <button value="9000-above" className={`btn-price-item ${price==="9000-above"?"active":""}`} onClick={onClickPrice}>
            <PriceFormat price={9000*100}/> - Above
          </button>
        </div>
      </div>

      {/* COMPANY FILTER */}
      <div className="company-filter mt-2">
        <h6>COMPANY:</h6>
        <div>
          <select className="form-select" aria-label="Default select example"
          onChange={onChangeCompany}
          >
              <option value="all">All</option>
              <option value="deccan">Deccan</option>
              <option value="tower">Tower</option>
              <option value="ship brand">Ship Brand</option>
              <option value="mohan">Mohan</option>
              <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      {/* WEIGHT FILTER */}
      <div className="weight-filter mt-2">
        <h6>WEIGHT:</h6>
        <div>
          <select className="form-select" aria-label="Default select example"
          onChange={onChangeWeight}
          >
              <option value="all">All</option>
              <option value="500 g">500 g</option>
              <option value="800 g">800 g</option>
              <option value="1 kg">1 kg</option>
              <option value="2.5 kg">2.5 kg</option>
              <option value="5 kg">5 kg</option>
              <option value="10 kg">10 kg</option>
              <option value="15kg">15kg</option>
              <option value="25 kg">25 kg</option>
          </select>
        </div>
      </div>

      {/* COLORS FILTER */}
      <div className="color-filter mt-2">
        <h6>COLORS:</h6>
        <div>
          <button
          onClick={()=>{onClickColor("all")}}
          style={{border: 'none'}} 
          className={`btn-color-item ${color==="all"?"active": ""}`}>
            all
          </button>

          <button
          onClick={()=>{onClickColor("fff")}}
          style={{backgroundColor: "#fff"}} 
          className={`btn-color-item ${color==="fff"?"active": ""}`}>
            {color==="fff" ? <FaCheck className="iconStyle"/>:""}
          </button>

          <button
          onClick={()=>{onClickColor("fff000")}}
          style={{backgroundColor: "#fff000"}} 
          className={`btn-color-item ${color==="fff000"?"active": ""}`}>
            {color==="fff000" ? <FaCheck className="iconStyle"/>:""}
          </button>
        </div>
      </div>

      <Button
      disabled = {copy.size===0}
      id={copy.size===0? "disable":""}
      onClick={clearFilterFunc}>
        Clear Filter
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 2rem;
  .category-filter {
    h6 {
      background-color: ${({theme})=>theme.colors.mainBg};
    }
    div {
      display: flex;
      justify-content: start;
      flex-direction: column;

      .btn-category-item {
        background-color: #fff;
        text-align: start;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.colors.lowBlack};
        font-weight: 500;
      }
      .active {
        color: ${({ theme }) => theme.colors.red};
        font-weight: 500;
      }
    }
  }
  .price-filter {
    h6 {
      background-color: ${({theme})=>theme.colors.mainBg};
    }
    div {
      display: flex;
      justify-content: start;
      flex-direction: column;

      .btn-price-item {
        background-color: #fff;
        text-align: start;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.colors.lowBlack};
        font-weight: 500;
      }
      .active {
        color: ${({ theme }) => theme.colors.red};
        font-weight: 500;
      }
    }
  }

  .company-filter {
    h6 {
      background-color: ${({theme})=>theme.colors.mainBg};
    }
  }
  .weight-filter {
    h6 {
      background-color: ${({theme})=>theme.colors.mainBg};
    }
  }

  .color-filter {
    h6 {
      background-color: ${({theme})=>theme.colors.mainBg};
    }
    div {

      .btn-color-item {
        margin-right: 0.6rem;
        height: 1.3rem;
        width: 1.3rem;
        border-radius: 50%;
        border: 0.1rem solid #7a7a7a;
        outline: none;
        color: ${({ theme }) => theme.colors.black};
        font-weight: 500;
        opacity: 0.6;
        .iconStyle{
          margin-top: -0.5rem;
        }
      }
      .active {
        opacity: 1;
        font-weight: 500;
      }
    }
  }


  #disable{
    opacity: 0.7;
  }
`;
export default FilterRow;
