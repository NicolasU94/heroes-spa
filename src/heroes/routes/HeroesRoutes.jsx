
import  MarvelPage  from '../pages/MarvelPage';
import { Navbar } from '../../ui'
import { Route, Routes, Navigate } from 'react-router-dom';
import DcPage from '../pages/DcPage';
import Hero from '../pages/Hero';
import React from 'react'
import Search from '../pages/Search';

const HeroesRoutes = () => {
  return (
    <>
      <Navbar /> 
      <div className='container'>
          <Routes>
            <Route path='marvel' element={<MarvelPage />} />
            <Route path='dc' element={<DcPage />} />
            <Route path='search' element={<Search />} />
            <Route path='hero' element={<Hero />} />
            <Route path='/'  element={<Navigate to='/marvel'/>} />
          </Routes>
        </div>
    </>
  )
}

export default HeroesRoutes
