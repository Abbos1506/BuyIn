import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const CardsComp = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
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

    return <div className="cardsComp">
        <div className="clothes__cards"> 
        {
            data.map(item => (
                <Link to="/спорт">
                <div className="clother__card">
                    <div className="card__img">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="card__title">
                        <h2>{item.category}</h2>
                    </div>
                    <div className="card__rating">
                        <p>rating: {item.rating.rate}</p>
                    </div>
                    <div className="card__info">
                        <button>{item.rating.count} sum</button>
                        <p>в месяц</p>
                    </div>
                    <div className="card__price">
                        <p>{Math.floor(item.price)} $</p>
                    </div>
                </div>
                </Link>
            ))
        }
        </div>
    </div>
}

export default CardsComp;