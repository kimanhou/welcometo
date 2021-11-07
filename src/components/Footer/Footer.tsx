import React from 'react';
import './Footer.scss';

const Footer : React.FC = props => {
    return (
        <footer className={`footer`}>
            Powered by
            <div className={`balimoon`}>
                Kim Anh Nguyen
            </div>
            <div className={`underline`}></div>
        </footer>
    );
}

export default Footer;