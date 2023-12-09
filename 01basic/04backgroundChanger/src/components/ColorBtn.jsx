import React from 'react'

const ColorBtn = ({ colorName, handleClick, cName, textColor }) => {

    return (
        <>
            <button
                className={cName}
                onClick={handleClick}
                style={{
                    background: colorName,
                    color: textColor
                }}
            >
                {colorName}
            </button>
        </>
    )
}

export default ColorBtn
