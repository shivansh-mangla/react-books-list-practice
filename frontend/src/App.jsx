import React from 'react'
import { Routes, Route } from "react-router-dom";
import BooksPage1 from './pages/BooksPage1';
import MainLayout from './layouts/MainLayout';
import BooksPage2 from './pages/BooksPage2';


const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<BooksPage1/>} />
        <Route path='/1' element={<BooksPage1/>} />
        <Route path='/2' element={<BooksPage2/>} />
      </Route>
    </Routes>
  )
}

export default App