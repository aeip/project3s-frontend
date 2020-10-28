import React from 'react'
import '../Styles/Rooms/Courtyard.scss'
import '../Styles/UserInterface/GameScreen.scss';
import '../Styles/UserInterface/CharacterPanel.scss'

export const Courtyard = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Courtyard');
    const nextRoom = () => {
        props.history.push('/game/fin/');
    }
    return (
		<div className='courtyard room'>
				<h1>Courtyard</h1>
            <div className='game-screen'>
                    <div className='background'>
                        <div className='graphic'>
                            <img src='https://i.imgur.com/pNOztsH.png' />
                        </div>
                    </div>
                    <div className='character-panel'>
					    <div className='character'></div>
					    <div className='health'>
						    <div className='health-icon'></div>
						    <div className='health-number'></div>
					    </div>
				    </div>
                    <div className='text-box'>
                        
                        <button onClick={() => nextRoom()}>Next Room</button>
                    </div>
            </div>
        </div>
		);
}