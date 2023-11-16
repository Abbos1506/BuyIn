import { useState, useEffect } from "react";

const AddsPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?sort=desc", {
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

    return <div className="adds">
        <div className="container">
            {
                data.slice(0,1).map(item => (
                    <div className="adds__card" key={item.id}>
                        <div className="adds__info">
                            <h1 className="adds__info__title">{item.title}</h1>
                            <p className="adds__info__text">{item.description}</p>
                            <button className="adds__info__btn">Подробнее</button>
                        </div>
                        <div className="adds__image">
                            <img src={item.image} alt={item.category} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}

export default AddsPage;