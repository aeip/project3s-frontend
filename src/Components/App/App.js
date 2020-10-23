//Import Basics
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
//Game Component
import Game from '../Game/Game'
//Result Component
import Titles from '../Titles/Titles'

function App() {
  return (
		<div className='App'>
			<Switch>
				<Route
					exact
					path='/'
					render={(rp) => (
						<>
							<Titles {...rp} />
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
