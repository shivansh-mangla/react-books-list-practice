import React, { useEffect } from 'react'
import { useBooksState } from '../context/BooksContext'
import './styles/Navbar.css'

const Navbar = () => {
  const booksList = useBooksState();

  const count = booksList.length;

  return (
    <div className='navbar'>
      <h2>
        Count of books: {count}
      </h2>
    </div>
  )
}

export default Navbar