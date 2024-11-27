import React, { useState } from 'react';

function SearchBar() {
    const [search, setSearch] = useState('');
    const handleChange = (event) => setSearch(event.target.value);

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </nav>
        
    )
}

export default SearchBar;
