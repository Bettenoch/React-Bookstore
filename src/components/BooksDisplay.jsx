import React from 'react';
import AddBook from './AddBook';

const BooksDisplay = () => (
  <>
    <section>
      <ul className="books-to-read">
        <li>
          <span>BookState</span>
          <button type="button" className="delete-btn">Delete</button>
        </li>
      </ul>
    </section>
    <AddBook />
  </>
);

export default BooksDisplay;
