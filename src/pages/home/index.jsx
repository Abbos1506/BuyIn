import SwiperPage from "./companents/swiper";
import ProductPage from "./companents/products";
import TrendPage from "./companents/trends";
import AddsPage from "./companents/adds";
import SalesPage from "./companents/sales";
import Footer from "../home/companents/footer";
import React from 'react';
import { FloatButton } from 'antd';

const HomePage = () => {
    return <div className="home"
      style={{
        height: '300vh',
        padding: 10,
    }}>
        <div className="swiper__page">
            <div className="container">
                <SwiperPage/>
            </div>
        </div>
        <div className="product__page">
      <div className="container">
        <ProductPage/>
      </div>
    </div>
    <div className="trend__page">
      <TrendPage/>
    </div>
    <div className="addspage">
      <div className="container">
        <AddsPage/>
      </div>
    </div>
    <div className="sales__page">
      <SalesPage/>
    </div>
    <div className="sales__page2">
      <SalesPage/>
    </div>
    <div className="footer__page">
      <Footer/>
    </div>
    <FloatButton.BackTop />
    </div>
}

export default HomePage;