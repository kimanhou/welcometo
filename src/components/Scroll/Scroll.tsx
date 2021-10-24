import React from 'react';
import './Scroll.scss';

interface IScrollProps {

}

const Scroll : React.FC<IScrollProps> = props => {
    return (
        <div className={`scroll`}></div>
    );
}

export default Scroll;