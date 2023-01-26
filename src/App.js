import React, {useContext} from 'react';
import {Route, Routes, BrowserRouter, useParams} from 'react-router-dom';
import Result from './components/Results';
import Search from './components/Search';
import { VinContext } from './context';

function App() {

  const {car} = useContext(VinContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path={`/car`} element={<Result car={car}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
