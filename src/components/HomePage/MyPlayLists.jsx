import useFetchPlaylist from "../../Hooks/useFetchPlaylist";
import { addPlaylistToFirestore } from "../../helpers/FirebaseConnection";

export const MyPlayLists = () => {
  const token = window.localStorage.getItem("access_token");
  const userDataPlaylists = useFetchPlaylist(token);

  return (
    <>
      <div className="p-10">
        <div className="text-center py-8 text-6xl">
          <h1 className="text-shadow-lg text-shadow-fuchsia-950 font-extrabold text-blue-950">
            {" "}
            🎶 MY PLAYLISTS 🎶
          </h1>
        </div>
        <div className="flex flex-row">
          {userDataPlaylists ? (
            userDataPlaylists.items.map((item) => {
              return (
                <>
                  <div className="basis-1/3 bg-red-500 mx-6 rounded-2xl text-amber-50 shadow-indigo-900 shadow-2xl hover:scale-105 duration-1000">
                    <div className="text-center text-shadow-lg text-shadow-red-600 pt-1 font-extrabold text-4xl">
                      <h1>{item.name}</h1>
                    </div>
                    <div className="p-6">
                      <img src={item.images[0].url} alt="" />
                    </div>
                    <div className="text-center p-1 text-shadow-lg text-shadow-black">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1>Loding Playlists</h1>
          )}
        </div>
        <div className="text-center mt-6 align-middle justify-center">
          <button onClick={()=>{addPlaylistToFirestore(userDataPlaylists)}} className="text-white text-3xl bg-black rounded-2xl my-auto w-auto p-2 cursor-pointer hover:scale-105">
            Save Playlists
          </button>
        </div>
      </div>
    </>
  );
};
