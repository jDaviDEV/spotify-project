import { useEffect, useState } from "react";

export default function useFetchTopArtist(token) {
  const [topArtist, setTopArtist] = useState(null);

  useEffect(() => {
    if (!token) return;

    async function fetchData() {
      const result = await fetch("https://api.spotify.com/v1/me/top/artists?limit=3", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await result.json();
      setTopArtist(data);
    }

    fetchData();
  }, [token]);

  return topArtist;
}