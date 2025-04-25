import React from 'react';
import './SearchBar.css';
import searchbarImage from '../Assets/searchbar3.png';
import Carousel from '../Carousel';

function SearchBar() {
  return (
    <>
      <div className="searchbar-full-background" style={{ backgroundImage: `url(${searchbarImage})` }}>
        <div className="searchbar-content">
        <h1>Your Complete Healthcare Solution</h1>
        <div className="search-bar">
            <input type="text" placeholder="Search Medicines..." />
            <button type="button">🔍</button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Carousel />
      </div>
    </>
  );
}

export default SearchBar;
