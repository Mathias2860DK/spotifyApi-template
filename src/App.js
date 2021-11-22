import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");

  const getplayList = (evt) => {
    //	https://api.spotify.com/v1/users/{user_id}/playlists
    let user_id = "mathimathi123";
    axios(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
      /*   setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })*/
      console.log(tracksResponse);
      console.log(tracksResponse.data.items[0].owner.display_name);
    });
  };
  const getFifty = (evt) => {
    let id = "7iL6o9tox1zgHpKUfh9vuC";
    console.log(token);
    axios(`https://api.spotify.com/v1/tracks/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
      /*   setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })*/
      console.log(tracksResponse);
      console.log(tracksResponse.data.name);
    });
  };

  useEffect(() => {
    var clientId = process.env.REACT_APP_CLIENT_ID;
    var clientSecret = process.env.REACT_APP_CLIENT_SECRET;

    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      console.log(tokenResponse.data.access_token);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button /*onClick={handleSubmit}*/>Api test button</button>

      <button onClick={getplayList}>getplayList</button>
      <button onClick={getFifty}>get 50 cent</button>
    </div>
  );
}

export default App;
