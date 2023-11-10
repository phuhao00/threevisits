import React from 'react';
import {Form, Input, Button, message, Row, Col} from 'antd';
import StringifyWithCircularHandling from "../utils/json";
import '../styles/register.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const backendPort = process.env.REACT_APP_BACKEND_PORT;
const apiUrl = `${backendUrl}:${backendPort}/api`;

const Register = () => {
    const doRegister = async (values) => {
        try {
            const response = await fetch(`${apiUrl}` + "/register", {
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

    const validatePassword = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords do not match.'));
        },
    });

    return (

        <div className="register-container">
            <Form onFinish={doRegister}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]} className="form-item">
                    <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} className="form-item">
                    <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true }]} className="form-item">
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    rules={[
                        { required: true },
                        { validator: validatePassword },
                    ]}
                    className="form-item"
                >
                    <Input.Password placeholder="Confirm your password" />
                </Form.Item>
                <Form.Item className="form-item">
                    <Button type="primary" htmlType="submit" className="register-button">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
