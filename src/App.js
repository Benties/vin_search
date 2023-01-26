import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Result from './components/Results';
import Search from './components/Search';
import {useSelector} from 'react-redux'


function App() {

  // const vin =


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/car' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
