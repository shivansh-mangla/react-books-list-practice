import React, { useState } from 'react'
import { useBooksActions } from '../context/BooksContext';

export const useAddBookForm = () => {

    const {addNewBook} = useBooksActions();

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {return;}
        
        addNewBook(title);
        setTitle("");
    }



  return {title, setTitle, handleSubmit}
}
