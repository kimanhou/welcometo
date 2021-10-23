import React from 'react';
import LogIn from './LogIn';
import './LoginBlocker.scss';

interface ILoginBlockerProps{
    onLogin : (hashKey : string) => void;
}

const LoginBlocker : React.FC<ILoginBlockerProps> = props => {
    return (
        <div className={`login-blocker`}>
            <LogIn setHashKey={props.onLogin} />
        </div>
    )
}
export default LoginBlocker;