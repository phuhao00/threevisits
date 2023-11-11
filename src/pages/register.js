import React from 'react';
import {Form, Input, Button, message, Row, Col} from 'antd';
import StringifyWithCircularHandling from "../utils/json";
import '../styles/register.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const backendPort = process.env.REACT_APP_BACKEND_PORT;
const apiUrl = `${backendUrl}:${backendPort}/api`;

const Register = () => {
    const doRegister = (values) => {
        console.log("jjjjjj")
        return new Promise((resolve, reject) => {
            fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((response) => {
                    if (response.ok) {
                        message.success('Registration successful');
                        resolve(); // 成功时解析 Promise
                    } else {
                        return response.json().then((errorData) => {
                            message.error(errorData.message || 'Registration failed');
                            reject(new Error('Registration failed')); // 失败时拒绝 Promise
                        });
                    }
                })
                .catch((error) => {
                    console.error('Registration error:', error);
                    message.error('Registration error');
                    reject(error); // 处理注册请求错误的逻辑，如显示错误提示等
                });
        });
    };

    const [form] = Form.useForm();

    const compareToFirstPassword = (_, value) => {
        const password = form.getFieldValue('password');
        if (value && value !== password) {
            return Promise.reject('The two passwords do not match.');
        } else {
            return Promise.resolve();
        }
    };

    return (
        <div className="register-container">
            <Form name="register-form" onFinish={doRegister}  form={form} >
                <Form.Item name="name" label="Name" rules={[{ required: true }]} className="form-item">
                    <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} className="form-item">
                    <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        { required: true, message: 'Please enter your password' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    rules={[
                        { required: true, message: 'Please confirm your password' },
                        { validator: compareToFirstPassword },
                    ]}
                    dependencies={['password']}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className="form-item" >
                    <Button type="primary" htmlType="submit" className="register-button" block>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
