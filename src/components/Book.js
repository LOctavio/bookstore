import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BsCircle } from 'react-icons/bs';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const DeleteBookFromStore = (book) => {
    dispatch(removeBook(book));
  };

  const { category, title } = props;
  return (
    <li className="book-container">
      <div className="book-info">
        <span className="category">{category}</span>
        <span className="title">{title}</span>
        <span className="author">Luis Octavio</span>
        <div className="book-actions">
          <input type="button" value="Comments" className="book-action" />
          <div className="line-between" />
          <input type="button" value="Remove" className="book-action" onClick={() => DeleteBookFromStore(props)} />
          <div className="line-between" />
          <input type="button" value="Edit" className="book-action" />
        </div>
      </div>
      <div className="progress">
        <BsCircle className="progress-circle" />
        <div className="progress-info">
          <span className="progress-percentage">0%</span>
          <span className="completed-label">Completed</span>
        </div>
      </div>
      <div className="line-between-2" />
      <div className="current-chapter-info">
        <span className="current-chapter-label">CURRENT CHAPTER</span>
        <span className="current-chapter">Chapter 1</span>
        <input type="button" value="UPDATE PROGRESS" className="update-progress" />
      </div>
    </li>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
