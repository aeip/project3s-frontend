import React from 'react';
import {Character} from '../Character/Character';
import {Interactions} from '../Interactions/Interactions';
import {Rooms} from '../Rooms/Rooms';
import './Game.scss'
export const Game = (props) => {

    if(props.currentCharacter.HP === 0){
        props.deathReason(1)
        props.history.push('/lose')
    }

    if(props.currentCharacter.MadnessLevel > 15){
        props.deathReason(2)
        props.history.push('/lose')
    }

    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        console.log( "This page is reloaded" );
      } else {
        console.log( "This page is not reloaded");
      }

	return (
    <div className='game'>
        <Character />
        <Interactions />
        <h1>Dunwich Manor</h1>
        <Rooms props={props} />
    </div>
    )
};
