import React from 'react'
import { useAddBookForm } from '../hooks/useAddBookForm'

const BooksAdd = () => {

  const {title, setTitle, handleSubmit}  = useAddBookForm();

  return (
    <div className='books-add-div'>
        <h3>
            Add a new book!!
        </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                Enter the book title:
            </label>
            <input type="text" id='title' placeholder='Ex: Harry Puttar' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">
                Add Book
            </button>
        </form>
    </div>
  )
}

export default BooksAdd