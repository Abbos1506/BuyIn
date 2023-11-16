import { Link } from "react-router-dom";
import FooterImg1 from "../../../assets/image/Footer-img1.png";
import FooterImg2 from "../../../assets/image/Footer-img2.png";

const Footer = () => {
    return <div className="footer">
        <div className="footer__links">
        <div className="one">
            <Link >
                <ul className="lists">
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                </ul>
            </Link>
        </div>
        <div className="two">
            <div>
                <Link>
                    <ul className="lists">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </ul>
                </Link>
            </div>
            <div>
                <Link>
                    <ul className="lists">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </ul>
                </Link>
            </div>
        </div>
        <div className="three">
            <Link>
                <ul className="lists">
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                </ul>
            </Link>
        </div>
        <div className="four">
            <Link>
                <ul className="lists">
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                </ul>
            </Link>
        </div>
        <div className="available">
            <Link>
                <ul className="lists">
                    <h2>Available on</h2>
                    <div className="images">
                        <img src={FooterImg1} alt="footer image 1" />
                        <img src={FooterImg2} alt="footer image 2" />
                    </div>
                </ul>
            </Link>
        </div>
        </div>
        <div className="footer__info">
            <p className="footer__info__text">2023 - BuyIn - The most famous e-commerce website in Uzbekistan since in 2023</p>
        </div>
    </div>
}

export default Footer;