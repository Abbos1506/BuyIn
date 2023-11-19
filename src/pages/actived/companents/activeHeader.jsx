import { Link } from "react-router-dom"  
import ActCardComp from "./activeCard";

const ActiveHeaderComp = () => {
    return <div className="actHeader__comp container">
        <div className="act__links">
            <Link to="/">Главная</Link>
            <Link to="/женщинам">Спорт</Link>
            <Link>Спортивные кроссовки</Link>
            <Link>Adidas Yeezy 350 V2 “Clay</Link>
        </div>
        <div className="act__title">
            <h1>Adidas Yeezy 350 V2 “Clay”</h1>
        </div>
        <div className="act__card">
            <ActCardComp/>
        </div>
    </div>
}

export default ActiveHeaderComp;