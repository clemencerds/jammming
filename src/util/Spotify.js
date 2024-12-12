
const clientId = 'e848b059852542e787585917f7b62a9b';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
  
  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(term)}&type=track`, 
    { headers: {
        Authorization: `Bearer ${accessToken}`
    }
    }).then(response => {
    return response.json();
    }).then(jsonResponse => {
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  });
  },

// getAccessToken() {
//     if (accessToken) {
//       return Promise.resolve(accessToken); // Return the token if it already exists
//     }
  
//     const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
//     const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  
//     if (accessTokenMatch && expiresInMatch) {
//       accessToken = accessTokenMatch[1];
//       const expiresIn = Number(expiresInMatch[1]);
//       window.setTimeout(() => (accessToken = ''), expiresIn * 1000); // Clear token after expiration
//       window.history.pushState('Access Token', null, '/'); // Clean up URL
//       return Promise.resolve(accessToken); // Resolve with the token
//     } else {
//       // Redirect to Spotify for authentication
//       const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
//       window.location = accessUrl;
//       return Promise.reject('Redirecting for token'); // Explicitly reject since redirection happens
//     }
//   },

//   search(term) {
//     return this.getAccessToken()
//       .then(token => {
//         return fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(term)}&type=track`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       })
//       .then(response => response.json())
//       .then(jsonResponse => {
//         if (!jsonResponse.tracks) {
//           return [];
//         }
//         return jsonResponse.tracks.items.map(track => ({
//           id: track.id,
//           name: track.name,
//           artist: track.artists[0].name,
//           album: track.album.name,
//           uri: track.uri
//         }));
//       })
//       .catch(error => {
//         console.error('Error during search:', error);
//       });
//   },
  

  savePlaylist (playlistName, tracksUri) {
    const accessToken = Spotify.getAccessToken();
    let userId;

    return fetch ('https://api.spotify.com/v1/me', 
        { headers: { Authorization: `Bearer ${accessToken}`}
        }).then(response => response.json())
    .then (jsonResponse => {
        userId = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
        { method: 'POST',
          headers: {Authorization: `Bearer ${accessToken}`},
          body: JSON.stringify({name: playlistName})
        }).then(response => response.json())
    .then (jsonResponse => {
        let playlistId = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
        { method: 'POST',
          headers: {Authorization: `Bearer ${accessToken}`},
          body: JSON.stringify({uris: tracksUri})
        })
    }
    )
    } 
    )}

};
    

export default Spotify;