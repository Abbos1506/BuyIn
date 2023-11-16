import { useState, useEffect } from "react";


const TrendPage = () => {
    
    const [data, setData] = useState([])

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

    return <div className="trend">
        <div className="trend__title">
            <h1>В Тренде</h1>
        </div>
        <div className="trend__cards container">
            {
                data.map(item => (
                    <div className="trend__card" key={item.id}>
                        <div className="trand__span">
                            <span>HOT</span>
                        </div>
                        <div className="trend__image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="trend__descriptopn">
                            <p>{item.category}</p>
                        </div>
                        <div className="trend__rating">
                            <p>rating: {item.rating.rate}</p>
                        </div>
                        <div className="trend__count">
                            <button className="count">{item.rating.count} sum</button>
                            <p>в месяц</p>
                        </div>
                        <div className="trend__price">
                            <p>{Math.floor(item.price)} $</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="trend__btn">
            <button className="btn">Показать еще</button>
        </div>
    </div>
}

export default TrendPage;