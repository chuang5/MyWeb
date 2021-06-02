import { Switch, Route } from 'react-router-dom';
import { Signup } from './components/auth/Signup';
import { Login } from './components/auth/Login';

function App() {
	
	return (
		<Switch>
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			{/* <Route path='/TodoList' component={TodoList} /> */}
		</Switch>
	);
}

export default App;
