import { useState, useEffect } from "react";
import InfoColor from "./infoColor";
import { ShoppingCartOutlined, UserSwitchOutlined, RetweetOutlined } from "@ant-design/icons";
import BrendLogo from "../../../assets/image/brend-logo.png"
import ModalComp from "../../../companents/modal";

const CardInfoComp = () => {

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

    return <div className="act__card__info">
        <InfoColor/>
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
}

export default CardInfoComp;