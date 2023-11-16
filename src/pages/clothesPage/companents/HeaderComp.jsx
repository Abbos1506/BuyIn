import { Link } from "react-router-dom"

const HeaderComp = () => {
    return <div className="header container">
        <div className="menu__list">
            <ul className="menu__item">
                <Link>Главная</Link>
                <Link>Спорт</Link>
                <Link>Спортивные кроссовки</Link>
            </ul>
        </div>
        <div className="header__title">
            <h1>Спортивные кроссовки</h1>
            <p>341 товаров</p>
        </div>
        <div className="header__btns">
            <button>Nike Jordan N312</button>
            <button>Adidas Predator</button>
            <button>New Balance 240</button>
            <button>FILA Super SPEED</button>
            <button>Nike Jordan N312</button>
        </div>
    </div>
}

export default HeaderComp;