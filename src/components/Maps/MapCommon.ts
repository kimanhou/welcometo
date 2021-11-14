import { myScrollTo } from "../../Util";

export const onClickLocation = (locationNumber : number, setLocationNumber : (locationNumber : number) => void) => {
    setLocationNumber(locationNumber);
    myScrollTo('day');
}

export const selected = (myLocation : number, locationNumber : number) => {
    if (myLocation == locationNumber) {
        return 'selected';
    }

    return '';
}

export const selectedMultiple = (myLocations : number[], locationNumber : number) => {
    if (myLocations.includes(locationNumber)) {
        return 'selected';
    }

    return '';
}