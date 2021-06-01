import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
    todos: Todo[],
    toggleTodo: ToggleTodo,
    addTodo: AddTodo
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, addTodo }) => {
    const [text, setText] = useState('');
    return (
        <div>
            <form>
                <input
                    type='text'
                    value={text}
                    onChange={e => {
                        setText(e.target.value)
                    }}
                />
                <button
                    type='submit'
                    onClick={e => {
                        e.preventDefault();
                        addTodo(text);
                        setText('');
                    }}
                >
                    Add Todo
                </button>
            </form>
            <ul>
                {todos.map(todo => (
                    <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
};