import React, {useState} from 'react'
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/Study.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const Study = (prop) => {
	let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Study');

	const nextMasterBedroom = () => {
		props.history.push('/game/masterbedroom/');
	};

	const [hasKey, setHasKey] = useState(false);
	
	const pickUpKey = () => {
		if(props.currentCharacter.inventory.includes('Rec Room Key')){
			setHasKey(true)
			return
		} else if (!hasKey) {
			
			props.handleUpdateCharacter(props.currentCharacter, 'Rec Room Key');
			setHasKey(true);
		} 
	};

    return(
        <div className='study room'>
			

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
                    
                    <div className='header'>
                        {/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
    					<Inventory props={props} />
                        <h1>Study</h1>
                    </div>
					<div className='graphic'>
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
                    <div className='situations'>
						{/* this is where we'll be putting the situations for things like effects and item pickup */}
                        <p>The Study is absolutely packed with literature and artifacts from various parts of the world. This is quite an impressive collection.</p>
                        {hasKey ? (
							    null
							) : [
                                <p>A key sits on the desk amid a mess of office supplies.</p>,
                                <button onClick={() => pickUpKey()}>Pick Up Key</button>
                            ]
                        }
					</div>
                        <p>There is only one door into this room from the bedroom.</p>
					<div className='nav-buttons'>
                        {/* buttons for navigating the mansion go here */}
    					{/* <button onClick={() => nextRoom()}>Next Room</button> */}
    					<button onClick={() => nextMasterBedroom()}>Back to Master Bedroom</button>
					</div>
				</div>
			</div>
		</div>
    )
}