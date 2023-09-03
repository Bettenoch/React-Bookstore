import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromList } from '../Redux/books/bookSlice';
import '../styles/BooksDisplay.css';

const BooksDisplay = ({
  id, category, title, author,
}) => {
  const percentage = Math.floor(Math.random() * 100);
  const dispatch = useDispatch();

  return (
    <>
      <section className="book-container">
        <ul className="books-to-read">
          <li>
            <p className="book-category">{category}</p>
            <p className="book-title">{title}</p>
            <p className="book-author">{author}</p>
            <ul className="book-btns">
              <li><button type="button" className="removeButton" onClick={() => dispatch(deleteBookFromList(id))}>Remove</button></li>
              <li><span>Comments</span></li>
              <li><span>Edit</span></li>
            </ul>
          </li>
          <li className="book-details">
            <ul className="add-info">
              <li className="progress-bar">
                <div className="circular-icon" />
                <div className="circular-report">
                  <span className="percentage">{`${percentage}%`}</span>
                  <span className="progress-report">Completed</span>
                </div>
              </li>
              <li className="progress-details">
                <span className="book-chapter">CURRENT CHAPTER</span>
                <h4 className="current-chapter">Chapter 10</h4>
                <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
              </li>
            </ul>
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
