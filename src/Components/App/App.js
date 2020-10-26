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
	const url = 'http://project3s-backend.herokuapp.com/';
	const [title, setTitle] = useState('start');
	const [characters, setCharacters] = useState([]);
	const [items, setItems] = useState([]);
	const [scoreboards, setScoreboards] = useState([]);

	//empty chararacter
	const emptyCharacter = {
		HP: 100,
		MadnessLevel: 0,
		inventory: [],
		events: [],
		username: '',
		currentRoom: '',
		score: 0,
	};

	//get methods
	const getCharacter = () => {
		fetch(url + '/character/')
			.then((response) => response.json())
			.then((data) => {
				setCharacters(data);
			});
	};
	const getItem = () => {
		fetch(url + '/item/')
			.then((response) => response.json())
			.then((data) => {
				setItems(data);
			});
	};
	const getScoreboard = () => {
		fetch(url + '/score/')
			.then((response) => response.json())
			.then((data) => {
				setScoreboards(data);
			});
	};

	//create methods
	const handleCreateCharacter = (newCharacter) => {
		fetch(url + '/character/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCharacter),
		}).then((response) => getCharacter());
	};

	//update methods
	const handleUpdateCharacter = (character) => {
		fetch(url + '/character/' + character._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		}).then(() => getCharacter());
	};
	const handleUpdateCharacterItems = (character, item) => {
		fetch(url + '/character/' + character._id + '/' + item, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(item),
		}).then(() => getCharacter());
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
	const deleteCharacter = (character) => {};
	const deleteScoreboard = (scoreboard) => {};

	//useEffect
	useEffect(() => {
		getCharacter();
		getItem();
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
								handleCreateCharacter={handleCreateCharacter}
							/>
						</>
					)}
				/>
				<Route
					exact
					path='/game/'
					render={(rp) => (
						<>
							<Game
								{...rp}
								characters={characters}
								items={items}
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
