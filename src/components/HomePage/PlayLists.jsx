export const PlayLists = () => {
  return (
    <>
      <div className="p-10">
        <div class="text-center py-6 text-6xl">
          <h1>PlayList</h1>
        </div>
        <div class="flex flex-row">
          <div class="basis-1/3 bg-amber-400 mx-6 rounded-2xl">
            <div class="text-center text-2xl text-gray-700 pt-1">
              <h1>Rock</h1>
            </div>
            <div class="p-6">
              <img src="https://placehold.co/600x400" alt="" />
            </div>
            <div class="text-center p-1">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="basis-1/3 bg-amber-400 mx-6 rounded-2xl">
            <div class="text-center text-2xl text-gray-700 pt-1">
              <h1>Hiphop</h1>
            </div>
            <div class="p-6">
              <img src="https://placehold.co/600x400" alt="" />
            </div>
            <div class="text-center p-1">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="basis-1/3 bg-amber-400 mx-6 rounded-2xl">
            <div class="text-center text-2xl text-gray-700 pt-1">
              <h1>Classic</h1>
            </div>
            <div class="p-6">
              <img src="https://placehold.co/600x400" alt="" />
            </div>
            <div class="text-center p-1">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
