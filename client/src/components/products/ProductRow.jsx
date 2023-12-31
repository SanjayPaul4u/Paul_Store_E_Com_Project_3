import React, { useEffect } from 'react'
import GridView from './GridView'
import styled from 'styled-components'
import ListView from './ListView'
import {
  fetchProducts
} from "../../store/async-thunk-helper/asyncThunkHelper";
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';





const ProductRow = () => {
  const [query, setQuery] = useSearchParams();
  let search = query.get("search");
  let sort = query.get("sort");
  let category = query.get("category");
  let price = query.get("price");
  let company = query.get("company");
  let weight = query.get("weight");
  let color = query.get("color");

  if(!search){
    search = ""
  }
  if(!sort){
    sort = ""
  }
  if(!category || category==="all"){
    category = ""
  }
  if(!price || price==="all"){
    price = ""
  }
  if(!company || company==="all"){
    company = ""
  }
  if(!weight || weight==="all"){
    weight = ""
  }
  if(!color || color==="all"){
    color = ""
  }

  // USING DISPATCH 📌
  const dispatch = useDispatch();

  // GOT IMPORTANT DATA by useSelector
  const main_important_data = useSelector((state)=>{
    return state.importants;
  });
  
  // GOT PRODUCT DATA by useSelector 📌
  const main_products_data = useSelector((state) => {
    return state.products;
  });
  const { productsData, contentSize, page} = main_products_data;

  // using UseEffect 📌
  useEffect(() => {
      dispatch(fetchProducts({search, contentSize, page, sort, category, price, company, weight, color}));

  }, [main_products_data.search, query]);
  // console.log(main_products_data);

  return (
    <Wrapper className="product-row-2 col-12 col-md-9 col-xl-9">
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