import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Foyer} from './Foyer';
import {Grandhall} from './Grandhall';
import {Courtyard} from './Courtyard';
import {GuestBedroom} from './GuestBedroom';
import DiningHall from './DiningHall';
import {BallRoom} from './Ballroom';
import {RecRoom} from './RecRoom';
import {Study} from './Study';
import {Greenhouse} from './Greenhouse';
import {Win} from '../Titles/Win'; 
import {Death} from '../Titles/Death';
import { MasterBedroom } from './MasterBedroom';
import {Kitchen} from './Kitchen';


export const Rooms = (prop) => {
	let props = prop.props;
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
					path='/game/study'
					render={(rp) => <Study {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/kitchen'
					render={(rp) => <Kitchen {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/greenhouse'
					render={(rp) => <Greenhouse {...rp} props={props} />}
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
					path='/game/dininghall'
					render={(rp) => <DiningHall {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/guestbedroom'
					render={(rp) => <GuestBedroom {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/masterbedroom'
					render={(rp) => <MasterBedroom {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/recroom'
					render={(rp) => <RecRoom {...rp} props={props} />}
				/>
				<Route
					exact
					path='/game/ballroom'
					render={(rp) => <BallRoom {...rp} props={props} />}
				/>
				
			</Switch>
		</div>
	);
};
