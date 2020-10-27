import React from 'react';

export const Fin = (prop) => {
    let props = prop.props;
    const nextRoom = () => {};
	return (
		<div className='fin'>
			<h1>Fin</h1>
			<button onClick={() => nextRoom()}>Next Room (win title)</button>
		</div>
	);
};
