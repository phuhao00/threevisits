import React from 'react';
import '../styles/Vlogs.css';
import {Col, Row} from "antd";
import Navbar from "../components/Navbar";

const VlogPage = () => {
    const vlogs = [
        {
            id: 1,
            title: 'Vlog 1',
            description: '这是Vlog 1的描述。',
            videoUrl: 'https://www.bilibili.com/video/BV1EN4y1D71T/',
            thumbnailUrl: '/1.jpg',
        },
        {
            id: 2,
            title: 'Vlog 2',
            description: '这是Vlog 2的描述。',
            videoUrl: 'https://www.bilibili.com/video/BV17G411Q7Do/',
            thumbnailUrl: '/2.jpg',
        },
        // 添加更多Vlog...
    ];

    return (
        <div className="vlog-container">
            <Row gutter={2}>
                <Col span={24}>
                    <Navbar /> {/* 导航栏 */}
                </Col>
            </Row>
            <Row>
                <div className="vlog-grid">
                    {vlogs.map((vlog) => (
                        <div className="vlog-card" key={vlog.id}>
                            <a href={vlog.videoUrl} target="_blank" rel="noopener noreferrer">
                                <img src={vlog.thumbnailUrl} alt={vlog.title} />
                            </a>
                            <div className="vlog-details">
                                <h2>{vlog.title}</h2>
                                <p>{vlog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Row>

        </div>
    );
};

export default VlogPage;
