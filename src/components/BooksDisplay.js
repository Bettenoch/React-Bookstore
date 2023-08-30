import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/bookSlice';

const BooksDisplay = ({ bookId, title, author }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook({ id: bookId }));
  };
  return (
    <>
      <section>
        <ul className="books-to-read">
          <li>
            <p className="bookTitle">{title}</p>
            <p className="book-author">{author}</p>
            <button type="button" className="delete-btn" onClick={handleDelete}>Remove</button>
          </li>
        </ul>
      </section>

    </>
  );
};

BooksDisplay.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BooksDisplay;
