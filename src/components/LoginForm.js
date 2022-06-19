import { useState } from 'react';

import facebookLogo from '../icons/icons8-facebook.svg';
import googleLogo from '../icons/icons8-google.svg';
import twitterLogo from '../icons/icons8-twitter.svg';

export default function LoginForm({ login, error, signup }) {
	const [details, setDetails] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		isChecked: false,
	});

	const [status, setStatus] = useState('Sign Up');
	const isStatusSignUp = status === 'Sign Up';

	const submitHandle = (e) => {
		e.preventDefault();
		if (isStatusSignUp) signup(details);
		else login(details);
	};

	const changeForm = (e) => {
		const { name, value, type, checked } = e.target;
		console.log(checked);
		setDetails((prevDetails) => ({
			...prevDetails,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	function changeStatus() {
		setStatus(isStatusSignUp ? 'Sign In' : 'Sign Up');
	}

	return (
		<form onSubmit={submitHandle}>
			<div className="inner-form">
				<h2>{status}</h2>
				{error && <div className="error">{error}</div>}
				{isStatusSignUp ? (
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
						onChange={changeForm}
						value={details.username}
						required
						attribute="username"
					/>
				) : (
					''
				)}
				<input
					type="email"
					name="email"
					id="email"
					onChange={changeForm}
					value={details.email}
					placeholder="Email"
					required
					attribute="on"
				/>
				<input
					placeholder="Password"
					type="password"
					name="password"
					id="password"
					onChange={changeForm}
					value={details.password}
					required
					attribute="new-password"
				/>
				{isStatusSignUp ? (
					<input
						type="password"
						name="confirmPassword"
						id="confirm-password"
						placeholder="Confirm Password"
						onChange={changeForm}
						value={details.confirmPassword}
						required
						attribute="current-password"
					/>
				) : (
					''
				)}
				{isStatusSignUp ? (
					<div className="terms">
						<input
							type="checkbox"
							name="isChecked"
							id="terms"
							onChange={changeForm}
							value={details.confirmPassword}
							checked={details.isChecked}
						/>
						<p>
							By signing up you accept the <span>Term of service</span> and{' '}
							<span> Privacy Policy</span>
						</p>
					</div>
				) : (
					''
				)}
				{!isStatusSignUp ? (
					<div className="remember-password">
						<input
							type="checkbox"
							name="rememberMe"
							id="remember-me"
							onChange={changeForm}
							value={details.confirmPassword}
						/>
						<label htmlFor="remember-me">Remember me</label>
						<span>Forgot Password?</span>
					</div>
				) : (
					''
				)}

				<button>{status}</button>

				{!isStatusSignUp ? (
					<div className="social-media-container">
						<div className="line">
							<hr /> <span>or</span> <hr />
						</div>
						<div className="social-icons">
							<img src={facebookLogo} alt="" />
							<img src={googleLogo} alt="" />
							<img src={twitterLogo} alt="" />
						</div>
					</div>
				) : (
					''
				)}
				{isStatusSignUp ? (
					<div className="change-status">
						Already have an account?
						<span onClick={changeStatus}>Sign In</span>
					</div>
				) : (
					<div className="change-status">
						Don't have an account?
						<span onClick={changeStatus}>Create new one</span>
					</div>
				)}
			</div>
		</form>
	);
}
