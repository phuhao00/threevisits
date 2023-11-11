import React from 'react';
import ImageCarousel from '../components/Imagecarusel';
import UploadPhoto from '../components/UploadPhoto';
import {Col, Row} from "antd";
import Navbar from "../components/Navbar";
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
            <Row gutter={2}>
                <Col span={24}>
                    <Navbar /> {/* 导航栏 */}
                </Col>
            </Row>
            <ImageCarousel imageUrls={imageUrls}  />
            <h1>上传图片</h1>
            <UploadPhoto />
        </div>
    );
};

export  default  Imagewall;
