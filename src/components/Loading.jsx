const Loading = () => {
    return (
        <div className="flex justify-center items-center h-16">
            <div className="flex space-x-2">
                <div className="h-3 w-3 bg-black rounded-full animate-wave"></div>
                <div className="h-3 w-3 bg-black rounded-full animate-wave animation-delay-200"></div>
                <div className="h-3 w-3 bg-black rounded-full animate-wave animation-delay-400"></div>
                <div className="h-3 w-3 bg-black rounded-full animate-wave animation-delay-600"></div>
                <div className="h-3 w-3 bg-black rounded-full animate-wave animation-delay-800"></div>
            </div>
        </div>
    )
}

export default Loading
