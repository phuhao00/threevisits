import React , { useState }  from 'react';
import {Form, Input, Button, Row, Col, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import StringifyWithCircularHandling from "../utils/json";
import {  Navigate,useNavigate } from 'react-router-dom';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const backendPort = process.env.REACT_APP_BACKEND_PORT;

const apiUrl = `${backendUrl}:${backendPort}/api`;

const Login = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = async (values) => {
        try {
            const response = await fetch(`${apiUrl}`+'/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json.js',
                },
                body: StringifyWithCircularHandling(values),
            });

            if (response.ok) {
                // 登录成功
                console.log('Login successful');
                // 执行其他操作，如页面跳转等
                setLoggedIn(true);
                navigate('/home');

            } else {
                // 登录失败
                console.error('Login failed');
                // 处理登录失败的逻辑，如显示错误提示等
            }
        } catch (error) {
            console.error('Login error:', error);
            // 处理登录请求错误的逻辑，如显示错误提示等
        }
    };
    const handleRegister = async (values) =>{
        try {
            const response = await fetch(`${apiUrl}`+"/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json.js',
                },
                body: StringifyWithCircularHandling(values),
            });

            if (response.ok) {
                // 注册成功
                message.success('Registration successful');
                // 执行其他操作，如页面跳转等
            } else {
                // 注册失败
                const errorData = await response.json();
                message.error(errorData.message || 'Registration failed');
                // 处理注册失败的逻辑，如显示错误提示等
            }
        } catch (error) {
            console.error('Registration error:', error);
            message.error('Registration error');
            // 处理注册请求错误的逻辑，如显示错误提示等
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-title">Welcome Three Visits !</h1>
                <Form name="login-form" onFinish={onFinish}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
                        <Input prefix={<UserOutlined />} placeholder="Username"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Button type="primary" htmlType="submit" className="login-button" block>
                                    Log in
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button type="primary" onClick={handleRegister} block>
                                    Sign In
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
