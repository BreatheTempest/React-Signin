import { useState } from 'react';
import LoginForm from './components/LoginForm';

export default function App() {
	const adminUser = {
		username: 'Admin',
		email: 'admin@admin.com',
		password: 'admin123',
	};

	const [user, setUser] = useState({
		name: '',
		email: '',
	});

	const [error, setError] = useState('');

	function login(details) {
		console.log(user.username);
		if (
			details.email === adminUser.email &&
			details.password === adminUser.password
		) {
			setUser({
				// username: details.username,
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
		<div className="container">
			{user.email ? (
				<div className="welcome">
					<h2>
						Welcome, <span>{adminUser.username}!</span>
					</h2>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<LoginForm login={login} error={error} />
			)}
		</div>
	);
}
