import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar'


const TopLoadingBar = () => {
    const main_important_data = useSelector((state)=>{
        return state.importants;
    });
    const main_products_data = useSelector((state)=>{
        return state.products;
    });
    const main_cart_data = useSelector((state)=>{
        return state.cart;
    });
    const {important_progress} = main_important_data;
    const {product_progress} = main_products_data;
    const {cart_progress} = main_cart_data;



  return (
    <>
    <LoadingBar
    height={3}
    color='#00b973'
    progress={important_progress}
    />
    <LoadingBar
    height={3}
    color='#00b973'
    progress={product_progress}
    />
    <LoadingBar
    height={3}
    color='#00b973'
    progress={cart_progress}
    />
    </>
  )
}

export default TopLoadingBar