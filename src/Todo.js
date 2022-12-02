import React, { useState } from 'react';

const Todo = ({ id, task }) => {


    return (
        <div>
            <li>{task}</li>

        </div>
    )
}

export default Todo;