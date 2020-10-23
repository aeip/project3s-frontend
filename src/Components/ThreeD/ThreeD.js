import React from 'react';
import * as THREE from 'three';

export const ThreeD = (props) => {
    const objects = {
        trophy: function() {

        }
    }
	return objects[props.threeD]();
};
