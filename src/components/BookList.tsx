// BookList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

interface Book {
  cover_i: any;
  first_publish_year: any;
  key: string;
  title: string;
  author_name?: string[];
}

interface Props {
  searchTerm: string;
}

const BookList: React.FC<Props> = ({ searchTerm }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!searchTerm) return;
      setLoading(true);
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
        setBooks(response.data.docs.slice(0, 10)); // Show only top 10
      } catch (error) {
        console.error('Error fetching books:', error);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [searchTerm]);

  return (
    <div className="book-list d-flex flex-wrap justify-content-center gap-3 mt-4">
      {books.length === 0 && !loading ? (
        <p className="text-center">No books found. Please try a different search term.</p>
      ) : null}
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
            <BookCard
              key={book.key}
              title={book.title}
              author_name={book.author_name}
              first_publish_year={book.first_publish_year}
              cover_i={book.cover_i}
            />
          ))
          
      )}:
    </div>
  );
};

export default BookList;
