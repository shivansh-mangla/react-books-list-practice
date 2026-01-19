import { useState } from "react";
import "./styles/booksDisplayCard.css";

const BooksDisplayCard = ({ book, editBookTitle, deleteBook }) => {
  const { id, title } = book;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleSave = () => {
    if (!editedTitle.trim()) return;

    editBookTitle(editedTitle, id);
    setIsEditing(false);
  };

  return (
    <div className="books-display-card">
      <h5>
        ID: <em>{id}</em>
      </h5>

      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h5>
            Title: <em>{title}</em>
          </h5>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteBook(id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BooksDisplayCard;
