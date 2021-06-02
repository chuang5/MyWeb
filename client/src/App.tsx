import React, { useState } from 'react';
import { Login } from './components/login/Login';
import { Switch, Route } from 'react-router-dom';
import { TodoList } from './components/todoList/TodoList';
import { initialTodos } from './mockups/initialTodos';
import { Signup } from './components/login/Signup';

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
		<Switch>
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
		</Switch>
	);
}

export default App;
