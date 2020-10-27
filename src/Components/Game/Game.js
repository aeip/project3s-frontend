import React from 'react';
import {Character} from '../Character/Character';
import {Interactions} from '../Interactions/Interactions';
import {Inventory} from '../Inventory/Inventory';
import {Rooms} from '../Rooms/Rooms';

export const Game = (props) => {
	return (
    <div className='game'>
        <Character />
        <Interactions />
        <Inventory props={props} />
        <Rooms props={props} />
    </div>
    )
};
