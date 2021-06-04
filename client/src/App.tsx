import { Switch, Route } from 'react-router-dom';
import { Signup } from './components/auth/Signup';
import { Login } from './components/auth/Login';
import { Landing } from './components/landing/Landing';
import { Header } from './components/header/Header';
import { LoadUser } from './components/auth/LoadUser';


function App() {
	const authentication: Authentication = {
		isAuthenticated: localStorage.getItem('token') != null ? true : false,
		username: ''
	};
	// load current user
    authentication.username = LoadUser();
	console.log(authentication.username)

	return (
		<div>
			<Header authentication={authentication} />
			<div style={{paddingLeft: '5%', paddingRight: '5%'}}>
				<Switch>
					<Route exact path='/'>
						<Login authentication={authentication} />
					</Route>
					<Route path='/signup'>
						<Signup authentication={authentication} />
					</Route>
					<Route path='/home'>
						<Landing authentication={authentication} />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
