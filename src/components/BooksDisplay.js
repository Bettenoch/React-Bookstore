import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromList } from '../Redux/books/bookSlice';

const BooksDisplay = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();

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
  category: PropTypes.string,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

BooksDisplay.defaultProps = {
  category: undefined,
};

export default BooksDisplay;
