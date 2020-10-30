import React from 'react';
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/GrandHall.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'
import {DropdownButton} from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'

export const Grandhall = (prop) => {
    let props = prop.props;
	props.handleUpdateCharacterRoom(props.currentCharacter, 'Grandhall');
	
	const nextCourtyard = () => {
		props.history.push('/game/courtyard/');
	};
	const nextFoyer = () => {
		props.history.push('/game/');
	};
	const nextDiningHall = () => {
		if(props.currentCharacter.inventory.includes('Dining Hall Key')){
			props.history.push('/game/dininghall/');
		} else {
			alert("The door is locked")
			props.handleUpdateMadness(props.currentCharacter, 1)
		}
	};
	const nextArtGallery = () => {
		props.history.push('/game/artgallery/');
	};
	const nextBallroom = () => {
		props.history.push('/game/ballroom/');
	};
	const nextRecRoom = () => {
		if(props.currentCharacter.inventory.includes('Rec Room Key')){
			props.history.push('/game/recroom/');
		} else {
			alert("The door is locked")
			props.handleUpdateMadness(props.currentCharacter, 1)
		}
	};
	const nextMasterBedroom = () => {
		props.history.push('/game/masterbedroom/');
	};
	const nextGuestBedroom = () => {
		if(props.currentCharacter.inventory.includes('Guest Bedroom Key')){
			props.history.push('/game/guestbedroom/');
			
		} else {
			alert("The door is locked")
			props.handleUpdateMadness(props.currentCharacter, 1)
		}
		
	};

	return (
		<div className='grandhall room'>
			

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
					
					<div className='header'>
						{/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
						<Inventory props={props} />
						<h1>Grand Hall</h1>
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
				<p>The Grand Hall stretches the entire length of the Dunwich Manor. <br/> There are floorboards missing and a blanket of dust on the surfaces to reflect the manor's neglect over the years.</p>
				<div className='situations'>
						{/* this is where we'll be putting the situations for things like effects and item pickup */}

				</div>
				<p>This is the main access to nearly every room in the manor.</p>
				<div className='nav-buttons'>
					{/* buttons for navigating the mansion go here */}
					<DropdownButton id="dropdown-basic-button" title="Where to?">
						<Dropdown.Item ><button onClick={() => nextCourtyard()}>Courtyard</button></Dropdown.Item>
						<Dropdown.Item ><button onClick={() => nextGuestBedroom()}>Guest Bedroom</button></Dropdown.Item> 
						<Dropdown.Item ><button onClick={() => nextMasterBedroom()}>Master Bedroom</button></Dropdown.Item>
						<Dropdown.Item ><button onClick={() => nextBallroom()}>Ballroom</button></Dropdown.Item> 
						<Dropdown.Item ><button onClick={() => nextRecRoom()}>Rec Room</button></Dropdown.Item>
						<Dropdown.Item ><button onClick={() => nextArtGallery()}>Art Gallery</button></Dropdown.Item>
						<Dropdown.Item ><button onClick={() => nextDiningHall()}>Dining Hall</button></Dropdown.Item>
						<Dropdown.Item ><button onClick={() => nextArtGallery()}>Art Gallery</button></Dropdown.Item>
					</DropdownButton>
					<button onClick={() => nextFoyer()}>Back to Foyer</button>
					</div>
				</div>
			</div>
		</div>
	);
};
