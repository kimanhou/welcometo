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
    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
    const [ fullScreenGalleryVisibile, setFullScreenGalleryVisibile ] = useState(false);

    return (
        <div className={`photos-container`}>
            <div className={`photos`}>
                {props.photos.map((t, i) => 
                    <PhotoComponent key={t.urlSmall} photo={t} setImageWidth={() => {}} 
                        currentImageIndex={i} setCurrentImageIndex={setCurrentImageIndex}
                        setFullScreenGalleryVisible={setFullScreenGalleryVisibile} 
                        hashKey={props.hashKey} isBig={false} />)}
            </div>
            <FullScreenGallery  visible={fullScreenGalleryVisibile} setVisible={setFullScreenGalleryVisibile}
                images={props.photos} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} 
                hashKey={props.hashKey} />
        </div>
    );
}

export default Photos;