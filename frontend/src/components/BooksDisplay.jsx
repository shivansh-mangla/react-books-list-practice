import React, { useEffect } from 'react'
import BooksDisplayCard from './BooksDisplayCard';
import './styles/booksDisplay.css'

const BooksDisplay = ({booksList, editBookTitle, deleteBook}) => {

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
                return <BooksDisplayCard book={book} editBookTitle={editBookTitle} deleteBook={deleteBook}/>
            })
        }


    </div>
  )
}

export default BooksDisplay