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
    <div className="new-book">
      <p className="new-book-label">ADD NEW BOOK</p>
      <form className="new-book-form">
        <input type="text" className="title-input" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="category-input" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <button
          className="add-book-btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitBookToStore();
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default CreateNewBook;
