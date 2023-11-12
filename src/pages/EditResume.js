import React, { useState } from 'react';
import Resume from '../components/Resume';
import Navbar from '../components/Navbar';
import { Col, Row,Popover,Button} from "antd";
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import App from "../App";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const EditResume=()=>{
    const click=()=>{
        ReactPDF.render(<Resume/>, `${__dirname}/example.pdf`).then(r =>{}) ;
    };

    const handleGeneratePDF = () => {
        const element = document.getElementById('pdf-content');

        html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
            const imageData = canvas.toDataURL('image/jpg');
            const pdf = new jsPDF('p', 'pc', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imageData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('example.pdf');
        });
    };

    return (
        <div className="Edit-container ">
            <Row gutter={2}>
                <Col span={24}>
                    <Navbar></Navbar>
                </Col>

            </Row>
            <Row gutter={2} justify="center">
                <Col span={13} id="pdf-content">
                    <Resume></Resume>
                </Col>

                {/*<Col>*/}
                {/*    <PDFViewer>*/}
                {/*    </PDFViewer>*/}
                {/*</Col>*/}
            </Row>
            <Row>
                <Col span={24} >
                    <div id="pdf-content">
                        <Button type="primary" onClick={handleGeneratePDF}>
                            Generate PDF
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default EditResume
