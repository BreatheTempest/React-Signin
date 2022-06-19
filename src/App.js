import { useState } from 'react';
import LoginForm from './components/LoginForm';

export default function App() {
	const [users, setUsers] = useState([
		{
			username: 'Admin',
			email: 'admin@admin.com',
			password: 'admin123',
		},
	]);

	function newUser(user) {
		setUsers((prevUsers) => [
			...prevUsers,
			{
				username: user.username,
				email: user.email,
				password: user.password,
			},
		]);
	}

	const [user, setUser] = useState({
		username: 'Admin',
		email: '',
	});

	const [error, setError] = useState('');

	function login(details) {
		if (
			users.some(
				(user) =>
					user.email === details.email && user.password === details.password
			)
		) {
			setUser({
				username: users.filter((user) => {
					let name;
					if (user.email === details.email) {
						name = user.username;
					}
					return name;
				})[0].username,
				email: details.email,
			});
		} else {
			setError('Details do not match!');
		}
	}

	function signup(details) {
		if (details.password !== details.confirmPassword) {
			setError('Passwords do not match');
			return;
		}
		if (
			users.some(
				(user) =>
					user.email === details.email || user.username === details.username
			)
		) {
			setError('Email of Username already exist');
			return;
		}
		if (!details.isChecked) {
			setError('You can not sign up before reading the rules');
			return;
		}
		newUser(details);
		setUser({
			username: details.username,
			email: details.email,
		});
	}

	function logout() {
		setUser({
			username: '',
			email: '',
		});
	}

	return (
		<div className="container">
			{user.email ? (
				<div className="welcome">
					<h2>
						Welcome, <span>{user.username}!</span>
					</h2>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<LoginForm login={login} error={error} signup={signup} />
			)}
		</div>
	);
}
