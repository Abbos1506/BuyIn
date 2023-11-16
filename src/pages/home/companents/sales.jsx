import { useEffect, useState } from "react";


const SalesPage = () => {

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

    return <div className="sales">
        <div className="sales__title">
            <h1>Распродажа</h1>
        </div>

        <div className="sales__cards container">
            {
                data.slice(0,5).map(item => (
                    <div className="sales__card" key={item.id}>
                        <div className="sales__span">
                            <span>HOT</span>
                        </div>
                        <div className="sales__image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="sales__description">
                            <p>{item.category}</p>
                        </div>
                        <div className="sales__rating">
                            <p>rating: {item.rating.rate}</p>
                        </div>
                        <div className="sales__count">
                            <button className="count">{item.rating.count} sum</button>
                            <p>в месяц</p>
                        </div>
                        <div className="sales__price">
                            <p>{Math.floor(item.price)} $</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="sales__btn">
            <button className="btn">Показать еще</button>
        </div>
    </div>
}

export default SalesPage;