import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slices/ProductSlice'
import importantSlice from './slices/importantSlice'



const store = configureStore({
    reducer:{
        products: productSlice,
        importants: importantSlice
    }
})

export default store