import CardInfoComp from "./cardInfo";
import CardSlider from "./cardslidercomp";
import React, { useEffect, useState } from "react"

const ActCardComp = () => {

    const [data, setData] = useState([]);

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
            {
                data.slice(0,1).map(item => (
                    <div className="card__image">
                        <img src={item.image} alt="item image" />
                    </div>
                ))
            }
        </div>
        <div className="card__info__page">
          <CardInfoComp/>
        </div>
        <div className="card__plan">
          <div className="card__title">
            <h2>0% рассрочка</h2>
          </div>
          <div className="card__price">
            <h1>92.000 UZS</h1>
            <span>4X</span>
          </div>
          <div className="card__text">
            <p>Быстро доставим любой Ваш заказ по всему Узбекистану!</p>
            <p>Срок доставки от 1 до 2х рабочих дней Стоимость доставки: 30 000 сум!</p>
          </div>
        </div>
    </div>
}

export default ActCardComp;