import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadVideo = () => {
    const handleUpload = (file) => {
        // 处理上传视频的逻辑
        console.log(file);
    };

    return (
        <div>
            <Upload
                accept="video/*"
                beforeUpload={handleUpload}
            >
                <Button icon={<UploadOutlined />} type="primary">选择视频文件</Button>
            </Upload>
        </div>
    );
};

export default UploadVideo;
