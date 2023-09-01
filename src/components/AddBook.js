import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { postBooks, getBooks } from '../Redux/books/bookSlice';
import BooksDisplay from './BooksDisplay';

const AddBook = () => {
  const bookList = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(getBooks('books'));
  }, [dispatch]);

  const submitBooks = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(postBooks(book));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const entries = Object.entries(bookList.books);

  return (
    <>
      <section>
        <article className="book-co">
          {entries.map(([key, book]) => (
            <BooksDisplay
              key={key}
              itemId={key}
              book={book[0]}
            />
          ))}
        </article>
        <form onSubmit={submitBooks}>
          <h3>Add New Book</h3>
          <input type="text" id="title" value={title} placeholder="Book title..." required onChange={(e) => { setTitle(e.target.value); }} />
          <input type="text" id="author" value={author} placeholder="Book author..." required onChange={(e) => { setAuthor(e.target.value); }} />
          <select onChange={(e) => setCategory(e.target.value)} className="all-categories">
            <option>Category</option>
            <option>Romance</option>
            <option>Business</option>
            <option>Philosophy</option>
          </select>
          <button type="submit" className="add-btn">Add Book</button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
