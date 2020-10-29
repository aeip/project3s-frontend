import React, { useState } from 'react';

export const Start = (prop) => {
	let props = prop.props;
	const [formData, setFormData] = useState(props.character);
	const [checkUser, setCheckUser] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		const url = 'http://project3s-backend.herokuapp.com';
		const checkUsername = () => {
			fetch(url + '/character/' + formData.username)
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
                        console.log('creating new');
						props.handleSubmitCreate(formData);
						props.history.push('/game/');
					} else {
                        console.log('searching for found user');
						fetch(
							url + '/character/' + formData.username + '/' + formData.password
						)
							.then((response) => response.json())
							.then((data) => {
								if (!data) {
                                    console.log('wrong password')
									setCheckUser(true);
								} else {
                                    console.log('you was right')
									props.handleSignIn(formData);
									props.history.push('/game/');
									
								}
							});
					}
				});
		};
		checkUsername();
	};
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const toScore = () => {
		props.history.push('/score')
	}

	const toAbout = () => {
		props.history.push('/about')
	}

	return (
		<div className='start'>
			<h1>Dunwich Manor</h1>
			<p>Create an account or Sign In</p>
			{checkUser ? (
				<p>Your username exists but that is the wrong password.</p>
			) : null}
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					value={FormData.username}
					onChange={handleChange}
					placeholder='Enter username'
				/>
				<input
					type='text'
					name='password'
					value={FormData.password}
					onChange={handleChange}
					placeholder='Enter password'
				/>
				<br />
				<input type='submit' value='Start' />
			</form>
			<button onClick={() => toScore()}>Highscores</button>
			<button onClick={() => toAbout()}>About</button>
		</div>
	);
};
