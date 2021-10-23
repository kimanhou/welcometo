import React, { useState } from 'react';
import MapOfParos, { IMapProps } from '../MapOfParos/MapOfParos';
import './Home.scss';
import LocationComponent from '../Location/LocationComponent';
import Album from '../../model/Album';

interface IHomeProps {
    hashKey : string;
    album : Album;
}

const Home : React.FC<IHomeProps> = props => {
    const [locationNumber, setLocationNumber] = useState(0);
    const locations = props.album.locations;
    const location = locations[locationNumber];

    let Map : React.FC<IMapProps>;

    switch (props.album.name) {
        case 'Paros':
            Map = MapOfParos;
            break;
        case 'Malte':
            Map = MapOfParos;
            break;
        case 'Crète':
            Map = MapOfParos;
            break;
        default:
            throw new Error(`Album not recognised : ${props.album.name}`);
    }

    return (
        <div className={`home`}>
            <header>
                <h2>welcome to</h2>
                <h1>{props.album.name}</h1>
            </header>
            <Map locationNumber={locationNumber} setLocationNumber={setLocationNumber}/>
            <LocationComponent location={location} hashKey={props.hashKey} />
        </div>
    );
}

export default Home;