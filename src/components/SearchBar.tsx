// components/SearchBar.tsx
import React, { useState } from 'react';

interface Props {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
      <input
        type="text"
        className="form-control me-2 w-50"
        placeholder="Search books..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
