import HeaderComp from "./companents/HeaderComp";
import MainComp from "./companents/MainComp";
import Footer from "../home/companents/footer";
import React from 'react';
import { FloatButton } from 'antd';

const ClothesPage = () => {
    return <div className="clothesPage"
    style={{
        height: '300vh',
        padding: 10,
    }}>
        <HeaderComp/>
        <MainComp/>
        <Footer/>
        <FloatButton.BackTop />
    </div>
}

export default ClothesPage;