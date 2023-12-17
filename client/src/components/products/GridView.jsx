import React, { useEffect } from "react";
import OurProduct from "./OurProduct";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/async-thunk-helper/asyncThunkHelper";

const GridView = () => {
  // using dispatch
  const dispatch = useDispatch();

  // get data by useSelector
  const data = useSelector((state) => {
    return state.products;
  });
  //
  const myUrl = data.url;

  // using UseEffect
  useEffect(() => {
    if(data.productsData.length === 0){
      dispatch(fetchProducts({ myUrl }));
    }
  }, []);

  // console.log(data);
  return (
    <Wrapper className="row gird-view">
      {data.isLoading && <h4> ...Loading </h4>}

      {data.productsData &&
        data.productsData.map((element) => {
          return (
            <div
              key={element._id}
              className="row-products col-6 col-md-4 col-xl-4"
            >
              <OurProduct ProductData = {element} />
            </div>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-transform: capitalize;
  padding-top: 0.5rem;
  .row-products {
    padding: 1.5rem;
    &:hover{
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
