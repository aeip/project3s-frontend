//Import Basics
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//Game Component
import { Game } from '../Game/Game';
//Result Component
import { Titles } from '../Titles/Titles';
//Scoreboard Component
import { Scoreboard } from '../Scoreboard/Scoreboard';

function App() {
	//vars
	const url = 'http://project3s-backend.herokuapp.com';
	const [title, setTitle] = useState('start');
	// const [characters, setCharacters] = useState([]);
	// const [items, setItems] = useState([]);
	const [scoreboards, setScoreboards] = useState([]);

	//empty character
	const emptyCharacter = {
		HP: 100,
		MadnessLevel: 0,
		inventory: [],
		events: [],
		username: '',
		currentRoom: 'Foyer',
		score: 0,
	};
	//current character state to bring character data from one component to appjs (here)
	const [currentCharacter, setCurrentCharacter] = useState(emptyCharacter);

	//get methods
	// const getCharacter = () => {
	//  fetch(url + '/character/')
	//      .then((response) => response.json())
	//      .then((data) => {
	//          setCharacters(data);
	//      });
	// };
	// const getItem = () => {
	//  fetch(url + '/item/')
	//      .then((response) => response.json())
	//      .then((data) => {
	//          setItems(data);
	//      });
	// };
	const getScoreboard = () => {
		fetch(url + '/score/')
			.then((response) => response.json())
			.then((data) => {
				setScoreboards(data);
			});
	};

	// const getCharacterByUsername = (character) => {
	//  fetch(url + '/character/' + character.username)
	//      .then((response) => response.json())
	//      .then((data) => {
	//          setCurrentCharacter(data);
	//      });
	// };

	//create methods
	const handleCreateCharacter = (newCharacter) => {
		fetch(url + '/character/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCharacter),
		}).then((response) => setCurrentCharacter(newCharacter));
	};

	//update methods
	// const handleUpdateCharacter = (character) => {
	// 	fetch(url + '/character/' + character.username, {
	// 		method: 'put',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(character),
	// 	});
	// };
	const handleUpdateCharacter = (character, item) => {
	 fetch(url + '/character/' + character.username + '/' + item, {
	     method: 'put',
	     headers: {
	         'Content-Type': 'application/json',
	     }
	 });
	};
	const handleUpdateScoreboard = (character) => {
		fetch(url + '/score/' + character._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		}).then(() => getScoreboard());
	};

	//delete methods
	const deleteScoreboard = () => {
		fetch(url + '/score/', {
			method: 'delete',
		}).then(() => getScoreboard());
	};

	//useEffect
	useEffect(() => {
		// getCharacter();
		// getItem();
		getScoreboard();
	}, []);

	//handle methods
	const handleStart = () => {
		setTitle('start');
	};
	const handleWin = () => {
		setTitle('win');
	};
	const handleDeath = () => {
		setTitle('death');
	};
	return (
		<div className='App'>
			<Switch>
				<Route
					exact
					path='/'
					render={(rp) => (
						<>
							<Titles
								{...rp}
								title={title}
								character={currentCharacter}
								handleSubmit={handleCreateCharacter}
							/>
						</>
					)}
				/>
				<Route
					path='/game/'
					render={(rp) => (
						<>
							<Game
								{...rp}
								handleUpdateCharacter={handleUpdateCharacter}
								currentCharacter={currentCharacter}
								scoreboards={scoreboards}
								handleStart={handleStart}
								handleWin={handleWin}
								handleDeath={handleDeath}
							/>
						</>
					)}
				/>
				<Route
					exact
					path='/score/'
					render={(rp) => (
						<>
							<Scoreboard />
						</>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
