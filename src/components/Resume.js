import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import '../styles/Resume.css'
import { Form, Input, Button,Row,Col,DatePicker, Space, Typography,Card, Upload, } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const ResumeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        education: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 在这里处理提交表单的逻辑，例如将数据发送到服务器或执行其他操作
        console.log(formData);
        // 清空表单数据
        setFormData({
            name: '',
            email: '',
            phone: '',
            experience: '',
            education: '',
        });
    };
    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const [form] = Form.useForm();

    return (
        <Row justify="center">
            <Col xs={24} sm={20} md={16} lg={12} xl={8}>
                <Form onFinish={handleSubmit}>
                    <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="邮箱" name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="电话" name="phone" rules={[{ required: true, message: '请输入电话' }]}>
                        <Input />
                    </Form.Item>



                    <Form.List name="items">
                        {(fields, { add, remove }) => (
                            <div
                                style={{
                                    display: 'flex',
                                    rowGap: 16,
                                    flexDirection: 'column',
                                }}
                            >
                                {fields.map((field) => (
                                    <Card
                                        size="small"
                                        title={`项目 ${field.name + 1}`}
                                        key={field.key}
                                        extra={
                                            <CloseOutlined
                                                onClick={() => {
                                                    remove(field.name);
                                                }}
                                            />
                                        }
                                    >
                                        <Form.Item
                                            name="project_name"
                                            label="项目名称"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Row gutter={16}>
                                            <Col  span={12}>
                                                <Form.Item label="开始日期">
                                                    <DatePicker />
                                                </Form.Item>
                                            </Col>
                                            <Col  span={12}>
                                                <Form.Item label="结束日期">
                                                    <DatePicker />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Form.Item label="工作经验" name="experience" rules={[{ required: true, message: '请输入工作经验' }]}>
                                            <TextArea
                                                showCount
                                                maxLength={100}
                                                onChange={onChange}
                                                placeholder="disable resize"
                                                style={{
                                                    height: 120,
                                                    resize: 'none',
                                                }}
                                            />
                                        </Form.Item>

                                        {/* Nest Form.List */}
                                        <Form.Item label="项目">
                                            <Form.List name={[field.name, 'list']}>
                                                {(subFields, subOpt) => (
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            rowGap: 16,
                                                        }}
                                                    >
                                                        {subFields.map((subField) => (
                                                            <Space key={subField.key}>
                                                                <Form.Item noStyle name={[subField.name, 'first']}>
                                                                    <Input placeholder="first" />
                                                                </Form.Item>
                                                                <CloseOutlined
                                                                    onClick={() => {
                                                                        subOpt.remove(subField.name);
                                                                    }}
                                                                />
                                                            </Space>
                                                        ))}
                                                        <Button type="dashed" onClick={() => subOpt.add()} block>
                                                            + 添加项目
                                                        </Button>
                                                    </div>
                                                )}
                                            </Form.List>
                                        </Form.Item>
                                    </Card>
                                ))}

                                <Button type="dashed" onClick={() => add()} block>
                                    + 添加项目
                                </Button>
                            </div>
                        )}
                    </Form.List>

                    <Form.List name="items">
                        {(fields, { add, remove }) => (
                            <div
                                style={{
                                    display: 'flex',
                                    rowGap: 16,
                                    flexDirection: 'column',
                                }}
                            >
                                {fields.map((field) => (
                                    <Card
                                        size="small"
                                        title={`教育背景 ${field.name + 1}`}
                                        key={field.key}
                                        extra={
                                            <CloseOutlined
                                                onClick={() => {
                                                    remove(field.name);
                                                }}
                                            />
                                        }
                                    >
                                        <Form.Item
                                            name="project_name"
                                            label="学校名称"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Row gutter={16}>
                                            <Col  span={12}>
                                                <Form.Item label="开始日期">
                                                    <DatePicker />
                                                </Form.Item>
                                            </Col>
                                            <Col  span={12}>
                                                <Form.Item label="结束日期">
                                                    <DatePicker />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Form.Item label="自我评价" name="education" rules={[{ required: true, message: '请输入教育背景' }]}>
                                            <TextArea
                                                showCount
                                                maxLength={100}
                                                onChange={onChange}
                                                placeholder="disable resize"
                                                style={{
                                                    height: 120,
                                                    resize: 'none',
                                                }}
                                            />
                                        </Form.Item>

                                        {/* Nest Form.List */}
                                        <Form.Item label="课程">
                                            <Form.List name={[field.name, 'list']}>
                                                {(subFields, subOpt) => (
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            rowGap: 16,
                                                        }}
                                                    >
                                                        {subFields.map((subField) => (
                                                            <Space key={subField.key}>
                                                                <Form.Item noStyle name={[subField.name, 'first']}>
                                                                    <Input placeholder="first" />
                                                                </Form.Item>
                                                                <CloseOutlined
                                                                    onClick={() => {
                                                                        subOpt.remove(subField.name);
                                                                    }}
                                                                />
                                                            </Space>
                                                        ))}
                                                        <Button type="dashed" onClick={() => subOpt.add()} block>
                                                            + 添加课程
                                                        </Button>
                                                    </div>
                                                )}
                                            </Form.List>
                                        </Form.Item>
                                        <Form.Item label="添加证书" valuePropName="fileList" getValueFromEvent={normFile}>
                                            <Upload action="/upload.do" listType="picture-card">
                                                <div>
                                                    <PlusOutlined />
                                                    <div
                                                        style={{
                                                            marginTop: 8,
                                                        }}
                                                    >
                                                    </div>
                                                </div>
                                            </Upload>
                                        </Form.Item>
                                    </Card>
                                ))}

                                <Button type="dashed" onClick={() => add()} block>
                                    + 添加教育背景
                                </Button>
                            </div>
                        )}
                    </Form.List>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default ResumeForm;
