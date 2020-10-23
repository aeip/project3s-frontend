//Import Basics
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
//Components
import Game from '../Game/Game'
import Character from '../Character/Character'
import Interactions from '../Interactions/Interactions'
import Inventory from '../Inventory/Inventory'
import Rooms from '../Rooms/Rooms'
import ThreeD from '../ThreeD/ThreeD'
//Result Components
import Titles from '../Titles/Titles'
// import Start from '../Results/Start'
// import Win from '../Results/Win'
// import Death from '../Results/Death'

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
