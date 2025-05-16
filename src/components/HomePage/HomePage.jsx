import { Navbar } from "./Navbar"
import { MyPlayLists } from "./MyPlayLists"
import { FeaturedPlayLists } from "./FeaturedPlayLists"
import { getAccessToken } from "../../helpers/AuthSpotify"

const HomePage = () => {
  const clientId = "5c70a0c86c6745c094768654037b6ba4";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!window.localStorage.getItem('accessToken')) {
    async function getToken() {
      const accessToken = await getAccessToken(clientId, code);
      window.localStorage.setItem('accessToken', accessToken);
      console.log(accessToken);
    }
    getToken();    
  }


  return (
    <>
      <Navbar></Navbar>
      <MyPlayLists></MyPlayLists>
      <FeaturedPlayLists></FeaturedPlayLists>
    </>
  )
}

export default HomePage
