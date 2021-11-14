import React from 'react';
import { myScrollTo } from '../../Util';
import Button from './Button';

interface IPreviousProps {
    locationNumber : number;
    setLocationNumber : (day : number) => void;
}

const Previous : React.FC<IPreviousProps> = props => {
    const onClick = () => {
        props.setLocationNumber(props.locationNumber - 1);
        myScrollTo('day');
    }

    return (
        <Button classname={`previous-button`} onClick={onClick}>
            précédent &nbsp; &#8592;
        </Button>
    );
}

export default Previous;