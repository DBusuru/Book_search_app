// components/BookCard.tsx
import React from 'react';

interface BookProps {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

const BookCard: React.FC<BookProps> = ({ title, author_name, first_publish_year, cover_i }) => {
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';


  return (
    <div className="book-card">
      <img src={coverUrl} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Author: {author_name?.join(', ') || 'Unknown'}</p>
        <p className="card-text">First Published: {first_publish_year || 'N/A'}</p>
      </div>
    </div>
  );
};

export default BookCard;
