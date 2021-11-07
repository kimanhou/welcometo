import React, { useState } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LoginBlocker from './components/LogIn/LoginBlocker';
import Album from './model/Album';

const App : React.FC = props => {
    const [ album, setAlbum ] = useState<Album | null>(null);
    const [ hashKey, setHashKey ] = useState<string | null>(null);
    const onLogin = (hashKey : string) => {
        const album = Album.getAlbum(hashKey);
        if (album != null) {
            setHashKey(hashKey);
            setAlbum(album);
        }
    }

    return (
    <div className="App">
        {(hashKey == null || album == null) &&
            <LoginBlocker onLogin={onLogin} />
        }
        {hashKey != null && album != null &&
            <>
                <Home album={album} hashKey={hashKey} />
                <Footer />
            </>
        }
    </div>
    );
}

export default App;
