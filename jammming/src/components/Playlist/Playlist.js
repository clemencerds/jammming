import React, {useState} from 'react';
import Tracklist from '../Tracklist/Tracklist.js'

function Playlist() {
const [playlistName, setPlaylistName] = useState('New playlist');
const handleClick = (event) => setPlaylistName(event.target.value);
const [playlistTracks, setPlaylistTracks] = useState ('');


return (
    <div>
        <h2 onClick={handleClick}>{playlistName}</h2>
        <Tracklist/>
    </div>
)
};


export default Playlist;
