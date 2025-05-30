import { Navbar } from "./Navbar"
import { MyPlayLists } from "./MyPlayLists"
import { FeaturedPlayLists } from "./FeaturedPlayLists"
import { getAccessToken, redirectToAuthCodeFlow } from "../../helpers/AuthSpotify"
import { useState, useEffect } from "react"


const HomePage = () => {
  
  const [token, setToken] = useState(null);

  useEffect(() => {
    const clientId = "5c70a0c86c6745c094768654037b6ba4";
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const storedToken = localStorage.getItem("access_token");

    if (storedToken) {
      setToken(storedToken);
      return;
    }

    async function fetchAccessToken() {
      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        const accessToken = await getAccessToken(clientId, code);
        localStorage.setItem("access_token", accessToken); 
        setToken(accessToken);

        
        window.history.replaceState({}, document.title, "/");
      }
    }

    fetchAccessToken();
  }, []);

  return (
    <>
      {token ? (<Navbar token={token}></Navbar>) : (<></>)}
      <MyPlayLists></MyPlayLists>
      <FeaturedPlayLists></FeaturedPlayLists>
    </>
  )
}

export default HomePage
