import React, { useEffect } from "react";
import OurProduct from "./OurProduct";
import styled from "styled-components";
import { useDispatch} from "react-redux";
import {
  fetchMoreProducts,
} from "../../store/async-thunk-helper/asyncThunkHelper";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../Spinner'

const GridView = ({main_products_data}) => {
  const { productsData, isLoading, totalResult, contentSize, page } = main_products_data;

  // using dispatch 📌
  const dispatch = useDispatch();

  // fetch More Function 📌
  const fetchMoreFunc = () => {
    dispatch(fetchMoreProducts({contentSize, page}));
  };

  return (
    <>
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
          {/* MAPPING ALL PRODUCT 📌 */}
          {productsData &&
            productsData.map((element) => {
              return (
                <div
                  key={element._id}
                  className="row-products col-6 col-md-6 col-xl-4"
                >
                  <OurProduct ProductData={element} />
                </div>
              );
            })}
        </InfiniteScroll>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  text-transform: capitalize;
  padding: 5rem;
  padding-top: 0.5rem;
  .row-products {
    /* background-color: green; */
    padding: 1rem;
    &:hover {
      padding: 0rem;
      transition: 0.8s;
    }
    a {
      text-decoration: none;
    }
    .card {
      border: none;
      .badge-div {
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: end;
        .badge {
          padding: 0.5rem;
          background-color: ${({ theme }) => theme.colors.green};
          opacity: 0.8;
        }
      }

      img {
        /* height: 15rem; */
      }
      .card-body {
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 1rem;
        font-family: ${({ theme }) => theme.fonts.font2};

        div {
          p {
            margin: 0;
            color: ${({ theme }) => theme.colors.mediumBlack};
          }
          h5 {
            margin: 0;
            padding-top: 0.5rem;
            color: ${({ theme }) => theme.colors.black};
          }
        }
        .rate-para {
          color: ${({ theme }) => theme.colors.mediumBlack};
          .icon-style {
            margin-top: -0.2rem;
            color: #ffbb00;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    padding: 0rem;
  }
  @media (max-width: 450px) {
    .row-products .card .card-body{
      flex-direction: column;
      padding: 0.2rem;
      p{
        font-size: 0.8rem;
      }
      h5{
        font-size: 1rem;
      }
      .rate-para{
        text-align: end;
        
      }
    }
    .row-products{
      padding-right: 0.4rem;
      padding-left: 0.8rem;
    }
  }
`;
export default GridView;
