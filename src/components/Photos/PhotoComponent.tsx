import React, { useState } from 'react';
import Encrypt from '../../business/Encrypt';
import { useIsMobile } from '../../hooks/UseMediaQuery';
import { Photo } from '../../model/Photo';
import './PhotoComponent.scss';

interface IPhotoProps {
    key ?: string;
    photo : Photo;
    setImageWidth : (width : number) => void;
    isFullScreen ?: boolean;
    showGallery ?: (imageIdx : number) => void;
    imageIdx : number;
    hashKey : string;
    isBig : boolean;
}

const PhotoComponent : React.FC<IPhotoProps> = props => {
    const fullScreenClassName = props.isFullScreen ? 'full-screen' : '';
    const [width, setWidth] = useState(0);
    const isMobile = useIsMobile();
    const onLoad : React.ReactEventHandler<HTMLImageElement> = e => {
        const width = e.currentTarget.getBoundingClientRect().width;
        props.setImageWidth(width);
        setWidth(width - 20);
    }

    const onClick = () => {
        if (!isMobile) {
            if (props.showGallery != null) {
                props.showGallery(props.imageIdx);
            }
        }
    }

    const getUrl = (photo : Photo) => {
        if (props.isBig) {
            return Encrypt.decrypt(photo.urlBig, props.hashKey);
        }

        return Encrypt.decrypt(photo.urlSmall, props.hashKey);
    }

    return (
        <div className={`photo ${fullScreenClassName}`} onClick={onClick}>
            <div className={`hover-shadow`}></div>
            <img src={getUrl(props.photo)} onLoad={onLoad} alt={props.photo.caption}/>
            <div className={`text flex-column`} style={{ width: width }}>
                {props.photo.caption}
            </div>
        </div>
    );
}

export default PhotoComponent;