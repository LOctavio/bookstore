import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import store from '../redux/configureStore';
import CreateNewBook from './CreateNewBook';
import BooksList from './BooksList';
import { getList } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState([]);

  store.subscribe(() => setBooks(store.getState().booksReducer));

  const getBookList = async () => {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eTfxKsR9wf3ubgm9W4xT/books')
      .then((response) => response.json())
      .then((json) => {
        const newArray = [];
        Object.entries(json).forEach((book) => {
          const newBook = {
            item_id: book[0],
            title: book[1][0].title,
            category: book[1][0].category,
          };
          newArray.push(newBook);
        });
        dispatch(getList(newArray));
      });
  };

  useEffect(() => {
    getBookList();
    return () => {
      setBooks([]);
    };
  }, []);

  return (
    <>
      <BooksList books={books} />
      <div className="line-between-sections" />
      <CreateNewBook />
    </>
  );
};

export default Books;
