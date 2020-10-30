import React, {useState} from 'react'
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/Courtyard.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const Courtyard = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Courtyard');
	console.log(props)

	const [isDead, setisDead] = useState(false)
    const nextGrandhall = () => {
        props.history.push('/game/grandhall/')
    }
    const nextRoom = () => {
		if(props.currentCharacter.inventory.includes('Mysterious Key') && props.currentCharacter.inventory.includes('Knife')){
			props.history.push('/win/');
		} else if(props.currentCharacter.inventory.includes('Mysterious Key')){
			setisDead(true)
			props.deathReason(3)
			setTimeout(dead, 2000)
		}else{
			alert("The door is locked")
			props.handleUpdateMadness(props.currentCharacter, 1)
		}
	}
	const dead = () => {
		props.history.push('/lose/')
	}
    return (
		<div className='courtyard room'>
			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
                    
                    <div className='header'>
                        {/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
    					<Inventory props={props} />
                        <h1>Courtyard</h1>
                    </div>
					<div className='graphic'>
						{/* Inserting graphic for object/character of situation in question. can be used to show objects, enemies, etc. */}
						{isDead ? <img src='https://images.unsplash.com/photo-1572453020814-972b244074d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></img> : <img src='https://i.imgur.com/pNOztsH.png' />}
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
                    Moonlight pours a pale blue glow as you enter the courtyard. Despite it's disheveled and overgrown nature, the landscape of the estate is really quite beautiful.
                    <div className='situations'>
						{/* this is where we'll be putting the situations for things like effects and item pickup */}

					</div>
                    <p>The far end of the courtyard has a forboding crypt entrance. It's locked and needs some special sort of key...</p>
					<div className='nav-buttons'>
                        {/* buttons for navigating the mansion go here */}
                        <button onClick={() => nextGrandhall()}>Enter the Grand Hall</button>
                        <button onClick={() => nextRoom()}>Open Crypt Door</button>
                    </div>
				</div>
			</div>
		</div>
		);
}