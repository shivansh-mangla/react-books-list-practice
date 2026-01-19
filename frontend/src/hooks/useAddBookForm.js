import React, { useState } from 'react'

export const useAddBookForm = (addNewBook) => {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {return;}
        
        addNewBook(title);
        setTitle("");
    }



  return {title, setTitle, handleSubmit}
}
