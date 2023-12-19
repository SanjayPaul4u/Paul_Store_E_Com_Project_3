import React from "react";
import styled from "styled-components";
import PriceFormat from "../../helper/PriceFormat";
import { Button } from "../../styles/Button";
import { useSearchParams } from "react-router-dom";




const FilterRow = () => {
  const [query, setQuery] = useSearchParams();
  const copy  = new URLSearchParams(query);
  const category = query.get("category");
  
  const onClickCategory = (e) =>{
    copy.set("category", e.target.value);
    setQuery(copy);
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
      <div className="price-filter mt-4">
        <h6>PRICE:</h6>
        <div>
          <button className="btn-price-item active">
            <PriceFormat price={0}/> - <PriceFormat price={500*100}/>
          </button>
          <button className="btn-price-item">
            <PriceFormat price={500*100}/> - <PriceFormat price={1000*100}/>
          </button>
          <button className="btn-price-item">
            <PriceFormat price={1000*100}/> - <PriceFormat price={9000*100}/>
          </button>
          <button className="btn-price-item">
            <PriceFormat price={9000*100}/> - Above
          </button>
        </div>
      </div>

      {/* COMPANY FILTER */}
      <div className="company-filter mt-4">
        <h6>COMPANY:</h6>
        <div>
          <select className="form-select" aria-label="Default select example">
              <option value="">All</option>
              <option value="">Alpana</option>
              <option value="">Tropolight</option>
              <option value="">Crust and Cumb</option>
              <option value="">Ship Brand</option>
          </select>
        </div>
      </div>

      {/* WEIGHT FILTER */}
      <div className="weight-filter mt-4">
        <h6>WEIGHT:</h6>
        <div>
          <select className="form-select" aria-label="Default select example">
              <option value="">500 g</option>
              <option value="">1 kg</option>
              <option value="">2.5 kg</option>
              <option value="">10 kg</option>
          </select>
        </div>
      </div>

      {/* COLORS FILTER */}
      <div className="color-filter mt-4">
        <h6>COLORS:</h6>
        <div>
          <button className="btn-color-item">1</button>
          <button className="btn-color-item">2</button>
          <button className="btn-color-item active">3</button>
          <button className="btn-color-item">4</button>
        </div>
      </div>

      <Button>
        Clear Cart
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
        background-color: #dd2fc9;
        margin-right: 0.6rem;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.colors.lowBlack};
        font-weight: 500;
        opacity: 0.6;
      }
      .active {
        opacity: 1;
        font-weight: 500;
      }
    }
  }
`;
export default FilterRow;
