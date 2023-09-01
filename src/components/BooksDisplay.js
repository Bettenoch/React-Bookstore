/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromList } from '../Redux/books/bookSlice';

const BooksDisplay = ({ itemId, book }) => {
  const dispatch = useDispatch();

  const {
    title, author, category,
  } = book;
  const id = itemId;
  return (
    <>
      <section>
        <ul className="books-to-read">
          <li>
            <p className="bookTitle">{category}</p>
            <p className="bookTitle">{title}</p>
            <p className="book-author">{author}</p>
            <button type="button" className="removeButton" onClick={() => dispatch(deleteBookFromList(id))}>Remove</button>
          </li>
        </ul>
      </section>

    </>
  );
};

BooksDisplay.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  itemId: PropTypes.string,
};

BooksDisplay.defaultProps = {
  book: {
    item_id: '', title: '', author: '', category: '',
  },
  itemId: '',
};

export default BooksDisplay;
