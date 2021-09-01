import { useState } from 'react';
import store from '../redux/configureStore';
import CreateNewBook from './CreateNewBook';
import BooksList from './BooksList';

const Books = () => {
  const [books, setBooks] = useState([]);

  store.subscribe(() => setBooks(store.getState().booksReducer));

  return (
    <>
      <CreateNewBook />
      <BooksList books={books} />
    </>
  );
};

export default Books;
