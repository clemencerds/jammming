import React from 'react';
/* import Track from '../Track/Track.js';
 */
function Tracklist () {
    const tracks = [
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
];
    const trackAction = () => {
        return (
            <button>+</button>
        )
    }

    return (
        <ul className="list-group">
            {tracks.map(track => 
            <li className="list-group-item" key= {track.id}>
                <h3>{track.name}</h3>
                <p>{track.artist} - {track.album}</p>
                {trackAction()}
            </li>)}     
        </ul>
    )
};

export default Tracklist;
