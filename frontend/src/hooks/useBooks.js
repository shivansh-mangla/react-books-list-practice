import React, { useState } from 'react'

export const useBooks = () => {
    const [booksList, setBooksList] = useState([]);
    const [latestId, setLatestId] = useState(1);

    const increamentId = () => setLatestId(prev => prev+1);

    const addNewBook = (newTitle) => {
        const newBook = {
            id: latestId,
            title: newTitle,
        }

        increamentId();
        setBooksList(prev => [...prev, newBook])
    }

    const editBookTitle = (newTitle, bookId) => {
        setBooksList((prevBooksList) => 
            prevBooksList.map((book) => 
                book.id === bookId
                ? {...book, title: newTitle}
                : book
            )
        );
    }

    const deleteBook = (bookId) => {
        setBooksList((prevBooksList) => 
            prevBooksList.filter((book) =>
                book.id !== bookId
            )
        );
    }

  return {booksList, addNewBook, editBookTitle, deleteBook}
}
