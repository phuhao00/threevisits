import React, { useState }  from 'react';
import Navbar from '../components/Navbar'; // 导入导航栏组件
import Banner from '../components/Banner'; // 导入横幅组件
import Features from '../components/Features'; // 导入特点组件
import Testimonials from '../components/Testimonials'; // 导入推荐语组件
import Footer from '../components/Footer';
import Resume from '../components/Resume';
import {Col, Row} from "antd"; // 导入页脚组件
const Home = () => {

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            <Row gutter={2}>
                <Col span={24}>
                    <Navbar /> {/* 导航栏 */}
                </Col>
            </Row>
            <Row   gutter={2}>
                <Col span={24}>
                    <Banner /> {/* 横幅 */}
                </Col>
            </Row>
            <Row  gutter={2}>
                <Col span={24}>
                    <Features /> {/* 特点 */}
                </Col>
            </Row>
            <Row  gutter={2}>
                <Col span={24}>
                    <Testimonials /> {/* 推荐语 */}
                </Col>
            </Row>
            <Row gutter={2}>
                <Col span={24}>
                    <div>
                        <button onClick={handleButtonClick}>填写简历</button>
                        {showForm && <Resume />}
                    </div>
                </Col>

            </Row>
            <Row  gutter={2}>
                <Col span={24}>
                    <Footer /> {/* 页脚 */}
                </Col>
            </Row>
        </div>
    );
};

export default Home;
