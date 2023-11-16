import { Link, Routes, Route } from "react-router-dom"
import LocationImg from "../assets/image/LocationImg.png";
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import BoxImg from "../assets/image/Box.png";
import Category from "./category";
import SaveImg from "../assets/image/Heart.png";
import KorzinaImg from "../assets/image/korzinaImg.png";
import UserImg from "../assets/image/UserImg.png";
import routeData from "../utils/routeData";

const Root = () => {
    return <div className="root">
        <div className="root__info">
        <div className="root__bar container">
            <div className="root__left">
                <button className="root__left__btn">0% Рассрочка</button>
                <Link className="root__left__link">Пункт выдачи</Link>
                <div className="root__left__location">
                    <img src={LocationImg} alt="location image" />
                    <p className="root__left__text">г.Ургенч</p>
                </div>
            </div>
            <div className="root__right">
                <Link className="root__right__link"><ins>Часто задаваемые вопросы</ins></Link>
                <button className="root__right__btn">Заказать звонок</button>
                <select name="select" id="" className="root__right__select">
                    <option value="1">UZ</option>
                    <option value="2">RU</option>
                    <option value="3">EN</option>
                </select>
            </div>
        </div>
        </div>
        <div className="root__navbar">
            <div className="root__navigation container">
                <div className="root__buy__btn">
                    <button>BUY</button>
                    <h1>IN</h1>
                </div>
                <div className="root__category">
                    <Category/>
                </div>
                <div className="root__search">
                    <input type="text" className="search" placeholder="Введите запрос..."/>
                    <button className="search__btn"><SearchOutlined /></button>
                </div>
                <button className="root__box__btn">
                    <img src={BoxImg} alt="box image" />
                    <p className="box__title">Мои заказы</p>
                </button>
                <button className="root__save__btn">
                    <img src={SaveImg} alt="image" />
                    <p className="save__title">Избранное</p>
                </button>
                <button className="root__korzina__btn">
                    <img src={KorzinaImg} alt="image" />
                    <p className="korzina__title">Корзина</p>
                </button>
                <button className="root__registr__btn">
                    <img src={UserImg} alt="image" />
                    <p className="registr__title">Регистрация</p>
                </button>
            </div>
        </div>

        <div className="clothes__page">
            {
                routeData.map(item => (
                    <Routes key={item.id}>
                        <Route path={item.path} element={item.companent}/>
                    </Routes>
                ))
            }
        </div>
    </div>
} 

export default Root;