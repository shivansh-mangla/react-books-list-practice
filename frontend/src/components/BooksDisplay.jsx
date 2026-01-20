import React, { useEffect } from 'react'
import BooksDisplayCard from './BooksDisplayCard';
import './styles/booksDisplay.css'
import { useBooksState } from '../context/BooksContext';

const BooksDisplay = () => {

    const booksList = useBooksState();

    useEffect(() => {
        console.log(booksList);
    }, [booksList])

  return (
    <div className="book-display-div">
        {
            booksList.length === 0 
            ?
            <h3>Books List is empty!! Add new book below</h3>
            :
            booksList.map((book) => {
                return <BooksDisplayCard book={book} key={book.id}/>
            })
        }


    </div>
  )
}

export default BooksDisplay