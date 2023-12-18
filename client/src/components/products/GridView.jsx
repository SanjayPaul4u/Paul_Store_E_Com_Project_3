import React, { useEffect } from "react";
import OurProduct from "./OurProduct";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchMoreProducts,
} from "../../store/async-thunk-helper/asyncThunkHelper";
import InfiniteScroll from "react-infinite-scroll-component";

const GridView = () => {
  // using dispatch 📌
  const dispatch = useDispatch();

  // get data by useSelector 📌
  const data = useSelector((state) => {
    return state.products;
  });
  const { productsData, isLoading, totalResult, contentSize, page } = data;

  // using UseEffect 📌
  useEffect(() => {
    if (data.productsData.length === 0) {
      dispatch(fetchProducts({contentSize, page}));
    }
  }, []);

  // fetch More Function 📌
  const fetchMoreFunc = () => {
    dispatch(fetchMoreProducts({contentSize, page}));
  };


  console.log(contentSize);
  return (
    <>
      <Wrapper className="gird-view">
        {isLoading && <h4> ...Loading </h4>}

        {/* INFINITE SCROLLIN 📌 */}
        <InfiniteScroll
          dataLength={productsData.length}
          next={fetchMoreFunc}
          hasMore={
            productsData.length !== totalResult &&
            productsData.length < totalResult
          }
          loader={<h3>...Loadinga</h3>}
          className="row"
        >
          {/* MAPPING ALL PRODUCT 📌 */}
          {productsData &&
            productsData.map((element) => {
              return (
                <div
                  key={element._id}
                  className="row-products col-6 col-md-4 col-xl-4"
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
  padding-top: 0.5rem;
  .row-products {
    padding: 1.5rem;
    &:hover {
      padding: 0rem;
      transition: 0.5s;
    }
    a {
      text-decoration: none;
    }
    .card {
      /* background-color: red; */
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
        /* height: 13rem; */
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
`;
export default GridView;
