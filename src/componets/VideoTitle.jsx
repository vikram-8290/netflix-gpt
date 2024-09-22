const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" bg-opacity-80 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 max-w-2xl">
            <h1 className="text-4xl font-extrabold mb-4 tracking-wide leading-tight">
                {title}
            </h1>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {overview}
            </p>
            <div className="flex space-x-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-110 font-semibold">
                    Play
                </button>
                <button className="bg-gray-800 bg-opacity-60 text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 font-semibold">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
