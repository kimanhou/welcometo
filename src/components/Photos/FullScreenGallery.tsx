import React, { useState } from 'react';
import { Photo } from '../../model/Photo';
import GalleryArrows from './GalleryArrows';
import PhotoComponent from './PhotoComponent';
import './FullScreenGallery.scss';

interface IProjectFullScreenGalleryProps {
    visible : boolean;
    setVisible : (visible : boolean) => void;
    images : Photo[];
    currentImageIndex : number;
    setCurrentImageIndex : React.Dispatch<React.SetStateAction<number>>;
    hashKey : string;
}

const FullScreenGallery : React.FC<IProjectFullScreenGalleryProps> = props => {
    const visibleClassName = props.visible ? 'visible' : '';
    
    const [ imageWidths, setImageWidths ] = useState<number[]>(props.images.map(t => 0));
    const updateImageWidth = (i : number) => (width : number) => {
        setImageWidths(imageWidths => {
            const clone = [...imageWidths];
            clone[i] = width;
            return clone;
        });
    }

    const offset = imageWidths.slice(0, props.currentImageIndex).reduce((a,b) => a+b+20, 0);

    if(!props.visible) return null;
    return (
        <div className={`full-screen-gallery ${visibleClassName}`}>
            <button className={`close-button`} onClick={() => props.setVisible(false)}>&#x2715;</button>
            <div className={`full-screen-gallery-images flex-row`} style={{transform : `translateX(-${offset}px)`}}>
                {props.images.map((t, i) => <PhotoComponent photo={t} setImageWidth={updateImageWidth(i)} isFullScreen hashKey={props.hashKey} key={t.urlSmall} isBig />)}
            </div>
            <GalleryArrows currentImageIndex={props.currentImageIndex} setCurrentImageIndex={props.setCurrentImageIndex} maxIndex={props.images.length - 1} galleryFullScreen />
        </div>
    );
}

export default FullScreenGallery;