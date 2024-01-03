import React from 'react'
import "../../styles/index.css"
import PropTypes from 'prop-types'

interface ButtonProps {
    buttonLabel: string,
    className: string,
}

function Button({ buttonLabel, className }: ButtonProps) {
    return (
        <div className={` px-5 mt-4 text-white bg-teal-400 rounded-md fit-content p-2 ${className}`}   >{buttonLabel}</div>

    )
}

export default Button
Button.propTypes = {
    buttonLabel: PropTypes.string,
}