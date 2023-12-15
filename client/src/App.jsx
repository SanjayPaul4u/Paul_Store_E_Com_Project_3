import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Del from './components/del'


const App = () => {
  const theme = {
    colors:{
      bgColor: "#7a7a7a"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route exact path="/del" element={<Del/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App