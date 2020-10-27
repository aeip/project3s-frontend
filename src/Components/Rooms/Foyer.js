import React from 'react';

export const Foyer = (prop) => {
    let props = prop.props;
    const nextRoom = () => {
        props.history.push('/game/grandhall/');
    };
	return (
		<div className='foyer'>
			<h1>Foyer</h1>
			<button onClick={() => nextRoom()}>Next Room</button>
		</div>
	);
};
