import React from 'react'
import PropTypes from 'prop-types'

interface CapablityListingItemProps {
    icon: string;
    title: string;
    description: string;
}

function CapablityListingItem({ icon, title, description }: CapablityListingItemProps) {
    return (
        <div className="p-2">
            {/* Adjust the 'w-1/4' class to control the width of each item */}
            <div className="flex flex-col items-center">
                <img src={`src/images/${icon}.svg`} className="w-10 mb-4 text-center" />
                <div className=" text-center text-sky-900 text-sm font-bold mb-2">{title}</div>
                <div className="text-center text-sm">{description}</div>
            </div>
        </div>
    )
}

export default CapablityListingItem
CapablityListingItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}