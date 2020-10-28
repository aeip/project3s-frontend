import React from 'react';

export const Grandhall = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Grandhall');
	const nextRoom = () => {
		props.history.push('/game/courtyard/');
	};
	return (
		<div className='grandhall'>
			<h1>Grandhall</h1>
			<div className='game-screen'>
				<div className='background'>
					<div className='graphic'>
						<img src='https://i.imgur.com/pNOztsH.png' />
					</div>
				</div>
				<div className='character-pane'>

				</div>
				<div className='text-box'>
					<p>You enter the foyer of the grand estate. A lone beam of moonlight shines down to the center of the room.</p> <p>Within it's pale glow is the flash of metal from a steel knife. Looks like someone dropped this in a hurry.</p>
					<button onClick={() => nextRoom()}>Next Room</button>
				</div>
			</div>
		</div>
	);
};
