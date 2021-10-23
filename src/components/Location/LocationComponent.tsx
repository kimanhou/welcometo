import React from 'react';
import Location from '../../model/Location';
import Photos from '../Photos/Photos';
import './LocationComponent.scss';

interface ILocationComponentProps {
    location : Location;
    hashKey : string;
}

const LocationComponent : React.FC<ILocationComponentProps> = props => {
    return (
        <div className={`location`}>
            <h2>{props.location.name}</h2>
            <p>{props.location.description}</p>
            <Photos photos={props.location.photos} hashKey={props.hashKey}/>
        </div>
    );
}

export default LocationComponent;