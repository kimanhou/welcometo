import React from 'react';
import './Footer.scss';

const Footer : React.FC = props => {
    return (
        <footer className={`footer`}>
            Powered by Kim Anh Nguyen
            <div className={`underline`}></div>
        </footer>
    );
}

export default Footer;