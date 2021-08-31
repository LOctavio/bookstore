import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const CreateNewBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form>
      <input type="text" className="title" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" className="author" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitBookToStore();
        }}
      >
        submit
      </button>
    </form>
  );
};

export default CreateNewBook;
