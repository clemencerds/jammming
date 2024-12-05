import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'
import Spotify from '/Users/clemence2/Projects/jammming/src/util/Spotify.js'

function App () {
  const [tracks, setTracks] = useState([]);

  const [term, setTerm] = useState('');

  const search = () => {
    Spotify.search(term).then(setTracks);
  }

  const [playlistName, setPlaylistName] = useState('My new playlist');
  const handleName = (event) => setPlaylistName(event.target.value);


  const [playlistTracks, setPlaylistTracks] = useState ([]);

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
      <h1>jammming</h1>
      <SearchBar term={term} setTerm={setTerm} onSearch={search}/>
      <SearchResults tracks={tracks} addTrack={addTrack} />
      <Playlist playlistName={playlistName} 
                handleName={handleName} 
                playlistTracks={playlistTracks} 
                removeTrack={removeTrack} 
                onSave={savePlaylist}/>
    </div>
  )
};

export default App;
