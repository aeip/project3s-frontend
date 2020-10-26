//Import Basics
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
//Game Component
import {Game} from '../Game/Game'
//Result Component
import {Titles} from '../Titles/Titles'

function App() {
	//vars
	const url = 'http://project3s-backend.herokuapp.com/';
	const [title, setTitle] = useState('start');
	const [characters, setCharacters] = useState([]);
	const [items, setItems] = useState([]);
	const [scoreboards, setScoreboards] = useState([]);

	//get methods
	const getCharacter = () => {

	}
	const getItem = () => {

	}
	const getScoreboard = () => {

	}

	//create methods
	const handleCreateCharacter = (newCharacter) => {

	}

	//update methods
	const handleUpdateCharacter = () => {

	}
	const handleUpdateScoreboard = () => {

	}

	//delete methods
	const deleteCharacter = (character) => {

	}
	const deleteScoreboard = (scoreboard) => {

	}

	//useEffect
	useEffect(() => {

	},[]);

	//handle methods
	const handleStart = () => {

	}
	const handleWin = () => {

	}
	const handleDeath = () => {

	}
  return (
		<div className='App'>
			<Switch>
				<Route
					exact
					path='/'
					render={(rp) => (
						<>
							<Titles {...rp} title={title} />
						</>
					)}
				/>
				<Route
					exact
					path='/game/'
					render={(rp) => (
						<>
							<Game {...rp} />
						</>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
