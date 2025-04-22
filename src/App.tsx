// App.tsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <div className="container">
      <h1 className="my-4 text-center">📚 Book Search App</h1>
      <SearchBar onSearch={setSearchTerm} />

      <div className="img-container">

      <p className='d-flex flex-wrap'><BookList searchTerm={searchTerm} /></p>
      </div>
    </div>
            
          </>
        );
      }
      
      export default App;
  
