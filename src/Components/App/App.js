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
import {Win} from '../Titles/Win'
import {Death} from '../Titles/Death'

function App() {
	//vars
	const url = 'http://project3s-backend.herokuapp.com';
	const [title, setTitle] = useState('start');
	const [scoreboards, setScoreboards] = useState([]);
	const [death, setDeath] = useState('')
	
	//handle death reason
	const deathReason = (number) => {
		
		if(number = 1){ //health hit 0
			setDeath('You ran out of life...')
		}else if (number = 2){ //madness over 15
			setDeath('The mansion drove you insane...')
		} else if (number = 3){ //bad ending
			setDeath("Something did not want you there")
		}
	}

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
	const getScoreboard = () => {
		fetch(url + '/score/')
			.then((response) => response.json())
			.then((data) => {
				setScoreboards(data);
			});
	};

	const handleSignIn = (character) => {
		fetch(url + '/character/' + character.username)
		.then((response) => response.json())
		.then((data) => {
			setCurrentCharacter(data)
			console.log('data', data)
		})
	}

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
	const handleUpdateCharacter = (character, item) => {
	 fetch(url + '/character/' + character.username + '/' + item, {
	     method: 'put',
	     headers: {
	         'Content-Type': 'application/json',
		 },
	 })
	 .then((response) => handleSignIn(character))
	};
	const handleUpdateCharacterRoom = (character, room) => {
		fetch(url + '/character/' + character.username + '/room/' + room, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	const handleUpdateHP = (character, HP) => {
		fetch(url + '/character/' + character.username + '/HP/' + HP, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	const handleUpdateMadness = (character, madness) => {
		fetch(url + '/character/' + character.username + '/madness/' + madness, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	
	const handleUpdateCharacterScore = (character, score) => {
		fetch(url + '/character/' + character.username + '/score/' + score, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

	//useEffect
	useEffect(() => {
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
								handleSignIn={handleSignIn}
								handleSubmitCreate={handleCreateCharacter}
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
								handleUpdateHP={handleUpdateHP}
								handleUpdateMadness={handleUpdateMadness}
								handleUpdateCharacter={handleUpdateCharacter}
								handleUpdateCharacterRoom={handleUpdateCharacterRoom}
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
				<Route
					exact
					path='/win'
					render={(rp) => <Win {...rp}  />}
				/>
				<Route
					exact
					path='/lose'
					render={(rp) => <Death {...rp}  />}
				/>
			</Switch>
		</div>
	);
}

export default App;
