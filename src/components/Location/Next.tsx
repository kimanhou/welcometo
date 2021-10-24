import React from 'react';
import Button from './Button';

interface INextProps {
    locationNumber : number;
    setLocationNumber : (day : number) => void;
}

const Next : React.FC<INextProps> = props => {
    const onClick = () => {
        props.setLocationNumber(props.locationNumber + 1);
    }

    return (
        <Button classname={`next-button`} onClick={onClick}>
            suivant &nbsp; &#8594;
        </Button>
    );
}

export default Next;