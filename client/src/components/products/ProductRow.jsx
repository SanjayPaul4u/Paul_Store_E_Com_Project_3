import React, { useEffect } from 'react'
import GridView from './GridView'
import styled from 'styled-components'
import ListView from './ListView'
import {
  fetchProducts
} from "../../store/async-thunk-helper/asyncThunkHelper";
import { useSelector, useDispatch } from 'react-redux'




const ProductRow = () => {
  // USING DISPATCH
  const dispatch = useDispatch();

  // GOT IMPORTANT DATA by useSelector
  const main_important_data = useSelector((state)=>{
    return state.importants;
  });
  
  // GOT PRODUCT DATA by useSelector 📌
  const main_products_data = useSelector((state) => {
    return state.products;
  });
  const { productsData, contentSize, page, search } = main_products_data;

  // using UseEffect 📌
  useEffect(() => {
    // if (productsData.length === 0) {
      dispatch(fetchProducts({search, contentSize, page}));
    // }
  }, [main_products_data.search]);

  console.log(main_products_data);
  return (
    <Wrapper className="product-row-2 col-10 col-md-9 col-xl-9">
      {
        main_important_data.gridView? 
        <GridView main_products_data = {main_products_data} />:
        <ListView main_products_data={main_products_data}/>
      }
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({theme})=> theme.colors.mainBg};
`
export default ProductRow