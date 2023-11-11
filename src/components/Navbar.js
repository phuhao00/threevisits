import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {HomeFilled, HomeOutlined, InfoCircleOutlined, MailOutlined} from '@ant-design/icons';
import '../styles/Navbar.css';


const Navbar = () => {
    return (
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
    );
};


export default Navbar;
