import React, {useState} from 'react'
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/GuestBedroom.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const GuestBedroom = (prop) => {

	let props = prop.props;
	props.handleUpdateCharacterRoom(props.currentCharacter, 'Guest Bedroom');

	const nextGrandhall = () => {
        props.history.push('/game/grandhall/')
	}
	
	const [hasKey, setHasKey] = useState(false);
	
	const pickUpKey = () => {
		if(props.currentCharacter.inventory.includes('Greenhouse Key')){
			setHasKey(true)
			return
		} else if (!hasKey) {
			
			props.handleUpdateCharacter(props.currentCharacter, 'Greenhouse Key');
			setHasKey(true);
		} 
	};

	
    return(
        <div className='guestbedroom room'>
			

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
                    
                    <div className='header'>
                        {/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
    					<Inventory props={props} />
                        <h1>Guest Bedroom</h1>
                    </div>
					<div className='graphic'>
						{/* Inserting graphic for object/character of situation in question. can be used to show objects, enemies, etc. */}
						{hasKey ? 
                            [<img src='https://i.imgur.com/NVvZndA.png' />,<p>You picked up a key!</p>] : <img src='https://i.imgur.com/pNOztsH.png' />} 
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
                    <p>intro room text</p>
                    <div className='situations'>
						{/* this is where we'll be putting the situations for things like effects and item pickup */}
                        {hasKey ? (
							    null
							) : [
                                <p>Would you like to pick up a key?</p>,
                                <button onClick={() => pickUpKey()}>Pick Up Key</button>
                            ]
                        }
					</div>
                    <p>transition text</p>
					<div className='nav-buttons'>
                        {/* buttons for navigating the mansion go here */}
					    {/* <button onClick={() => nextRoom()}>Next Room</button> */}
                        <button onClick={() => nextGrandhall()}>Grandhall</button>
					</div>
				</div>
			</div>
		</div>
    )
}
