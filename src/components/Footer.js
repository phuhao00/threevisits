import { Layout, Row, Col } from 'antd';
import '../styles/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    const githubUrl = 'https://github.com/your-username/your-repo';
    const bilibiliUrl = 'https://github.com/your-username/your-repo';
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-heading">Github</h3>
                    <Link to={githubUrl} target="_blank">
                        Visit My GitHub repo
                    </Link>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">bilibili</h3>
                    <Link to={bilibiliUrl} target="_blank">
                        Visit My Bilibili
                    </Link>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Contact me</h3>
                    <p className="footer-text">Email: outlook@example.com</p>
                    <p className="footer-text">Phone: +123456789</p>
                    <p className="footer-text">Wechat: werchatId</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
