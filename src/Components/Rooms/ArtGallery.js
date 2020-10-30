import React, {useState} from 'react'
import {Inventory} from '../Inventory/Inventory';
import '../Styles/Rooms/ArtGallery.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const ArtGallery = (prop) => {
	let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Art Gallery');

	const [inspected, setInspected] = useState(false)
	

	const inspectPainting = () => {
		props.handleUpdateMadness(props.currentCharacter, 6)
		setInspected(true)
		setTimeout(changeImageBack, 3000)
	}
	const changeImageBack = () => {
		setInspected(false)
	}

	const nextGrandHall = () => {
        props.history.push('/game/grandhall/')
    }

    return(
        <div className='artgallery room'>
			

			<div className='game-screen'>
				{/* Game screen is 3 main categories, background, character pane, and text box. */}
				<div className='background'>
                   
                    <div className='header'>
                        {/* Inventory sits here to appear in the 'game window' instead of outside of it. */}
    					<Inventory props={props} />
                        <h1>Art Gallery</h1>
                    </div>
					<div className='graphic'>
						{/* Inserting graphic for object/character of situation in question. can be used to show objects, enemies, etc. */}
                        
						{inspected ? 
                            [<img src='https://i.imgur.com/6xvgNGR.jpg' />,<p>OH DEAR GOD! What a gruesome image!</p>] : <img src='https://i.imgur.com/pNOztsH.png' />}
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
                    <p>Throughout the gallery is many bizzare statues and eerie paintings. The owner of this estate certainly has a macabre taste.</p>
                    <div className='situations'>
						{/* this is where we'll be putting the situations for things like effects and item pickup */}
                        {inspected ? (
                            null
							) : (
								<p>One painting in particular catches your eye...</p>
							)}
						<button onClick={inspectPainting}>Inspect the painting</button>
					</div>
                    <p>The door leads back to The Grand Hall.</p>
					<div className='nav-buttons'>
                        {/* buttons for navigating the mansion go here */}
    					{/* <button onClick={() => nextRoom()}>Next Room</button> */}
    					<button onClick={() => nextGrandHall()}>Enter The Grand Hall</button>
					</div>
				</div>
			</div>
		</div>
    )
}