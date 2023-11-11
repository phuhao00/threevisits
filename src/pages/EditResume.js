import React, { useState } from 'react';
import Resume from '../components/Resume';
import Navbar from '../components/Navbar';
import { Col, Row,Popover} from "antd";
const EditResume=()=>{

    return (
        <div>
            <Row gutter={2}>
                <Col span={24}>
                    <Navbar></Navbar>
                </Col>

            </Row>
            <Row>
                <Col span={24}>
                    <Resume></Resume>
                </Col>
            </Row>

        </div>
    )
}
export default EditResume
