import React from 'react';
import { IMapProps } from '../MapOfParos/MapOfParos';
import './MapOfMalta.scss';
import MapOfMaltaMain from './MapOfMaltaMain';
import MapOfMaltaZoom from './MapOfMaltaZoom';

const MapOfMalta : React.FC<IMapProps> = props => {
    return (
        <div className={`map-of-malta flex-row`}>
            <MapOfMaltaMain locationNumber={props.locationNumber} setLocationNumber={props.setLocationNumber} />
            <MapOfMaltaZoom locationNumber={props.locationNumber} setLocationNumber={props.setLocationNumber} />
        </div>
    );
}

export default MapOfMalta;