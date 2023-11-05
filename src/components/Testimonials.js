import { Row, Col, Card, Avatar } from 'antd';

const { Meta } = Card;
const Testimonials = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
                <Card>
                    <Meta
                        avatar={<Avatar src="testimonial1.jpg" />}
                        title="米哈游"
                        description="《原神》"
                    />
                    <p>"原神" </p>
                    <p> "战斗模块"</p>
                    <p> "自动寻路"</p>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <Card>
                    <Meta
                        avatar={<Avatar src="testimonial2.jpg" />}
                        title="腾讯-天美"
                        description="英雄联盟"
                    />
                    <p>"腾讯服务器部署"</p>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <Card>
                    <Meta
                        avatar={<Avatar src="testimonial2.jpg" />}
                        title="阿里巴巴-天猫"
                        description="天猫"
                    />
                    <p>"支付模块开发"</p>
                </Card>
            </Col>
        </Row>
    );
};

export default Testimonials;
