import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {

    const INITIAL_STATE = [
        { id: uuidv4(), task: '' }
    ]
    const [todos, setTodo] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setTodo(todo => [...todo, { newTodo, id: uuidv4() }])
    }

    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({ id, task }) => <Todo task={task} />)}
            </div>
        </div>
    )
}

export default TodoList;