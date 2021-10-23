import React from 'react';
import Location from '../../model/Location';
import Photos from '../Photos/Photos';
import BackToTop from './BackToTop';
import './LocationComponent.scss';

interface ILocationComponentProps {
    location : Location;
    hashKey : string;
}

const LocationComponent : React.FC<ILocationComponentProps> = props => {
    return (
        <div className={`location`} id={`location`}>
            <h2>{props.location.name}</h2>
            <p>{props.location.description}</p>
            <Photos photos={props.location.photos} hashKey={props.hashKey}/>
            <BackToTop />
        </div>
    );
}

export default LocationComponent;