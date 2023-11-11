import { Layout, Row, Col } from 'antd';
import '../styles/Footer.css';
import {Link} from "react-router-dom";
import { MailOutlined, PhoneOutlined, WechatOutlined } from '@ant-design/icons';

const Footer = () => {
    const githubUrl = 'https://github.com/your-username/your-repo';
    const bilibiliUrl = 'https://github.com/your-username/your-repo';
    return (
        <div className="footer">
            <Row className="footer-content">
                <Col span={4}>
                    <div className="footer-column">
                        <h3 className="footer-heading">Github</h3>
                        <Link to={githubUrl} target="_blank">
                            Visit My GitHub repo
                        </Link>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="footer-column">
                        <h3 className="footer-heading">bilibili</h3>
                        <Link to={bilibiliUrl} target="_blank">
                            Visit My Bilibili
                        </Link>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="footer-column">
                        <h3 className="footer-heading">Contact me</h3>
                        <div className="contact-info">
                            <MailOutlined type="mail" />
                            <p className="footer-text">outlook@example.com</p>
                        </div>
                        <div className="contact-info" >
                            <PhoneOutlined type="phone" />
                            <p className="footer-text">+123456789</p>
                        </div>
                        <div className="contact-info">
                            <WechatOutlined type="wechat" />
                            <p className="footer-text">werchatId</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
