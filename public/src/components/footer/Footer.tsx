
function Footer() {
    const iconList = [
        "insta",
        "linkedin",
        "face_book",
        "twitter",
        "youtube"
    ]
    return (
        <div>
            <div className="w-screen h-24 bg-slate-900 mt-4 flex justify-between p-4 items-center" >
                <img src="src/images/kredX.svg" className=' w-28' />
                <div className='flex gap-4 items-center'>
                    {iconList.map((item) => (
                        <img src={`src/images/${item}.svg`} className='h-5 w-5 cursor-pointer' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
