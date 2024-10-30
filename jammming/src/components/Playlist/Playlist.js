import React, {useState} from 'react';
import Tracklist from '../Tracklist/Tracklist.js'

function Playlist({playlistTracks}) {
const [playlistName, setPlaylistName] = useState('New playlist');
const handleName = (event) => setPlaylistName(event.target.value);




return (
    <div>
        <h2 onClick={handleName}>{playlistName}</h2>
        <ul className="list-group">
            {playlistTracks.map(track => 
            <li className="list-group-item" key= {track.id}>
                <h3>{track.name}</h3>
                <p>{track.artist} - {track.album}</p>
                <button>-</button>
            </li>)}     
        </ul>
    </div>
)
};


export default Playlist;