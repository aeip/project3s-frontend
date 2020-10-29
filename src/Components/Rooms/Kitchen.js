import React, {useState} from 'react'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const Kitchen = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Dining Hall');
    const [hasKnife, setHasKnife] = useState(false);
    const nextDiningHall = () => {
		props.history.push('/game/dininghall/');
    };
    
    const pickUpKnife = () => {
		if (!hasKnife) {
			props.currentCharacter.inventory.push('knife');
			props.handleUpdateCharacter(props.currentCharacter, 'knife');
			setHasKnife(true);
		}
	};

    return(
        <div className='kitchen room'>
			<h1>Kitchen</h1>

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
							<div className='health-number'>100</div>
						</div>
						
						<div className='madness-icon'>
							{/* This is where we put the code to output the current madness number */}
							<div className='madness-number'>5</div>
						</div>
						
					</div>
				</div>
				{/* This will be the location of everything text base and using buttons */}
				<div className='text-box'>
                {hasKnife ? (
								<p>You picked up a knife</p>
							) : (
								<p>Would you like to pick up a knife?</p>
							)}
					{/* <button onClick={() => nextRoom()}>Next Room</button> */}
                    <button onClick={() => nextDiningHall()}>Dining Hall</button>
                    <button onClick={() => pickUpKnife()}>Pick up knife</button>
				</div>
			</div>
		</div>
    )
}
