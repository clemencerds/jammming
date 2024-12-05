import React, {useState} from 'react';


function SearchResults ({tracks, addTrack}) {
    

    return (
        <div>
            <h2>Results</h2>
            
        <ul className="list-group">
            {tracks.map(track => 
            <li className="list-group-item" key= {track.id}>
                <h3>{track.name}</h3>
                <p>{track.artist} - {track.album}</p>
                <button className="btn btn-outline-dark" onClick= {() => addTrack(track)} >+</button>
            </li>)}     
        </ul>
        </div>
    )
    
};

export default SearchResults;
