import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SpotifyWebApi from "spotify-web-api-node";
import { SpotifyApiContext } from "react-spotify-api";

//var SpotifyWebApi = require("spotify-web-api-node");

var clientId = "4c81413cf4dc43b1af31736cf14c3041",
  clientSecret = "6154168c68b540159a1a36e53e9bb039";

// Create the api object with the credentials
/*var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
});*/

/*spotifyApi.setAccessToken(
  "BQBDMY4pW75R498x2CE48TL82w7VsInqvZMY3zdgf235dWNghlqrOUugD2vsP8MBi1J-P8j6OlhHQnoR3fi8X2_PW0Nn_xcLEG6g-ywQpOZsMtPWdyXqiaHtGGhglFu6eOYKtRRtEXPPBLg"
);*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
