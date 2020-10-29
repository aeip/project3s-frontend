import React, {useState} from 'react'
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
        <div className='greenhouse room'>
			<h1>Guest Bedroom</h1>

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
                    <div className='situations'>
						{/* this is where we'll be putting the situations for things like effects and item pickup */}
                        {hasKey ? (
								<p>You picked up a key</p>
							) : (
								<p>Would you like to pick up a key?</p>
							)}
                            <button onClick={() => pickUpKey()}>Pick Up Key</button>
					</div>
					<br />
				
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
