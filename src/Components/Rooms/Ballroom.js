import React, {useState} from 'react'
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/BallRoom.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const BallRoom = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Ballroom');

    const nextGreenhouse = () => {
        if(props.currentCharacter.inventory.includes('Greenhouse Key')){
			props.history.push('/game/greenhouse/');
		} else {
            props.handleUpdateMadness(props.currentCharacter, 1)
			alert("The door is locked")
		}
    }
    const nextRecRoom= () => {
        if(props.currentCharacter.inventory.includes('Rec Room Key')){
			props.history.push('/game/recroom/');
		} else {
            alert("The door is locked")
            props.handleUpdateMadness(props.currentCharacter, 1)
		}
    }
    const nextGrandHall = () => {
        props.history.push('/game/grandhall/')
    }

    const [hasKey, setHasKey] = useState(false);
    
	const pickUpKey = () => {
        if(props.currentCharacter.inventory.includes('Guest Bedroom Key')){
            setHasKey(true)
            return
        } else if (!hasKey) {
			props.handleUpdateCharacter(props.currentCharacter, 'Guest Bedroom Key');
			setHasKey(true);
		} 
	};

    return(
        <div className='ballroom room'>
			

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
                    
                    <div className='header'>
                        {/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
    					<Inventory props={props} />
                        <h1>Ball Room</h1>
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
							<div className='health-number'>{props.currentCharacter.HP}
                            </div>
						</div>
						
						<div className='madness-icon'>
							{/* This is where we put the code to output the current madness number */}
							<div className='madness-number'>{props.currentCharacter.MadnessLevel}
                            </div>
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
                        <button onClick={() => nextGreenhouse()}>Greenhouse Gardens</button>
                        <button onClick={() => nextRecRoom()}>Rec Room</button>
                        <button onClick={() => nextGrandHall()}>Grand Hall</button>
                        
					</div>
				</div>
			</div>
		</div>
    )
}