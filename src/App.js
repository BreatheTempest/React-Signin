import { useState } from 'react';
import LoginForm from './components/LoginForm';

export default function App() {
	const adminUser = {
		email: 'admin@admin.com',
		password: 'admin123',
	};

	const [user, setUser] = useState({
		name: '',
		email: '',
	});

	const [error, setError] = useState('');

	function login(details) {
		if (
			details.email === adminUser.email &&
			details.password === adminUser.password
		) {
			if (!details.name) {
				setError('Name should not be empty');
				return;
			}
			setUser({
				name: details.name,
				email: details.email,
			});
		} else {
			setError('Details do not match!');
		}
	}

	function logout() {
		setUser({
			name: '',
			email: '',
		});
	}

	return (
		<div className="app">
			{user.email ? (
				<div className="welcome">
					<h2>
						Welcome, <span>{user.name}</span>
					</h2>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<LoginForm login={login} error={error} />
			)}
		</div>
	);
}
