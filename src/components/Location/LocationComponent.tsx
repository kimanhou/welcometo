import React from 'react';
import Location from '../../model/Location';
import Photos from '../Photos/Photos';
import BackToTop from './BackToTop';
import './LocationComponent.scss';
import Next from './Next';

interface ILocationComponentProps {
    location : Location;
    hashKey : string;
    locationNumber : number;
    setLocationNumber : (day : number) => void;
}

const LocationComponent : React.FC<ILocationComponentProps> = props => {
    return (
        <div className={`location`} id={`location`}>
            <h2>{props.location.name}</h2>
            <p>{props.location.description}</p>
            <Photos photos={props.location.photos} hashKey={props.hashKey}/>

            <div className={`buttons-container flex-row`}>
                <BackToTop />
                <div className={`flex-1`}/>
                <Next locationNumber={props.locationNumber} setLocationNumber={props.setLocationNumber}/>
            </div>
        </div>
    );
}

export default LocationComponent;