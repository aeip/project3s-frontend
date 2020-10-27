import React from 'react'
import {Start} from './Start'
import {Win} from './Win'
import {Death} from './Death'

export const Titles = (props) => {
    const start = <Start props={props} />;
    const win = <Win props={props} />;
    const death = <Death props={props} />;
    const loading = <h1>Loading...</h1>;
    return (props.title === 'start') ? start
            : (props.title === 'win') ? win
            : (props.title === 'death') ? death
            : loading;
}