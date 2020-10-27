import React from 'react';
import {DropdownButton} from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'

export const Inventory = (prop) => {
	let props = prop.props
	

	return (
		<div className='inventory'>
			<DropdownButton id="dropdown-basic-button" title="Inventory">
				{props.currentCharacter.inventory !== null ? props.currentCharacter.inventory.map((item) => {
														return(
															<>
															<Dropdown.Item >{item}</Dropdown.Item>
															</>
														)
				}) : ''}
  				<Dropdown.Item >Action</Dropdown.Item>
  				<Dropdown.Item >Another action</Dropdown.Item>
  				<Dropdown.Item >Something else</Dropdown.Item>
			</DropdownButton>
		</div>
	);
};
