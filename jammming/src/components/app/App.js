import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'

function App () {
  const [tracks, setTracks] = useState([
    {
    name : 'aint no other man',
    artist : 'Christina Aguilera',
    album : 'Back to Basics',
    id : 'id1'
    },
    {
    name : 'bootylicious',
    artist : 'Destinys Child',
    album : 'Survivor',
    id : 'id2'
    },
    {
    name : 'love dont cost a thing',
    artist : 'Jennifer Lopez',
    album : 'J.Lo',
    id : 'id3'
    }
  ]);

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


  return (
    <div>
      <h1>jammming</h1>
      <SearchBar />
      <SearchResults tracks={tracks} addTrack={addTrack} />
      <Playlist playlistTracks={playlistTracks} removeTrack={removeTrack}/>
    </div>
  )
}

export default App;
