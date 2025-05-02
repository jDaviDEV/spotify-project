import { Link } from "react-router";

const WrongPath = () => {
    return (
        <>
            <div className="text-center">
                <h1>No bangers here!, go back</h1>

                <Link to="/">
                    <button
                        className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300
                         hover:border-gray-900 hover:bg-gray-700 text-sm text-gray-400 p-3  rounded-lg
                         tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                        HOMEPAGE
                    </ button>
                </Link>
            </div>
        </>
    )
}

export default WrongPath;
