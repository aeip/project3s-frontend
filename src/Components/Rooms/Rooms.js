import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Foyer} from './Foyer';
import {Grandhall} from './Grandhall';
import {Courtyard} from './Courtyard';
import {Fin} from './Fin';

export const Rooms = (props) => {
	return (
		<div className='rooms'>
			<Switch>
				<Route exact path='/foyer/' render={(rp) => <Foyer {...rp} />} />
				<Route
					exact
					path='/grandhall/'
					render={(rp) => <Grandhall {...rp} />}
				/>
				<Route
					exact
					path='/courtyard/'
					render={(rp) => <Courtyard {...rp} />}
				/>
				<Route exact path='/fin/' render={(rp) => <Fin {...rp} />} />
			</Switch>
		</div>
	);
};
