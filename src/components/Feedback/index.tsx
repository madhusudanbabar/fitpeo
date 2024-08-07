const Feedback = () => {
    const data = [
        {
            name: "Jenny wilson",
            rating: 4,
            comment:
                "deleniti placeat distinctio adipisci possimus illo cupiditate nihil! Soluta eum dolores cumque?",
        },
        {
            name: "Dianne Russell",
            rating: 5,
            comment:
                "Lorem ipsum, dolo Quod qui eius tenetur sapiente porro perspiciatis, quas beatae totam deleniti placeat",
        },
        {
            name: "Devon Lane",
            rating: 4,
            comment:
                "ure sed nostrum dolore quas eius provident."
        },
    ];
    return <div className="orders bg-zinc-800 rounded-md p-4">
        <b className="text-xl">Customer's Feedback</b>

        <div className="flex flex-col gap-2 overflow-auto max-h-full">
            {data.map((entry, i) => (<div className="border-b-[1px] space-y-1 py-2 border-zinc-700">
                <div className="flex gap-2">
                    <img
                        className="block size-6 rounded-full"
                        src={`http://unsplash.it/50/50?gravity=center?id=${i}`}
                    />
                    {entry.name}
                </div>

                <span className="flex flex-row-reverse mr-auto w-fit">
                    {Array(5 - entry.rating).fill(9).map(() =>
                        <svg className="cursor-pointer text-gray-400 hover:text-yellow-400 duration-100 " width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                    )}
                    {Array(entry.rating).fill(9).map(() =>
                        <svg className="cursor-pointer text-yellow-400 hover:text-yellow-400 duration-100 " width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                    )}
                </span>
                <p>{entry.comment}</p>
            </div>))}
        </div>

    </div>

};

export default Feedback;
