//Import Basics
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';
//Game Component
import { Game } from '../Game/Game';
//Result Component
import { Titles } from '../Titles/Titles';
//Scoreboard Component
import { Scoreboard } from '../Scoreboard/Scoreboard';
import {Win} from '../Titles/Win'
import {Death} from '../Titles/Death'
import {About} from '../Titles/About'

function App() {
	//vars
	const url = 'http://project3s-backend.herokuapp.com';
	const [title, setTitle] = useState('start');
	const [scoreboards, setScoreboards] = useState([]);
	const [death, setDeath] = useState('')
	

	//handle death reason
	const deathReason = (num) => {
		console.log('num', num)
		if(num === 1){ //health hit 0
			setDeath('You ran out of life...')
		}else if (num === 2){ //madness over 15
			setDeath('The mansion drove you insane...')
		} else if (num === 3){ //bad ending
			setDeath("Something did not want you there. You need to defend yourself...")
		}
		handleUpdateMadness(currentCharacter, -currentCharacter.MadnessLevel)
		handleUpdateHP(currentCharacter, 0, true)
		handleResetInventory(currentCharacter)
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
		axios({
			url: url + '/score',
			
		}).then((response) => setScoreboards(response.data))
			
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

	const handleResetInventory = (currentCharacter) => {
		console.log('reset!')
		fetch(url + '/character/' + currentCharacter.username + '/reset/died', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((response) => handleSignIn(currentCharacter))
	}

	const handleUpdateCharacterRoom = (character, room) => {
		fetch(url + '/character/' + character.username + '/room/' + room, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	const handleUpdateHP = (character, HP, boolean) => {
		console.log('health')
		let newAmount
		if(boolean){
			newAmount = 100
		}else{
			newAmount = currentCharacter.HP - HP
		}
		fetch(url + '/character/' + character.username + '/HP/' + newAmount, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => handleSignIn(character))
	}
	const handleUpdateMadness = (character, madness) => {
		let newAmount = character.MadnessLevel + madness
		console.log('madness', madness, newAmount, character)
		fetch(url + '/character/' + character.username + '/madness/' + newAmount, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => handleSignIn(character))
	}
	
	const handleUpdateCharacterScore = (character, score) => {
		fetch(url + '/character/' + character.username + '/score/' + score, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => getScoreboard())
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
								deathReason={deathReason}
							/>
						</>
					)}
				/>
				<Route
					exact
					path='/score/'
					render={(rp) => (
						<>
							<Scoreboard {...rp} scoreboard={scoreboards} />
						</>
					)}
				/>
				<Route
					exact
					path='/win'
					render={(rp) => <Win {...rp} 
					currentCharacter={currentCharacter} 
					handleUpdateCharacterScore={handleUpdateCharacterScore}
					/>}
				/>
				<Route
					exact
					path='/lose'
					render={(rp) => <Death {...rp}  death={death}/>}
				/>
				<Route exact path='/about' component={About} />
			</Switch>
		</div>
	);
}

export default App;
