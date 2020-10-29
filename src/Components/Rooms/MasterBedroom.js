import React from 'react'
import '../Styles/Rooms/MasterBedroom.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const MasterBedroom = (prop) => {

	let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Master Bedroom');

	const nextStudy = () => {
		if(props.currentCharacter.inventory.includes('Study Key')){
			props.history.push('/game/study/');
		} else {
			alert("The door is locked")
		}
	};
    const nextGrandHall = () => {
        props.history.push('/game/grandhall/')
    }

    return(
        <div className='masterbedroom room'>
			<h1>Master Bedroom</h1>

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

					</div>
					<br />
					{/* <button onClick={() => nextRoom()}>Next Room</button> */}
					<button onClick={() => nextStudy()}>Study</button>
                    <button onClick={() => nextGrandHall()}>Grandhall</button>
				</div>
			</div>
		</div>
    )
}
