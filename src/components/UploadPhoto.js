import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadImage = () => {
    const handleUpload = (file) => {
        // 处理上传图片的逻辑
        console.log(file);
    };

    return (
        <div>
            <Upload
                accept="image/*"
                beforeUpload={handleUpload}
            >
                <Button icon={<UploadOutlined />} type="primary">选择图片文件</Button>
            </Upload>
        </div>
    );
};

export default UploadImage;
