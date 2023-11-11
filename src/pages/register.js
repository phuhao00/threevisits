import React from 'react';
import {Form, Input, Button, message, Row, Col, Select, Cascader} from 'antd';
import StringifyWithCircularHandling from "../utils/json";
import {  Navigate,useNavigate } from 'react-router-dom';

import '../styles/register.css';
const { Option } = Select;

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const backendPort = process.env.REACT_APP_BACKEND_PORT;
const apiUrl = `${backendUrl}:${backendPort}/api`;
interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}
const residences: CascaderProps<DataNodeType>['options'] = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const Register = () => {
    const navigate = useNavigate();
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
                        navigate("/")
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
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );


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
                <Form.Item
                    name="residence"
                    label="Habitual Residence"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your habitual residence!' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
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
