import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Del from './components/del'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/del" element={<Del/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App