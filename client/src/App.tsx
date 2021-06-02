import React, { useState } from 'react';
import { Login } from './components/login/Login';
import { TodoList } from './components/todoList/TodoList';
import { initialTodos } from './mockups/initialTodos';

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
			<Login />
			{/* <AddTodoForm addTodo={addTodo} /> */}
			{/* <TodoList todos={todos} toggleTodo={toggleTodo} addTodo={addTodo}/> */}

		</>
	);
}

export default App;
