import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './components/header/Header'
import Home from './components/home/Home'
import MainProducts from './components/products/MainProducts'


const App = () => {
  const theme = {
    colors:{
      black: "#1f2324",
      lowBlack: "#65676b",
      red: "#f05c5c",
      lowRed: "#f47e7d",
      green: "#00b973",
      mainBg: "#f5f7fb",
      productBg: "#e8e8e8",
      white: "#fff",
      lowWhite: "#cacaca"
    },
    fonts: {
      brandFont: "'Gluten', cursive",
      font1: "'Kanit', sans-serif"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>          
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/products" element={<MainProducts/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App