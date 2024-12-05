import React, {useState} from 'react';


function Playlist({onSave ,playlistName, handleName, playlistTracks=[], removeTrack}) {

const savePlaylist = () => {
    onSave(savePlaylist);
}


return (
    <div>
        <input className="form-control me-2" type='text' id='playlistName' value={playlistName} onChange={handleName}/>
        <ul className="list-group">
            {playlistTracks.map(track => 
            <li className="list-group-item" key= {track.id}>
                <h3>{track.name}</h3>
                <p>{track.artist} - {track.album}</p>
                <button className="btn btn-outline-dark" onClick= {() => removeTrack(track)} >-</button>
            </li>)}     
        </ul>
        <button type='button' className='btn btn-outline-dark' onClick={savePlaylist}>save to Spotify</button>
    </div>
)
};


export default Playlist;