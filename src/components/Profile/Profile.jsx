import { useNavigate } from "react-router";
import useFetchPlaylist from "../../Hooks/useFetchPlaylist";
import useFetchProfile from "../../Hooks/useFetchProfile";
import useFetchTopArtist from "../../Hooks/useFetchTopArtist";

function Profile() {
  let navigate = useNavigate();
  const token = window.localStorage.getItem("access_token");
  const userData = useFetchProfile(token);
  const userDataPlaylist = useFetchPlaylist(token);
  const userDataTopArtist = useFetchTopArtist(token);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4 bg-sky-100  ">
        <div className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xs transition-all duration-300 hover:shadow-2xl">
          <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-600 relative">
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <img
                className="h-24 w-24 rounded-full border-4 border-white object-cover"
                src={userData?.images[0].url}
                alt="Profile picture"
              />
            </div>
          </div>

          <div className="pt-16 pb-8 px-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">
              {userData?.display_name}
            </h3>

            <div className="flex justify-center space-x-6 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {userDataPlaylist?.total}
                </p>
                <p className="text-sm text-gray-500">Playlists</p>
              </div>
            </div>           

            <div className="flex justify-center space-x-6 mt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Feature Artists</p>
              </div>
            </div>

            <div className="mt-8 flex text-center">
              {userDataTopArtist ? (
                userDataTopArtist.items.map((item) => {
                  return (
                    <>
                      <div className="flex-1">
                        <img
                          className="w-24 h-24 mx-auto rounded-full border-4 border-white object-cover"
                          src={item.images[2].url}
                          alt="Artist profile image"
                        />
                        <a
                          href="#"
                          className="text-center mt-4 text-gray-400 hover:text-indigo-500 transition-colors duration-200"
                        >
                          <i className="fab fa-twitter text-xl">{item.name}</i>
                        </a>
                      </div>
                    </>
                  );
                })
              ) : (
                <h1>Loading data</h1>
              )}
            </div>
          </div>

          <div className="flex justify-center space-x-6 my-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Feature Genres</p>
            </div>
          </div>

          <div className="px-6 pb-8">
            <div className="flex flex-wrap justify-evenly gap-2">
              {userDataTopArtist ? (
                userDataTopArtist.items.map((item) => {
                  return (
                    <>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
                        {item.genres[0]}
                      </span>
                    </>
                  );
                })
              ) : (
                <h1>Loading data</h1>
              )}
            </div>
          </div>

          <div className="my-8 w-full px-6 flex justify-center space-x-3">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
