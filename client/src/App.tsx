import { Switch, Route, Link } from 'react-router-dom';
import { Signup } from './components/auth/Signup';
import { Login } from './components/auth/Login';
import { Landing } from './components/landing/Landing';
import { Header } from './components/header/Header';

function App() {
	const authentication : Authentication ={
		isAuthenticated: localStorage.getItem('token') != null ? true : false
	};
	return (
		<div>
			<div>Say Hello</div>
			<Header authentication={authentication}/>
			<ul>
				<li><Link to='/'><button>Login</button></Link></li>
				<li><Link to='/signup'><button>Signup</button></Link></li>
			</ul>
			<Switch>
				<Route exact path='/'>
					<Login authentication={authentication} />
				</Route>
				<Route exact path='/signup'>
					<Signup authentication={authentication} />
				</Route>
				<Route path='/home' component={Landing} />
				{/* <Route path='/TodoList' component={TodoList} /> */}
			</Switch>
		</div>
	);
}

export default App;
