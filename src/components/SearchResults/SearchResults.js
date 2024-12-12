import React, {useState} from 'react';
import './SearchResults.css'

function SearchResults ({tracks, addTrack}) {

    return (
        <div className='searchResults'>
            <h2>Results</h2>
            <ul className="list-group">
                {tracks.map(track => 
                <li className="list-group-item" key= {track.id}>
                    <div className='track'>
                        <h3>{track.name}</h3>
                        <p>{track.artist} - {track.album}</p>
                    </div>
                    <button className="btn btn-outline-light" onClick= {() => addTrack(track)} >+</button>
                </li>)}     
            </ul>
        </div>
    )
    
};

export default SearchResults;
