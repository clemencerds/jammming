import React, {useState} from 'react';
import Playlist from '../Playlist/Playlist.js';
import Tracklist from '../Tracklist/Tracklist.js';

function SearchResults ({tracks, toggleTrack}) {
    

    return (
        <div>
            <h2>Results</h2>
            
        <ul className="list-group">
            {tracks.map(track => 
            <li className="list-group-item" key= {track.id}>
                <h3>{track.name}</h3>
                <p>{track.artist} - {track.album}</p>
                <button onClick= {() => toggleTrack(track)} >+</button>
            </li>)}     
        </ul>
        </div>
    )
    
};

export default SearchResults;
