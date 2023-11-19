import { useState, useEffect } from "react";

const InfoColor = () => {

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

    return <div className="info__color">
        <div className="info__title">
            <p>Цвет:</p>
        </div>
        <div className="info__img">
            {
                data.slice(0,3).map(item => (
                    <div className="color__card">
                        <img src={item.image} alt="card image" />
                    </div>
                ))
            }
        </div>
    </div>
}

export default InfoColor;