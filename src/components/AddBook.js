import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { postBooks, getBooks } from '../Redux/books/bookSlice';
import BooksDisplay from './BooksDisplay';

const AddBook = () => {
  const allBooks = useSelector((store) => store.book);
  const books = useSelector((store) => store.book.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  let display;

  if (allBooks.status === 'loading') {
    display = <span>Loading...</span>;
  } else if (allBooks.status === 'failed') {
    display = <span>Something went wrong!</span>;
  } else {
    const entries = Object.keys(books);
    display = entries.map((book) => {
      const bookInfo = books[book];
      return (
        <article key={book}>
          <BooksDisplay
            id={book}
            category={bookInfo[0].category}
            title={bookInfo[0].title}
            author={bookInfo[0].author}
          />

        </article>
      );
    });
  }

  const handleEvent = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const submitBooks = (e) => {
    e.preventDefault();
    if (book.title.trim() && book.author.trim()) {
      dispatch(postBooks({
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: 'Fiction',
      }));
    }
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <>
      <section>
        <article className="book-co">
          {display}
        </article>
        <form onSubmit={submitBooks}>
          <h3>Add New Book</h3>
          <input type="text" name="title" id="title" value={book.title} placeholder="Book title..." onChange={handleEvent} required />
          <input type="text" name="author" id="author" value={book.author} placeholder="Book author..." onChange={handleEvent} required />
          <button type="submit" className="add-btn">Add Book</button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
