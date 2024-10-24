import React, { useState } from 'react';

function SearchBar() {
    const [search, setSearch] = useState('');
    const handleChange = (event) => setSearch(event.target.value);

    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </nav>
        
    )
}

export default SearchBar;
