import { Row, Col, Card } from 'antd';
import '../styles/Features.css';

const Features = () => {
    return (

            <Row gutter={[16, 16]}>
                <Col>
                    <Card title="Golang 游戏服务器开发">
                        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                            Inner Card content
                        </Card>
                        <Card
                            style={{
                                marginTop: 16,
                            }}
                            type="inner"
                            title="Inner Card title"
                            extra={<a href="#">More</a>}
                        >
                            Inner Card content
                        </Card>
                    </Card>
                </Col>
                <Col>
                    <Card title="运维开发">
                        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                            Inner Card content
                        </Card>
                        <Card
                            style={{
                                marginTop: 16,
                            }}
                            type="inner"
                            title="Inner Card title"
                            extra={<a href="#">More</a>}
                        >
                            Inner Card content
                        </Card>
                    </Card>
                </Col>
                <Col>
                    <Card title="Web 后端开发">
                        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                            Inner Card content
                        </Card>
                        <Card
                            style={{
                                marginTop: 16,
                            }}
                            type="inner"
                            title="Inner Card title"
                            extra={<a href="#">More</a>}
                        >
                            Inner Card content
                        </Card>
                    </Card>
                </Col>
            </Row>

    );
};

export default Features;
