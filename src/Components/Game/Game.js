import React from 'react';
import {Character} from '../Character/Character';
import {Interactions} from '../Interactions/Interactions';
import {Rooms} from '../Rooms/Rooms';

export const Game = (props) => {
	return (
    <div className='game'>
        <Character />
        <Interactions />
        <Rooms props={props} />
    </div>
    )
};
