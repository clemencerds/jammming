import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'

function App () {
  return (
    <div>
      <h1>jammming</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  )
}

export default App;
