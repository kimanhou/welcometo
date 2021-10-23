import React from 'react';
import './Button.scss';

interface IButtonProps {
    onClick : () => void;
    classname : string;
    isUnselected ?: boolean;
}

const Button : React.FC<IButtonProps> = props => {
    const isUnselectedClassname = props.isUnselected ? 'unselected' : '';
    return  (
        <div className={`button ${props.classname}`} onClick={props.onClick}>
            <div className={`button-yellow ${isUnselectedClassname}`} />
            <div className={`button-border`} />
            <div className={`button-container`}>
                {props.children}
            </div>
        </div>
    );
}

export default Button;