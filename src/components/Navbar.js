import { Link } from 'react-router-dom';
import {Avatar, Col, Menu, Popover, Row} from 'antd';
import {
    HomeFilled,
    HomeOutlined,
    InfoCircleOutlined,
    LogoutOutlined,
    MailOutlined,
    UserOutlined
} from '@ant-design/icons';
import '../styles/Navbar.css';
import React, {useState} from "react";



const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const handleVisibleChange = (visible) => {
        setVisible(visible);
    };

    const handleLogout = () => {
        // 处理登出逻辑
        setVisible(false);
    };

    const content = (
        <div className="popover-content">
            <p>用户名：John Doe</p>
            <p>角色：Admin</p>
            <button className="logout-button" onClick={handleLogout}>
                <LogoutOutlined /> 登出
            </button>
        </div>
    );

    return (
        <Row>
            <Col span={23}>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item key="home" icon={<HomeFilled />}>
                        <Link to="/">简单介绍</Link>
                    </Menu.Item>
                    <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                        <Link to="/images">照片墙</Link>
                    </Menu.Item>
                    <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                        <Link to="/vlog">vlog</Link>
                    </Menu.Item>
                    <Menu.Item key="contact" icon={<MailOutlined />}>
                        <Link to="/contact">项目</Link>
                    </Menu.Item>
                    <Menu.Item key="contact" icon={<MailOutlined />}>
                        <Link to="/contact">作品</Link>
                    </Menu.Item>
                    <Menu.Item key="edit_resume" icon={<InfoCircleOutlined />}>
                        <Link to="/edit_resume">编辑简历</Link>
                    </Menu.Item>
                </Menu>
            </Col>
            <Col span={1}>
                <Col span={1}>
                    <div className="header">
                        <Popover
                            content={content}
                            title="个人信息"
                            trigger="click"
                            open={visible}
                            onOpenChange={handleVisibleChange}
                        >
                            <Avatar size={40} src="/logo512.png"  className="avatar" />
                            {/*<img src="/avatar.jpg" alt="Avatar" className="avatar" />*/}
                        </Popover>
                    </div>
                </Col>
            </Col>
        </Row>

    );
};


export default Navbar;
