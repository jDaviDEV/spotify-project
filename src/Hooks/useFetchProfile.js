import { useEffect, useState } from "react";

export default function useFetchProfile(token) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!token) return;

    async function fetchData() {
      const result = await fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await result.json();
      setProfile(data);
    }

    fetchData();
  }, [token]);

  return profile;
}