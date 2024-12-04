import React, { useState } from 'react';

function SearchBar({onSearch, term, setTerm}) {
    
    const handleTerm = (event) => setTerm(event.target.value);

    const search = (event) => {
        event.preventDefault();
        onSearch(term)
    };

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            <form className="d-flex" role="search">
                <input className="form-control me-2" 
                       id="searchBar" type="search" 
                       aria-label="Search" 
                       onChange={handleTerm} 
                       value={term}/>
                <button className="btn btn-outline-success" 
                        type="button" 
                        onClick={search}>
                Search
                </button>
            </form>
            </div>
        </nav>
        
    )
}

export default SearchBar;
