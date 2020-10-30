import React, { useState } from 'react';
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/Foyer.scss';
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const Foyer = (prop) => {
	console.log(prop.props.currentCharacter)
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Foyer');
	

	const nextRoom = () => {
		props.history.push('/game/grandhall/');
	};

	
	return (
		<div className='foyer room'>
			

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
					<div className='header'>
						{/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
						<Inventory props={props} />
						<h1>Foyer</h1>
					</div>
					<div className='graphic'>
						{/* Inserting graphic for object/character of situation in question. can be used to show objects, enemies, etc. */}
						<img src='https://i.imgur.com/pNOztsH.png' />
					</div>
				</div>
				<div className='character-panel'>
					<div className='character'></div>
					<div className='health'>
						<div className='health-icon'>
							{/* This is where we insert the code that calls the current number for health */}
							<div className='health-number'>{props.currentCharacter.HP}</div>
						</div>
						
						<div className='madness-icon'>
							{/* This is where we put the code to output the current madness number */}
							<div className='madness-number'>{props.currentCharacter.MadnessLevel}</div>
						</div>
						
					</div>
				</div>
				{/* This will be the location of everything text base and using buttons */}
				<div className='text-box'>
					<p>The entrance for the Dunwich estate. A lone beam of pale blue light shines down to the center of the room. Apparently the moon is the only thing to greet you this evening.</p> 
					<div className='situations'>
						{/* this is where we'll be putting the situations for things like effects and item pickup */}

					</div>
					<p>No sense in turning back, the only other way is into the Grand Hall.</p>		
					<div className='nav-buttons'>
						{/* buttons for navigating the mansion go here */}
						<button onClick={() => nextRoom()}>Enter The Grand Hall</button>
					</div>
				</div>
			</div>
		</div>
	);
};
