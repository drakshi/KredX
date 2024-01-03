function CarouselList() {

    const carouselConfig = [
        {
            id: 1,
            bgColor: "linear-gradient(93deg, #093A71 22.59%, #1F9EA6 95.57%)",
            showGradient: true,
            title: "Increase bottom line by reducing costs and increasing efficiency",
            description: "",
            color: "text-white",
        },
        {
            id: 2,
            bgColor: "bg-neutral-50",
            description: "",
            title: "A tool for CFOs to analyze the cash flow and simulate what-if scenarios",
            color: "text-black"
        },
        {
            id: 3,
            bgColor: "bg-neutral-50",
            description: "",
            title: "Use integrated financing to fulfill cash flow gaps just in time ",
            color: "text-black"
        }
    ];

    const descriptionList = [
        "Automations to increase the efficiency in both AP and AR sides.",
        "On time follow-ups with customers enables quicker realization of revenues",
        "Reduced human effort can be utilized to focus on increasing revenues"
    ]
    return (
        <div className="flex justify-between items-center ">
            <div>

                {carouselConfig.map((item) => (
                    <div>
                        {item?.showGradient ? <div className='relative'><img src="src/images/gradient.svg" className='w-98 my-4  rounded-bl-md rounded-tl-md ' />
                            <div className={` w-98 p-3 my-4 ${item.bgColor} absolute -top-5 rounded-bl-md rounded-tl-md  flex justify-between items-center`} >
                                <div className='text-white'>{item.title}</div>
                                <img src="src/images/arrow.svg" className='h-5 w-5 cursor-pointer' />
                            </div>
                        </div> : <div className={`w-96 p-3 my-4 ${item.bgColor}  rounded-xl shadow flex justify-between items-center gap-5`} style={{ backgroundColor: item.bgColor }}>
                            <div>{item.title}</div>
                            <img src="src/images/arrow.svg" className='h-5 w-5 cursor-pointer' />
                        </div>}
                    </div>

                ))}
            </div>
            <div className="w-96 text-white p-4 h-60 flex items center flex-col bg-teal-500 rounded-tr-md rounded-bl-md rounded-br-md shadow" >
                {descriptionList.map((item) => (
                    <div className='px-4 p-4 text-sm flex gap-5'>
                        <img src="src/images/bullets.svg" />
                        <div>{item}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CarouselList
