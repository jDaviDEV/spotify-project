import { useEffect, useState } from "react";

export default function useFetchPlaylist(token) {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    if (!token) return;

    async function fetchData() {
      const result = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await result.json();
      setPlaylist(data);
    }

    fetchData();
  }, [token]);

  return playlist;
}