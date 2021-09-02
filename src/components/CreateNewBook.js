import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const CreateNewBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form>
      <input type="text" className="title-input" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" className="category-input" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)} />
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
