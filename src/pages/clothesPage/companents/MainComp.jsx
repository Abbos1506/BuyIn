import { Link } from "react-router-dom"
import SliderComp from "../../../companents/SliderComp";
import CardsComp from "./cardsComp";
import CardPagi from "./cardPagi";

const MainComp = () => {
    return <div className="mainComp container">
        <div className="maincomp__bar">
            <div className="bar__delivery">
                <div className="delivery__title">
                    <h2>Срок доставки</h2>
                </div>
                <div className="delivery__radios">
                    <input type="radio" id="1" name="radio"/>
                    <label htmlFor="radio">Неважно</label>
                </div>
                <div className="delivery__radios">
                    <input type="radio" id="2" name="radio"/>
                    <label htmlFor="radio">От 1 дней</label>
                </div>
                <div className="delivery__radios">
                    <input type="radio" id="3" name="radio"/>
                    <label htmlFor="radio">От 1 дней</label>
                </div>
                <div className="delivery__radios">
                    <input type="radio" id="4" name="radio"/>
                    <label htmlFor="radio">От 1 дней</label>
                </div>
            </div>
            <div className="bar__brend">
                <div className="brend__title">
                    <h2>Бренд</h2>
                </div>
                <div className="brend__checkbox">
                    <input type="checkbox" id="1" name="check"/>
                    <label htmlFor="check">Adidas</label>
                </div>
                <div className="brend__checkbox">
                    <input type="checkbox" id="2" name="check"/>
                    <label htmlFor="check">Nike</label>
                </div>
                <div className="brend__checkbox">
                    <input type="checkbox" id="3" name="check"/>
                    <label htmlFor="check">New Balance</label>
                </div>
                <div className="brend__checkbox">
                    <input type="checkbox" id="4" name="check"/>
                    <label htmlFor="check">FILA</label>
                </div>
                <div className="brend__checkbox">
                    <input type="checkbox" id="5" name="check"/>
                    <label htmlFor="check">Jordan</label>
                </div>
                <Link><ins>Показать все</ins></Link>
            </div>
            <div className="bar__size">
                <div className="size__title">
                    <h2>Размер</h2>
                </div>
                <div className="size__checkbox">
                    <input type="checkbox" />
                    <label htmlFor="">30</label>
                </div>
                <div className="size__checkbox">
                    <input type="checkbox" />
                    <label htmlFor="">31</label>
                </div>
                <div className="size__checkbox">
                    <input type="checkbox" />
                    <label htmlFor="">32</label>
                </div>
                <div className="size__checkbox">
                    <input type="checkbox" />
                    <label htmlFor="">33</label>
                </div>
                <div className="size__checkbox">
                    <input type="checkbox" />
                    <label htmlFor="">34</label>
                </div>
                <Link><ins>Показать все</ins></Link>
            </div>
            <div className="bar__color">
                <div className="color__title">
                    <h2>Цвет</h2>
                </div>
                <div className="color__btns">
                    <button className="btn1"></button>
                    <button className="btn2"></button>
                    <button className="btn3"></button>
                    <button className="btn4"></button>
                    <button className="btn5"></button>
                    <button className="btn6"></button>
                    <button className="btn7"></button>
                    <button className="btn8"></button>
                    <button className="btn9"></button>
                    <button className="btn10"></button>
                </div>
            </div>
            <div className="bar__price">
                <div className="price__title">
                    <h2>Цена</h2>
                </div>
                <div className="price__slider">
                    <SliderComp/>
                </div>
            </div>
        </div>
        <div className="mainComp">
            <div className="maincards">
                <CardsComp/>
                <div className="maincomp__card__btn">
                    <button>Показать еще</button>
                </div>
                <div className="card__pagination">
                    <CardPagi/>
                </div>
            </div>
        </div>
    </div>
}

export default MainComp;