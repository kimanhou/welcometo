import React, { useState } from 'react';
import { Photo } from '../../model/Photo';
import FullScreenGallery from './FullScreenGallery';
import PhotoComponent from './PhotoComponent';
import './Photos.scss';

interface IPhotosProps {
    photos : Photo[];
    hashKey : string;
}

const Photos : React.FC<IPhotosProps> = props => {
    const [ galleryIdx, setGalleryIdx ] = useState<number | null>(null);
    const [ fullScreenGalleryVisibile, setFullScreenGalleryVisibile ] = useState(false);
    const showGallery = (imageIdx : number) => {
        setFullScreenGalleryVisibile(true);
        setGalleryIdx(imageIdx);
    }
    const hideGallery = () => {
        setFullScreenGalleryVisibile(false);
        setGalleryIdx(null);
    }

    return (
        <div className={`photos-container`}>
            <div className={`photos`}>
                {props.photos.map((t, i) => 
                    <PhotoComponent key={t.urlSmall} photo={t} setImageWidth={() => {}} 
                        imageIdx={i} showGallery={showGallery}
                        hashKey={props.hashKey} isBig={false} />)}
            </div>
            {galleryIdx != null &&
                <FullScreenGallery visible={fullScreenGalleryVisibile} hideGallery={hideGallery}
                    images={props.photos} galleryIdx={galleryIdx} hashKey={props.hashKey} />
            }
        </div>
    );
}

export default Photos;