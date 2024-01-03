import React from 'react'

function HeroDescription() {
    return (
        <div className=' py-10'>
            <div className='flex justify-center items-center'>
                <img src="src/images/x_cut.svg" />
                <div className='text-center font-inter text-base text-gray-700 w-2/3 font-semibold'> Only KredX’s AP Solution lets you automate and streamline your entire PO-to-Pay process without messing up your existing processes. That’s because we support all native functionality for 40+ ERPs</div>
                <img src="src/images/x_cut.svg" className=' rotate-y-170' />
            </div>
        </div>
    )
}

export default HeroDescription
