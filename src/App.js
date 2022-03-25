import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import { Movieform, Movieslist, Search } from './components';

const title = 'Favorite Movie Directory';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchItems, setSearchedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <h8k-navbar header={title} />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform movies={movies} setMovies={setMovies} />
        </div>
        <div className='layout-column w-30'>
          <Search
            setSearchQuery={setSearchQuery}
            setSearchedItems={setSearchedItems}
            searchItems={searchItems}
            movies={movies}
          />
          {searchItems.length === 0 && searchQuery.length > 1 ? (
            <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
          ) : movies.length > 0 ? (
            <Movieslist list={searchItems.length > 0 ? searchItems : movies} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
