import React, { useState, useEffect } from 'react';

const CardSlider = () => {

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
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        <div className="card__slider">
            {
                data.map(item => (
                    <div className="card__slider__image" key={item.id}>
                        <img src={item.image} alt="slider image" />
                    </div>
                ))
            }
        </div>
    </>
  );
};
export default CardSlider;