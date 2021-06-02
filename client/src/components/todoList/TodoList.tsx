import React, { useState } from "react";
import { initialTodos } from "../../mockups/initialTodos";
import { TodoListItem } from "./TodoListItem";

interface Props {
    todos: Todo[],
    toggleTodo: ToggleTodo,
    addTodo: AddTodo
}

export const TodoList: React.FC<Props> = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(initialTodos);
	const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map(todo => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete
				};
			}
			return todo;
		});
		setTodos(newTodos);
	}

	const addTodo: AddTodo = (text: string) => {
		const newTodo: Todo = { text, complete: false };
		setTodos([...todos, newTodo]);
	}

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