import React, { useState } from 'react';
import {
    EditOutlined,
    EllipsisOutlined,
    InboxOutlined,
    PlusOutlined,
    SettingOutlined,
    UploadOutlined
} from '@ant-design/icons';
import '../styles/Resume.css'
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    DatePicker,
    Space,
    Typography,
    Card,
    Upload,
    Avatar,
    Image,
    InputNumber
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { PDFDownloadLink, Document, Page, Text ,PDFViewer} from '@react-pdf/renderer';
import {   View,  StyleSheet } from '@react-pdf/renderer';

const { Meta } = Card;
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

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });


    return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Row justify="center">
                        <Col  span={24}>

                            <Form onFinish={handleSubmit} size="middle" className="form-container" >
                                <Form.Item>
                                    <Image
                                        width={200}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                </Form.Item>
                                <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item label="邮箱" name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item label="电话" name="phone" rules={[{ required: true, message: '请输入电话' }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name={['user', 'age']}
                                    label="Age"
                                    rules={[
                                        {   required:true,
                                            type: 'number',
                                            min: 0,
                                            max: 99,
                                        },
                                    ]}
                                >
                                    <InputNumber />
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
                                <Form.Item
                                    name="upload"
                                    label="Upload"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    extra="longgggggggggggggggggggggggggggggggggg"
                                >
                                    <Upload name="logo" action="/upload.do" listType="picture">
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload>
                                </Form.Item>
                                <Form.Item label="Dragger">
                                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                        <Upload.Dragger name="files" action="/upload.do">
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item
                                    wrapperCol={{
                                        span: 12,
                                        offset: 6,
                                    }}
                                >
                                    <Space>
                                        <Button type="primary" htmlType="submit">
                                            保存
                                        </Button>
                                        <Button htmlType="reset">reset</Button>
                                    </Space>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Page>
            </Document>
    );
};

export default ResumeForm;
