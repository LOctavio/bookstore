import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          category={book.category}
          item_id={book.item_id}
        />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BooksList;
