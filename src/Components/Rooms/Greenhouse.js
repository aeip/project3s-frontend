import React, {useState} from 'react'
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/Greenhouse.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const Greenhouse = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Greenhouse');

    const nextBallroom = () => {
        props.history.push('/game/ballroom')
    }

    const [hasKey, setHasKey] = useState(false);
	
	const pickUpKey = () => {
		if(props.currentCharacter.inventory.includes('Dining Hall Key')){
			setHasKey(true)
			return
		} else if (!hasKey) {
			
			props.handleUpdateCharacter(props.currentCharacter, 'Dining Hall Key');
			setHasKey(true);
		} 
	};

    return(
        <div className='greenhouse room'>
			<h1>Greenhouse</h1>

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
                    {/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
					<Inventory props={props} />
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
                        <button onClick={() => pickUpKey()}>Pick Up Key</button>
					</div>
					<br />
                    <div className='nav-buttons'>
                        {/* buttons for navigating the mansion go here */}
                        {/* <button onClick={() => nextRoom()}>Next Room</button> */}
                        <button onClick={() => nextBallroom()}>Back to Ballroom</button>
                    </div>
				</div>
			</div>
		</div>
    )
}
