import React from 'react'
import BooksDisplay from '../components/BooksDisplay'
import BooksAdd from '../components/BooksAdd'
import { useBooks } from '../hooks/useBooks'
import './styles/booksPage1.css'

const BooksPage1 = () => {

    const {booksList, addNewBook, editBookTitle, deleteBook} = useBooks();

  return (
    <div className='books-page-1'>
        <h1>
            Welcome to my books page!!
        </h1>

        <BooksDisplay booksList={booksList} editBookTitle={editBookTitle} deleteBook={deleteBook}/>
        <BooksAdd addNewBook={addNewBook} />
    </div>
  )
}

export default BooksPage1