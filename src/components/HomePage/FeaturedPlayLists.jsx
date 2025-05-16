export const FeaturedPlayLists = () => {
    return (
        <>
            <div className="p-10">
                <div className="text-center py-6 text-6xl">
                    <h1>Featured PlayLists</h1>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/3 bg-amber-950 mx-6 rounded-2xl">
                        <div className="text-center text-2xl text-gray-700 pt-1">
                            <h1>Rock</h1>
                        </div>
                        <div className="p-6">
                            <img src="https://placehold.co/600x400" alt="" />
                        </div>
                        <div className="text-center p-1">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>

                    <div className="basis-1/3 bg-amber-950 mx-6 rounded-2xl">
                        <div className="text-center text-2xl text-gray-700 pt-1">
                            <h1>Hiphop</h1>
                        </div>
                        <div className="p-6">
                            <img src="https://placehold.co/600x400" alt="" />
                        </div>
                        <div className="text-center p-1">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>

                    <div className="basis-1/3 bg-amber-950 mx-6 rounded-2xl">
                        <div className="text-center text-2xl text-gray-700 pt-1">
                            <h1>Classic</h1>
                        </div>
                        <div className="p-6">
                            <img src="https://placehold.co/600x400" alt="" />
                        </div>
                        <div className="text-center p-1">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
