import React, { useState } from 'react';
import Album from '../../model/Album';
import DayComponent from '../Day/Day';
import MapOfCrete from '../Maps/MapOfCrete/MapOfCrete';
import MapOfMalta from '../Maps/MapOfMalta/MapOfMalta';
import MapOfParos, { IMapProps } from '../Maps/MapOfParos/MapOfParos';
import Scroll from '../Scroll/Scroll';
import './Home.scss';

interface IHomeProps {
    hashKey : string;
    album : Album;
}

const Home : React.FC<IHomeProps> = props => {
    const [ dayNumber, setDayNumber ] = useState(0);
    const days = props.album.days;
    const day = days[dayNumber];
    const daysCount = props.album.days.length;

    let Map : React.FC<IMapProps>;

    switch (props.album.name) {
        case 'Paros':
            Map = MapOfParos;
            break;
        case 'Malta':
            Map = MapOfMalta;
            break;
        case 'Crète':
            Map = MapOfCrete;
            break;
        default:
            throw new Error(`Album not recognised : ${props.album.name}`);
    }

    return (
        <div className={`home`} id={`top`}>
            <div className={`landing`}>
                <header>
                    <h2>welcome to</h2>
                    <h1>{props.album.name}</h1>
                    <div className={`underline`}></div>
                </header>
                <Map locationNumber={dayNumber} setLocationNumber={setDayNumber}/>
                <Scroll />
            </div>
            <DayComponent day={day} hashKey={props.hashKey} 
                locationNumber={dayNumber} setLocationNumber={setDayNumber} daysTotal={daysCount}/>
        </div>
    );
}

export default Home;