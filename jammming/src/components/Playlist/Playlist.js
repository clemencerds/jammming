import React, {useState} from 'react';
import Tracklist from '../Tracklist/Tracklist.js'

function Playlist({playlistName, handleName, playlistTracks=[], removeTrack, resetPlaylist}) {

const tracksUri = ['spotify:track:7huo2wvrCgRucUsjdSDLQV', 'spotify:track:09mkdGhqb5ySKVsnkx9hy2', 'spotify:track:1fgvJXlcZ7uIddMpqsqw0L'];



return (
    <div>
        <input className="form-control" type='text' id='playlistName' defaultValue={'my new playlist'} onChange={handleName}/>
        <ul className="list-group">
            {playlistTracks.map(track => 
            <li className="list-group-item" key= {track.id}>
                <h3>{track.name}</h3>
                <p>{track.artist} - {track.album}</p>
                <button onClick= {() => removeTrack(track)} >-</button>
            </li>)}     
        </ul>
        <input type='submit' className='btn btn-outline-dark' value='save to Spotify' onClick={resetPlaylist} />
    </div>
)
};


export default Playlist;