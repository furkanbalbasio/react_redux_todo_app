import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    return (
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo({ id: todo.id}))}>
                            Sil
                        </button>
                    </li>
                ))
            }
        </ul>
    );
};

export default TodoList;
