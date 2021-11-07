import React from 'react';
import Day from '../../model/Day';
import BackToTop from './BackToTop';
import LocationComponent from './Location/LocationComponent';
import './Day.scss';
import Next from './Next';

interface IDayComponentProps {
    day : Day;
    hashKey : string;
    locationNumber : number;
    setLocationNumber : (day : number) => void;
    daysTotal : number;
}

const DayComponent : React.FC<IDayComponentProps> = props => {
    const isLast = props.locationNumber == props.daysTotal - 1;
    
    return (
        <>
            {props.day !== undefined && 
                <div className={`day`} id={`day`}>
                    <h2>{props.day.name}</h2>
                    {props.day.locations.map(t => 
                        <LocationComponent location={t} hashKey={props.hashKey} />    
                    )}

                    <div className={`buttons-container flex-row`}>
                        <BackToTop />
                        <div className={`flex-1`}/>
                        {!isLast && 
                            <Next locationNumber={props.locationNumber} setLocationNumber={props.setLocationNumber}/>}
                    </div>
                </div>
            }
        </>
    );
}

export default DayComponent;