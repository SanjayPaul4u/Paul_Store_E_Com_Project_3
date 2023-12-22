import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slices/ProductSlice'
import importantSlice from './slices/importantSlice'
import CartSlice from './slices/CartSlice'



const store = configureStore({
    reducer:{
        products: productSlice,
        importants: importantSlice,
        cart:CartSlice
    }
})

export default store