import React from 'react';
import { myScrollTo } from '../../Util';
import Button from './Button';

const BackToTop : React.FC = props => {
    const onClickTop = () => {
        myScrollTo('top');
    }
    
    return (
        <Button onClick={onClickTop} classname={`back-to-top skip-link`}>
            <span>Retour en haut</span>
            <span className={`arrow-up`}>⌃</span>
        </Button>
    );
}

export default BackToTop;