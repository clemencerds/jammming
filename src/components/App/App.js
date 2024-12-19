import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'
import Spotify from '../../util/Spotify.js'
import './App.css'

function App () {
  const [tracks, setTracks] = useState([]);
  const [term, setTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [playlistName, setPlaylistName] = useState(`Your playlist's name`);
  const [playlistTracks, setPlaylistTracks] = useState ([]);

  const search = () => {
    Spotify.search(term).then(setTracks);
    setIsVisible(!isVisible);
  }
  
  const handleName = (event) => setPlaylistName(event.target.value);

  const addTrack = (track) => {
    setPlaylistTracks((prevTracks) => {
    if (!prevTracks.some(clickedTrack => clickedTrack.id === track.id)) {
      return [...prevTracks, track]
      }
    else {
      return prevTracks;
    }
    })  
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => {
      if (prevTracks.some(clickedTrack => clickedTrack.id === track.id)) {
        const filteredPlaylist = prevTracks.filter((clickedTrack) => track.id !== clickedTrack.id);
        return filteredPlaylist
      }
    })
  };

  const resetPlaylist = () => {
    setPlaylistTracks([]);
    setPlaylistName('my new playlist')
  };

  const savePlaylist = () => {
    const tracksUri = playlistTracks.map((playlistTrack) => playlistTrack.uri);
    Spotify.savePlaylist(playlistName, tracksUri).then(() => resetPlaylist())
  };


  

  return (
    <div>
      <h1>ja<span className='mmm'>mmm</span>ing</h1>
      <SearchBar term={term} 
                 setTerm={setTerm} 
                 onSearch={search}/>
      {isVisible &&
      <div className='app-tracks'>
      <SearchResults tracks={tracks} addTrack={addTrack} />
      <Playlist playlistName={playlistName} 
                handleName={handleName} 
                playlistTracks={playlistTracks} 
                removeTrack={removeTrack} 
                onSave={savePlaylist}/>
      </div>}
    </div>
  )
};


export default App;
