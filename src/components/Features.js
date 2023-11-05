import { Row, Col, Card } from 'antd';
import '../styles/Features.css';

const Features = () => {
    return (

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <Card hoverable>
                        <i className="fas fa-globe feature-icon"></i>
                        <h3 className="feature-title">Golang 游戏服务器开发</h3>
                        <p className="feature-description">Connect with customers worldwide.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card hoverable>
                        <i className="fas fa-mobile-alt feature-icon"></i>
                        <h3 className="feature-title">运维开发</h3>
                        <p className="feature-description">Seamless experience on all devices.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card hoverable>
                        <i className="fas fa-shield-alt feature-icon"></i>
                        <h3 className="feature-title">Web 后端开发</h3>
                        <p className="feature-description">Protect your data and privacy.</p>
                    </Card>
                </Col>
            </Row>

    );
};

export default Features;
