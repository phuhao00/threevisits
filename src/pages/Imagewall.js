import React from 'react';
import ImageCarousel from '../components/Imagecarusel';
import UploadPhoto from '../components/UploadPhoto';
const Imagewall = () => {
    const imageUrls = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg',
        '/5.jpg',
    ];
    return (
        <div className="parent_centered-div" >
            <ImageCarousel imageUrls={imageUrls}  />
            <h1>上传图片</h1>
            <UploadPhoto />
        </div>
    );
};

export  default  Imagewall;
