export default async function handler(req, res) {
  let body = "grant_type=refresh_token";
  body += "&refresh_token=" + process.env.REFRESH_TOKEN;
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
    },
    body,
  });

  const spotifyResponse = await response.json();

  if (!spotifyResponse) res.json({ message: "something went wrong" });

  const recentplays = await fetch("https://api.spotify.com/v1/me/player", {
    headers: {
      Authorization: `Bearer ${spotifyResponse.access_token}`,
      "Content-Type": "application/json",
    },
  });
  
  if (recentplays.status === 200) {
    const songData = await recentplays.json();
    if (songData.is_playing && songData.currently_playing_type === "track") {
      let artists = [];
      for (let i = 0; i < songData.item.artists.length; i++) {
        artists.push(songData.item.artists[i].name);
      }
      res.status(200).json({
        name: songData.item.name,
        artist: artists.join(", "),
        link: songData.item.external_urls.spotify,
      });
    } else {
      res.json({ name: "Not Playing", artist: "Spotify", link: "" });
    }
  } else {
    res.json({ name: "Not Playing", artist: "Spotify", link: "" });
  }
}
