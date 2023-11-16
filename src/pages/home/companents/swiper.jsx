import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';



const SwiperPage = () => {

  const [data,setData] = useState([])

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
    .catch((error) => console.log(error));
}, []);


  return <Carousel autoplay className='slider'>
      {
        data.map(item => (
          <div className="slider__content" key={item.id}>
            <div className="content__left">
              <div className="content__left__name">
                <h1>{item.category}</h1>
              </div>
              <div className="content__left__title">
                <p>{item.title}</p>
              </div>
              <div className="content__left__btn">
                <button>Подробнее</button>
              </div>
            </div>
            <div className="content__center">
              <div className="content__center__payment">
                <p>с рассрочкой 0%</p>
              </div>
              <div className="content__center__price">
                <p>price: {Math.floor(item.price)} $</p>
              </div>
            </div>
            <div className="content__image">
              <img src={item.image} alt="image" />
            </div>
          </div>
        ))
      }
  </Carousel>
};
export default SwiperPage;