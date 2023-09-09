import React, { useState, useEffect } from "react";
import useTrendingBooks from "../Hooks/useTrendingBooks";
import "../App.css";


function TrendingBooks() {
  const { loading, error, books } = useTrendingBooks();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="trend-container">
      <h2>Trending Books</h2>
      <div className="scroll">
        {books.map((book, index) => (
          <div key={index} className="book-container">
            <h3>{book.title}</h3>
            <p>Authors: {book.authors.join(', ')}</p>
            <p>Page Count: {book.pageCount}</p>
            <img src={book.imageUrl} alt={book.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingBooks;