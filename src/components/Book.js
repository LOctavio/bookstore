import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title } = props;
  return (
    <li>
      <span>
        {title}
        {' - '}
        {author}
      </span>
      <button type="submit">Delete</button>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
