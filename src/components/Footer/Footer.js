import React from "react";
import "./Footer.scss"
import logo from '../../assets/images/Logo.png';
const Footer = () => {
    return (
        <div>
            <div className="footer__container">
                <div className="footer__second__container">
                    <div className="foot">
                        <div>
                            <img src={logo}/>
                        </div>
                        <div>
                            <button className="footer__button">
                                Log in
                            </button>
                            <button className="footer__button">
                                Sing in
                            </button>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div>
                            © 2021 Justice-it. All rights reserved.
                        </div>
                        <div>
                            © 2021 Justice-it. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
