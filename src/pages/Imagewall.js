import React from 'react';
import ImageCarousel from '../components/Imagecarusel';
const Imagewall = () => {
    const imageUrls = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg',
        '/5.jpg',
    ];
    return (
        <div >
            <h1>图片展示</h1>
            <ImageCarousel imageUrls={imageUrls}  />
        </div>
    );
};

export  default  Imagewall;
