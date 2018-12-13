import React from 'react';
import Child from './child';

const parent = (props) => {
    return (
        <div>
            <Child doWhatever={props.changeTheWorld} title={props.title} />
            <Child doWhatever={props.keepTheWorldSame} title={props.title} />
        </div>
    );
}

export default parent;