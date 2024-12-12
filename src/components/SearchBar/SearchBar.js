import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar({onSearch, term, setTerm}) {
    
    const handleTerm = (event) => setTerm(event.target.value);

    const search = (event) => onSearch(term);

    return (
        <div className="container searchBar">
        <nav className="p-3 mb-2 bg-transparent text-body">
            <div className="container-fluid">
            <form className="d-flex" role="search">
                <input className="form-control me-2" 
                       id="searchBar" type="search" 
                       aria-label="Search" 
                       onChange={handleTerm}
                       placeholder='Enter a song, artist or album' 
                       value={term}/>
                <button className="btn btn-outline-dark" 
                        type="button" 
                        onClick= {search}
                >
                Search
                </button>
            </form>
            </div>
        </nav>
        </div>
    )
}

export default SearchBar;
