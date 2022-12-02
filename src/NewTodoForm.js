import React, { useState } from 'react';
import Todo from './Todo';

const NewTodoForm = ({ addTodo }) => {

    const [formData, setFormData] = useState("");
    const handleChange = (e) => {
        const { task, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [task]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Task</label>
            <input
                type="text"
                name="task"
                placeholder="Todo Task"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    )

}

export default NewTodoForm;