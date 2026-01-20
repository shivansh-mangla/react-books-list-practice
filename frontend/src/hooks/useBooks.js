import React, { useEffect, useState } from 'react'

export const useBooks = () => {

    const API_URL = "http://localhost:3001/books";


    const [booksList, setBooksList] = useState([]);
    const [latestId, setLatestId] = useState(1);

    //GET all books
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setBooksList(data))
    },[]);

    const increamentId = () => setLatestId(prev => prev+1);

    // const addNewBook = (newTitle) => {
    //     const newBook = {
    //         id: latestId,
    //         title: newTitle,
    //     }

    //     increamentId();
    //     setBooksList(prev => [...prev, newBook])
    // }

    //POST new book
    const addNewBook = async (title) =>{
        const newBook = {title};

        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook),
        });

        const savedBook = await res.json();

        setBooksList(prev => [...prev, savedBook]);
    }


    // const editBookTitle = (newTitle, bookId) => {
    //     setBooksList((prevBooksList) => 
    //         prevBooksList.map((book) => 
    //             book.id === bookId
    //             ? {...book, title: newTitle}
    //             : book
    //         )
    //     );
    // }

    //PUT edit title
    const editBookTitle = async (newTitle, bookId) => {

        const res = fetch(`${API_URL}/${bookId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({title: newTitle})
        });

        const updatedBook = await res.json();

        setBooksList(prev => 
            prev.map((book) => 
                book.id === bookId
                ? updatedBook
                : book
            )
        )
    };



    // const deleteBook = (bookId) => {
    //     setBooksList((prevBooksList) => 
    //         prevBooksList.filter((book) =>
    //             book.id !== bookId
    //         )
    //     );
    // }

    //DELETE book
    const deleteBook = async (bookId) => {

        await fetch(`${API_URL}/${bookId}`,{
            method: "DELETE"
        })


        setBooksList(prev => 
            prev.filter((book) => 
                book.id !== bookId
            )
        )
    }

  return {booksList, addNewBook, editBookTitle, deleteBook}
}
