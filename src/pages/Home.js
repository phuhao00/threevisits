import React from 'react';
import Navbar from '../components/Navbar'; // 导入导航栏组件
import Banner from '../components/Banner'; // 导入横幅组件
import Features from '../components/Features'; // 导入特点组件
import Testimonials from '../components/Testimonials'; // 导入推荐语组件
import Footer from '../components/Footer'; // 导入页脚组件
const Home = () => {
    return (
        <div>
            <Navbar /> {/* 导航栏 */}
            <Banner /> {/* 横幅 */}
            <Features /> {/* 特点 */}
            <Testimonials /> {/* 推荐语 */}
            <Footer /> {/* 页脚 */}
        </div>
    );
};

export default Home;
