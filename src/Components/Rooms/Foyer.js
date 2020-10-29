import React, { useState } from 'react';
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
			<h1>Foyer</h1>

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
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
					<p>You enter the foyer of the grand estate. A lone beam of moonlight shines down to the center of the room.</p> <p>Within it's pale glow is the flash of metal from a steel knife. Looks like someone dropped this in a hurry.</p>
							
					
					<button onClick={() => nextRoom()}>Grand Hall</button>
				</div>
			</div>
		</div>
	);
};
