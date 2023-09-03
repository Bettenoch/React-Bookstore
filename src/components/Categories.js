import React from 'react';
import '../styles/Categories.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkBookStatus } from '../Redux/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <article className="categories-container">
        <article className="min-container">
          <h4>{categories}</h4>
          <button
            className="check-status-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(checkBookStatus());
            }}
          >
            Check Status
          </button>
        </article>
      </article>
    </>
  );
};

export default Categories;
