import { useState } from 'react';

export default function LoginForm({ login, error }) {
	const [details, setDetails] = useState({
		name: '',
		email: '',
		password: '',
	});

	const submitHandle = (e) => {
		e.preventDefault();
		login(details);
	};

	const changeForm = (e) => {
		const { name, value } = e.target;
		setDetails((prevDetails) => ({
			...prevDetails,
			[name]: value,
		}));
	};

	return (
		<form onSubmit={submitHandle}>
			<div className="form-inner"></div>
			<h2>Login</h2>
			{error ? <div className="error">{error}</div> : ''}
			<div className="form-group">
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					name="name"
					id="name"
					onChange={changeForm}
					value={details.name}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email: </label>
				<input
					type="email"
					name="email"
					id="email"
					onChange={changeForm}
					value={details.email}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={changeForm}
					value={details.password}
				/>
			</div>
			<button>Login</button>
		</form>
	);
}
