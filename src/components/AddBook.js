import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/bookSlice';
import BooksDisplay from './BooksDisplay';

const AddBook = () => {
  const dispatch = useDispatch();
  const [booksData, setBooksData] = useState({ title: '', author: '' });

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setBooksData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleBooks = () => {
    if (booksData.title && booksData.author) {
      dispatch(addBook(booksData));
      setBooksData({
        title: '',
        author: '',
      });
    }
  };
  const books = useSelector((state) => state.books);
  return (
    <>
      <section>
        <article className="">
          {books.map((book) => (
            <BooksDisplay
              key={book.item_id}
              bookId={book.item_id}
              title={book.title}
              author={book.author}
            />
          ))}
        </article>
        <form action="">
          <h3>Add New Book</h3>
          <input name="title" type="text" placeholder="Book title..." value={booksData.title} onChange={handleEvent} />
          <input name="author" type="text" placeholder="Book author..." value={booksData.author} onChange={handleEvent} />
          <button type="button" className="add-btn" onClick={handleBooks}>Add Book</button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
