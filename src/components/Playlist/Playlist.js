import React, {useState} from 'react';
import './Playlist.css'

function Playlist({onSave ,playlistName, handleName, playlistTracks=[], removeTrack}) {

const savePlaylist = () => {
    onSave(savePlaylist);
}


return (
    <div className='playlist'>
        <input className="form" type='text' id='playlistName' value={playlistName} onChange={handleName}/>
        <ul className="list-group">
            {playlistTracks.map(track => 
            <li className="list-group-item" key= {track.id}>
                <div className='track'>
                <h3>{track.name}</h3>
                <p>{track.artist} - {track.album}</p>
                </div>
                <button className="btn btn-outline-light" onClick= {() => removeTrack(track)} >-</button>
            </li>)}     
        </ul>
        <button id="save" type='button' className='btn btn-outline-dark' onClick={savePlaylist}>save to Spotify</button>
    </div>
)
};


export default Playlist;