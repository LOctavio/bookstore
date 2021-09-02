import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const DeleteBookFromStore = (book) => {
    dispatch(removeBook(book));
  };

  const { category, title } = props;
  return (
    <li>
      <span>
        {title}
        {' - '}
        {category}
      </span>
      <input type="button" value="Delete" onClick={() => DeleteBookFromStore(props)} />
    </li>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
