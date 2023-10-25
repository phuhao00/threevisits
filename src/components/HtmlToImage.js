import React, { useState, useRef } from 'react';
import { saveAs } from 'file-saver';
const Share = () => {
    const canvasRef = useRef(null);

    const handleGenerateImage = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // 创建一个Image对象
        // 创建Image对象并加载图片
        const img1 = new Image();
        img1.src = require('../../src/components/logo192.png');

        const img2 = new Image();
        img2.src = require('../../src/components/logo192.png');

        img1.onload = () => {
            img2.onload = () => {
                // 设置画布尺寸
                canvas.width = img1.width + img2.width;
                canvas.height = Math.max(img1.height, img2.height);

                // 在Canvas上绘制图片
                context.drawImage(img1, 0, 0);
                context.drawImage(img2, img1.width, 0);

                // 生成Blob对象
                canvas.toBlob((blob) => {
                    // 使用FileSaver.js保存Blob到本地
                    saveAs(blob, 'generated_image.png');
                });
            };
        };
    };


    return (
        <div>
            <canvas ref={canvasRef}></canvas>
            <button onClick={handleGenerateImage}>Generate Image</button>
        </div>
    );

};

export default Share;
