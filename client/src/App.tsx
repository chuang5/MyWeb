import { Switch, Route, Link } from 'react-router-dom';
import { Signup } from './components/auth/Signup';
import { Login } from './components/auth/Login';
import { Landing } from './components/landing/Landing';

function App() {

	return (
		<div>
			<div>Say Hello</div>
			<ul>
				<li><Link to='/'><button>Login</button></Link></li>
				<li><Link to='/signup'><button>Signup</button></Link></li>
			</ul>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/home' component={Landing} />
				{/* <Route path='/TodoList' component={TodoList} /> */}
			</Switch>
		</div>
	);
}

export default App;
