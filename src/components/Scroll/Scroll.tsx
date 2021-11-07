import React from 'react';
import './Scroll.scss';

interface IScrollProps {

}

const Scroll : React.FC<IScrollProps> = props => {
    return (
        <div className={`scroll`}>
            <div className={`outline`}>
                <div className={`dot`}></div>
            </div>
        </div>
    );
}

export default Scroll;