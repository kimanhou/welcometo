import React from 'react';
import { useState } from 'react';
import './LogIn.scss';

interface ILogInProps {
    setHashKey : (hashKey : string) => void;
}

const LogIn : React.FC<ILogInProps> = props => {
    const [pwd, setPwd] = useState('');
    const onChangeInput : React.ChangeEventHandler<HTMLInputElement> = e => {
        setPwd(e.target.value);
    }

    const onKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            if (pwd.length > 0) {
                props.setHashKey(pwd);
            }
        }
    }

    return (
        <div className={`log-in`}>
            <h2>welcome</h2>
            <p>dear visitor</p>
            <div className={`underline`}/>
            <input value={pwd} onChange={onChangeInput} onKeyPress={onKeyPress} className={`log-in-input`}/>
        </div>
    );
}

export default LogIn;