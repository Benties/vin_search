import React, {useContext} from 'react';
import {Route, Routes, BrowserRouter, useParams} from 'react-router-dom';
import Result from './components/Results';
import Search from './components/Search';
import { VinContext } from './context/vinContext';
import { ThemeContext } from './context/themeContext';
function App() {
  const {theme, setTheme} = useContext(ThemeContext)
  const {car} = useContext(VinContext)

  const changeMode = (e) => {
    setTheme(!theme)
  }
  return (
    <BrowserRouter>
      <button className={theme ? 'theme-selector' : 'theme-selector dark'} onClick={changeMode}>{theme? 'Light' : 'Dark'}</button>
      <Routes>
        <Route path='/' element={<Search theme={theme}/>}/>
        <Route path={`/car`} element={<Result car={car} theme={theme}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
