import React, {Fragment} from 'react';
import {DropdownButton} from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'


export const Inventory = (prop) => {
	let props = prop.props
	console.log('eh',props)

	return (
		<div className='inventory'>
			<DropdownButton id="dropdown-basic-button" title="Inventory">
				{props.currentCharacter !== undefined && props.currentCharacter.inventory !== null ? props.currentCharacter.inventory.map((item) => {
														return(
															<>
															<Dropdown.Item >{item}</Dropdown.Item>
															</>
														)
				}) : ''}
			</DropdownButton>
		</div>
	);
};
