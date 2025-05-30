import useFetchDocs from "../../helpers/FirebaseConnection";

export const FeaturedPlayLists = () => {
  const playlistData = useFetchDocs();

  return (
    <>
      <div className="p-10">
        <div className="text-center py-8 text-6xl">
          <h1 className="text-shadow-lg text-shadow-fuchsia-950 font-extrabold text-blue-950">
            🎶 PLAYLISTS FROM ALL USERS 🎶
          </h1>
        </div>
        <div className="flex flex-row">
          {playlistData ? (
            playlistData.map((item) => {
              return (
                <>
                  <div className="basis-1/3 bg-red-500 mx-6 rounded-2xl text-amber-50 shadow-indigo-900 shadow-2xl hover:scale-105 duration-1000">
                    <div className="text-center text-shadow-lg text-shadow-red-600 pt-1 font-extrabold text-4xl">
                      <h1>{item.playlistName}</h1>
                    </div>
                    <div className="p-6">
                      <img src={item.playlistImg} alt="" />
                    </div>
                    <div className="text-center p-1 text-shadow-lg text-shadow-black">
                      <p>{item.playlistDescription}</p>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1>Loding Playlists</h1>
          )}
        </div>
        
      </div>
    </>
  );
};
