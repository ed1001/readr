import React from 'react';
import './SearchBar.css'

const SearchBar = ({ searchQuery, updateSearchQuery }) => {
    return (
        <form>
            <input 
                type="search" 
                className="input-search-bar" 
                name="search" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
                />
        </form>  
    )
}

export default SearchBar;