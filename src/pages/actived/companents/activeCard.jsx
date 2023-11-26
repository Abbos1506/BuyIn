import CardSlider from "./cardslidercomp";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined, UserSwitchOutlined, RetweetOutlined } from "@ant-design/icons";
import BrendLogo from "../../../assets/image/brend-logo.png"
import ModalComp from "../../../companents/modal";


const ActCardComp = () => {

    const [data, setData] = useState([]);
    const [id, setId] = useState("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "e-commers",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
  }, []);

    return <div className="actcard__comp">
        <div className="card__slider">
            <CardSlider/>
        </div>
        <div className="comp__img">
            <div className="card__image">
              <img src={id} alt="/" key={id}/>
            </div>
        </div>
        <div className="card__image__info">
        <div className="card__info__page">
        <div className="info__color">
        <div className="info__title">
            <p>Цвет:</p>
        </div>
        <div className="info__img">
            {
                data.slice(0,3).map(item => (
                    <div className="color__card" key={item.id}  onClick={() => setId(item.image)}>
                        <img src={item.image} alt="card image" />
                    </div>
                ))
            }
        </div>
    </div>
        </div>
        <div className="card__description">
            {
                data.slice(0,1).map(item => (
                    <div className="description__card" key={item.id}>
                        <div className="description__title">
                            <p>Состав: {item.category}</p>
                        </div>
                        <div className="description__size">
                            <h2>Размеры:</h2>
                            <select name="select" id="1">
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                            </select>
                        </div>
                        <div className="description__links">
                            <div className="description__delivery">
                                <i><ShoppingCartOutlined /></i>
                                <p>Бесплатная доставка</p>
                            </div>
                            <div className="description__delivery">
                                <i><UserSwitchOutlined /></i>
                                <p>Примерка</p>
                            </div>
                            <div className="description__delivery">
                                <i><RetweetOutlined /></i>
                                <p>Возврат товара</p>
                            </div>
                        </div>
                        <div className="description__brend">
                            <div className="brend__title">
                                <p>Бренд</p>
                            </div>
                            <div className="brend__image">
                                <img src={BrendLogo} alt="brend logo" />
                            </div>
                        </div>
                        <div className="description__title">
                            <h2>{Math.floor(item.price)} 000 UZS</h2>
                        </div>
                        <div className="description__btn">
                            <ModalComp/>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        <div className="card__plan">
          <div className="card__plan__title">
            <h2>0% рассрочка</h2>
          </div>
          <div className="card__plan__price">
            <h1>92.000 UZS</h1>
            <span>4X</span>
          </div>
          <div className="card__plan__text">
            <p>Быстро доставим любой Ваш заказ по всему Узбекистану!</p>
            <p>Срок доставки от 1 до 2х рабочих дней Стоимость доставки: 30 000 сум!</p>
          </div>
        </div>
    </div>
}

export default ActCardComp;