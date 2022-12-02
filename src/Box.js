import React from 'react';

const Box = ({ id, handleRemove, width = 5, height = 5, backgroundColor = 'blue' }) => {
    const remove = () => {
        return (
            <div>
                <div
                    style={{
                        height: `${height}em`,
                        width: `${width}em`,
                        backgroundColor
                    }}
                >
                    <button onClick={remove}>Remove the box</button>
                </div>
            </div>
        )
    }
}

export default Box;