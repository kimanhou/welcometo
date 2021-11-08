import React, { useState } from 'react';
import { Photo } from '../../model/Photo';
import GalleryArrows from './GalleryArrows';
import PhotoComponent from './PhotoComponent';
import './FullScreenGallery.scss';

interface IProjectFullScreenGalleryProps {
    visible : boolean;
    hideGallery : () => void;
    images : Photo[];
    galleryIdx : number;
    hashKey : string;
}

const FullScreenGallery : React.FC<IProjectFullScreenGalleryProps> = props => {
    const visibleClassName = props.visible ? 'visible' : '';
    const [currentImageIdx, setCurrentImageIdx] = useState(props.galleryIdx);
    const updateCurrentImageIdx = (imageIdx : number) => {
        setCurrentImageIdx(imageIdx);
        setMinLoaded(min => Math.min(min, Math.max(imageIdx - 1, 0)));
        setMaxLoaded(max => Math.max(max, Math.min(imageIdx + 2, props.images.length - 1)));
    }
    const [minLoaded, setMinLoaded] = useState(Math.max(0, currentImageIdx - 1));
    const [maxLoaded, setMaxLoaded] = useState(Math.min(currentImageIdx + 2, props.images.length - 1));
    
    const [ imageWidths, setImageWidths ] = useState<number[]>(props.images.map(t => 0));
    const updateImageWidth = (i : number) => (width : number) => {
        setImageWidths(imageWidths => {
            const clone = [...imageWidths];
            clone[i] = width;
            return clone;
        });
    }

    const offset = imageWidths.slice(minLoaded, currentImageIdx).reduce((a,b) => a + b + 20, 0);

    const galleryPictures = props.images.slice(minLoaded, maxLoaded + 1);

    if(!props.visible) return null;

    return (
        <div className={`full-screen-gallery ${visibleClassName}`}>
            <button className={`close-button`} onClick={props.hideGallery}>&#x2715;</button>
            <div className={`full-screen-gallery-images flex-row`} style={{transform : `translateX(-${offset}px)`}}>
                {galleryPictures.map((t, i) => <PhotoComponent photo={t} setImageWidth={updateImageWidth(minLoaded + i)} isFullScreen hashKey={props.hashKey} key={t.urlSmall} imageIdx={i} isBig />)}
            </div>
            <GalleryArrows currentImageIndex={currentImageIdx} setCurrentImageIndex={updateCurrentImageIdx} maxIndex={props.images.length - 1} galleryFullScreen />
        </div>
    );
}

export default FullScreenGallery;