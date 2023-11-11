import {Layout, Row, Col, Space} from 'antd';
import '../styles/Footer.css';
import {Link} from "react-router-dom";
import {GithubOutlined, MailOutlined, PhoneOutlined, WechatOutlined} from '@ant-design/icons';

const Footer = () => {
    const githubUrl = 'https://github.com/your-username/your-repo';
    const bilibiliUrl = 'https://github.com/your-username/your-repo';
    return (
        <div className="footer">
            <Row className="footer-content" gutter={1}>
                <Col span={4} >
                    <div className="footer-column">
                        <h3 className="footer-heading">About me</h3>
                    </div>
                    <div className="footer-column">
                        <Space.Compact>
                            <GithubOutlined />
                        </Space.Compact>
                    </div>
                    <></>
                    <br />
                    <div className="footer-column">
                        <Space.Compact>
                            <span className="bilibili-text">bilibili</span>
                        </Space.Compact>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="footer-column">
                        <h3 className="footer-heading">Contact me</h3>
                    </div>
                    <div className="footer-column">
                        <Space.Compact block>
                            <Space.Compact>
                                <MailOutlined className="icon" />
                                <p className="footer-text">outlook@example.com</p>
                            </Space.Compact>
                        </Space.Compact>

                        <Space.Compact block>
                            <Space.Compact>
                                <PhoneOutlined type="phone"  className="icon" />
                                <p className="footer-text">+123456789</p>
                            </Space.Compact>
                        </Space.Compact>
                        <Space.Compact block>
                            <Space.Compact>
                                <WechatOutlined type="wechat"  className="icon"  />
                                <p className="footer-text">werchatId</p>
                            </Space.Compact>
                        </Space.Compact>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
