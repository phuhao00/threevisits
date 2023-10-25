import React, { useState } from 'react';
import { Upload, Button } from 'antd';
const Share = () => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    const handleImageUpload = (file, setImage) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const handleImage1Upload = (file) => {
        handleImageUpload(file, setImage1);
    };

    const handleImage2Upload = (file) => {
        handleImageUpload(file, setImage2);
    };

    const generatePoster = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const image1Obj = new Image();
        image1Obj.src = image1;
        image1Obj.onload = () => {
            const image2Obj = new Image();
            image2Obj.src = image2;
            image2Obj.onload = () => {
                canvas.width = Math.max(image1Obj.width, image2Obj.width);
                canvas.height = image1Obj.height + image2Obj.height;

                ctx.drawImage(image1Obj, 0, 0, canvas.width, image1Obj.height);
                ctx.drawImage(image2Obj, 0, image1Obj.height, canvas.width, image2Obj.height);

                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'share_poster.png';
                link.click();
            };
        };
    };

    return (
        <div>
            <h3>预览：</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {image1 && (
                    <img src={image1} alt="图片1" style={{ width: '400px', height: 'auto' }} />
                )}
                {image2 && (
                    <img src={image2} alt="图片2" style={{ width: '400px', height: 'auto' }} />
                )}
            </div>
            <Upload beforeUpload={handleImage1Upload}>
                <Button>选择图片1</Button>
            </Upload>
            <br />
            <Upload beforeUpload={handleImage2Upload}>
                <Button>选择图片2</Button>
            </Upload>
            <br />
            <Button onClick={generatePoster}>生成海报</Button>
            <br />
        </div>
    );
};

export default Share;
