import { Login } from './components/login/Login';
import { Switch, Route } from 'react-router-dom';
import { Signup } from './components/login/Signup';

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
