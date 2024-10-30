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
// const toggleTrack = ({target}) => {
//     const clickedTrack = target.value;
//     setPlaylistTracks((prev) => {
//         if (prev.includes(clickedTrack)) {
//             return prev.filter (t => t!== clickedTrack);
//         }
//         else {
//             return [clickedTrack, ...prev];
//         }
//     })
// };
  // const toggleTrack = (track, clickedTrack) => {
  //   setPlaylistTracks((prev) => {
  //             if (prev.includes(clickedTrack)) {
  //                 return prev.filter (track => track.id!== clickedTrack.id);
  //             }
  //             else {
  //                 return [clickedTrack, ...prev];
  //             }
  //   })
  // }

  const toggleTrack = (track) => {
    setPlaylistTracks((prevTracks) => {
    if (!prevTracks.some(clickedTrack => clickedTrack.id === track.id)) {
      return [...prevTracks, track]
      }
    else {
      return prevTracks;
    }
    })  
  };


  return (
    <div>
      <h1>jammming</h1>
      <SearchBar />
      <SearchResults tracks={tracks} toggleTrack={toggleTrack} />
      <Playlist playlistTracks={playlistTracks}/>
    </div>
  )
}

export default App;
