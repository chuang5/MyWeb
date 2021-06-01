import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { initialTodos } from './initialTodos';

function App() {
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
		<>
			<AddTodoForm addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} />

		</>
	);
}

export default App;
