import React from 'react'
import "../../styles/index.css"
import 'tailwindcss/tailwind.css';
import HeroDescription from './HeroDescription';
import Button from '../core/Button';


function HeroSection() {
    return (
        <>
            <div
                className="relative "
            >
                <img src="src/images/hero_bg.png" />
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                >
                    <div className=" px-24 py-8">
                        <div className="text-white ">
                            <img src='src/images/kred_logo.png' className=' w-48' />
                            <div className='flex flex-col gap-5 mt-32'>
                                <div className=" w-96  text-white text-6xl font-semibold ">Automate Your Finance Function</div>
                                <div className="text-white text-4xl font-bold  capitalize">WITHOUT Reworking Your ERP</div>

                            </div>
                            <Button buttonLabel='Learn more' />
                        </div>
                    </div>
                </div>
            </div >
            <HeroDescription />
        </>
    )
}

export default HeroSection
