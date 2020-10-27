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
						props.handleSubmit(formData);
						props.history.push('/game/');
					} else {
                        setCheckUser(true);
                    }
				});
		};
		checkUsername();
	};
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<div className='start'>
			<h1>Dunwich Manor</h1>
            {checkUser ? <p>Please enter a unique username</p> : null}
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					value={FormData.username}
					onChange={handleChange}
					placeholder='Enter username'
				/>
				<br />
				<input type='submit' value='Start' />
			</form>
		</div>
	);
};
