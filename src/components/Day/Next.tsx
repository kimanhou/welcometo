import React from 'react';
import { myScrollTo } from '../../Util';
import Button from './Button';

interface INextProps {
    locationNumber : number;
    setLocationNumber : (day : number) => void;
}

const Next : React.FC<INextProps> = props => {
    const onClick = () => {
        props.setLocationNumber(props.locationNumber + 1);
        myScrollTo('day');
    }

    return (
        <Button classname={`next-button`} onClick={onClick}>
            suivant &nbsp; &#8594;
        </Button>
    );
}

export default Next;