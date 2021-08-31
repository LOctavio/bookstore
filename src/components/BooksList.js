import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BooksList;