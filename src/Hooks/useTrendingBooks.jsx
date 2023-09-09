import { useEffect, useState } from 'react';
import ApiBase from '../services/api';

const useTrendingBooks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const endpoint = '/volumes';
    const api = new ApiBase (endpoint);

    api.getBooks({})
      .then((data) => {
        const bookInfo = data.items.map((item) => {
          const volumeInfo = item.volumeInfo;
          return {
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            pageCount: volumeInfo.pageCount,
            imageUrl: volumeInfo.imageLinks?.thumbnail, 
          };
        });

        setBooks(bookInfo);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, error, books };
};

export default useTrendingBooks;