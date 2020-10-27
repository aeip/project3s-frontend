import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Foyer} from './Foyer';
import {Grandhall} from './Grandhall';
import {Courtyard} from './Courtyard';
import {Win} from '../Titles/Win';

export const Rooms = (prop) => {
	let props = prop.props;
	console.log('props: ' + props.currentCharacter.username);
	const handleRooms = () => {

	};
	return (
		<div className='rooms'>
			<Switch>
				<Route
					exact
					path='/game'
					render={(rp) => <Foyer {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/grandhall'
					render={(rp) => <Grandhall {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/courtyard'
					render={(rp) => <Courtyard {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/fin'
					render={(rp) => <Win {...rp} props={props} />}
				/>
			</Switch>
		</div>
	);
};
