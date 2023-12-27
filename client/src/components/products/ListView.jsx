import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PriceFormat from "../../helper/PriceFormat";
import { FaStar } from "react-icons/fa6";
import { fetchMoreProducts } from "../../store/async-thunk-helper/asyncThunkHelper";
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch } from "react-redux";
import Spinner from "../Spinner";



const ListView = ({main_products_data}) => {
const {isLoading, productsData, totalResult, contentSize, page} = main_products_data;

// using useDispatch
const dispatch = useDispatch();

// fetch More Function 📌
const fetchMoreFunc = () => {
  dispatch(fetchMoreProducts({contentSize, page}));
};


  return (
    <Wrapper className="gird-view">
      {isLoading ? <Spinner/>: totalResult===0 && <h5>No product available with this filter</h5>}

      {/* INFINITE SCROLLIN 📌 */}
      <InfiniteScroll
          dataLength={productsData.length}
          next={fetchMoreFunc}
          hasMore={
            productsData.length !== totalResult &&
            productsData.length < totalResult
          }
          loader={<Spinner/>}
          className="row"
        >

      {/* MAPPING📌 */}
      {productsData &&
        productsData.map((element) => {
          const {_id, name, image, category, description, stars, price} = element;
          return (
            <div key={_id} className="row-products col-12 col-md-12 col-xl-12">
              {/* cart-start */}
              <NavLink
                to={`/products/${_id}`}
                className="card position-relative"
              >
                {/* badge */}
                <div className="badge-div position-absolute">
                  <span className="badge">{category} item</span>
                </div>
                {/* badge end*/}

                <div className="row g-0">
                  <div className="col-12 col-md-3 col-xl-3 img-row-1">
                    <img
                      src={`data:${image[0].fileType};base64,${image[0].imagebase64}`}
                      className="img-fluid rounded-start"
                      alt="list-product-img-err"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-xl-9">
                    <div className="card-body">
                      <div>
                        <h5>{name}</h5>
                        <p>
                          {description}
                        </p>
                        <p>
                          Available: <span> In Stock</span>
                        </p>
                        <p>
                          Id:<span> {_id}</span>
                        </p>
                        <h5 className="card-title price">
                          <PriceFormat price={price * 100} />
                        </h5>
                      </div>
                      <p className="rate-para">
                        <FaStar className="icon-style" /> {stars}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* cart-end */}
            </div>
          );
        })}
      </InfiniteScroll>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 1rem;
  .row-products {
    padding: 1rem;
    &:hover{
      transition: 0.5s;
    }
    .card {
      text-transform: capitalize;
      text-decoration: none;
      border: none;

      img{
        &:hover{
          opacity: 0.5;
          transition: 0.5s;
        }
      }
      .badge-div {
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: start;
        .badge {
          padding: 0.5rem;
          background-color: ${({ theme }) => theme.colors.green};
          opacity: 0.8;
        }
      }
      .card-body {
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 1rem;
        font-family: ${({ theme }) => theme.fonts.font2};

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            margin: 0;
            color: ${({ theme }) => theme.colors.lowBlack};
            font-size: 0.8rem;
            span {
              color: ${({ theme }) => theme.colors.mediumBlack};
              font-weight: 600;
              font-family: ${({ theme }) => theme.fonts.font2};
            }
          }
          h5 {
            margin: 0;
            padding-top: 0.5rem;
            color: ${({ theme }) => theme.colors.black};
          }
        }
        .rate-para {
          padding-top: 0.5rem;
          display: flex;
          justify-content: center;
          color: ${({ theme }) => theme.colors.mediumBlack};
          .icon-style {
            margin-top: 0.2rem;
            color: #ffbb00;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .row-products .card .row .img-row-1{
      padding: 1rem;
      padding-top: 1.5rem;
      width: 50%;
    }
  }
  @media (max-width: 370px) {
    .row-products .card .row .img-row-1{
      width: 100%;
    }
    .row-products .card .card-body div{
      h5{
        font-size: 1rem;
      }
      p{
        font-size: 0.7rem;
        
      }
    }
    .row-products .card .card-body .rate-para {
      font-size: 0.8rem;
    }
  }
`;
export default ListView;
