import React from 'react';
import '../styles/Works.css';
import {Col, Row} from "antd";
import Navbar from "../components/Navbar";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: '项目 1',
            description: '这是项目 1 的描述。',
            imageUrl: '/1.jpg',
        },
        {
            id: 2,
            title: '项目 2',
            description: '这是项目 2 的描述。',
            imageUrl: '/2.jpg',
        },
        // 添加更多项目...
    ];

    return (
        <div className="portfolio-container">
            <Row gutter={2}>
                <Col span={24}>
                    <Navbar /> {/* 导航栏 */}
                </Col>
            </Row>
            <h1>作品展示</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.imageUrl} alt={project.title} />
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
