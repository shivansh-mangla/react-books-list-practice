import { createContext, useContext, useMemo } from "react";
import { useBooks } from "../hooks/useBooks";

const BooksStateContext = createContext(null);
const BooksActionsContext = createContext(null);

export const BooksProvider = ({ children }) => {
  const { booksList, addNewBook, editBookTitle, deleteBook } = useBooks();

  const actions = useMemo(
    () => ({ addNewBook, editBookTitle, deleteBook }),
    []
  );

  return (
    <BooksStateContext.Provider value={booksList}>
      <BooksActionsContext.Provider value={actions}>
        {children}
      </BooksActionsContext.Provider>
    </BooksStateContext.Provider>
  );
};

export const useBooksState = () => {
  const context = useContext(BooksStateContext);
  if (!context) throw new Error("useBooksState must be used inside BooksProvider");
  return context;
};

export const useBooksActions = () => {
  const context = useContext(BooksActionsContext);
  if (!context) throw new Error("useBooksActions must be used inside BooksProvider");
  return context;
};
