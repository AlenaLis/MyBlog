import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/Logo.png';
import './Footer.scss';

const Footer = () => {

  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')));

  const islogout = () => {
    localStorage.setItem('isLogin', JSON.stringify(false))
    setIsLogin(JSON.parse(localStorage.getItem('isLogin')))
    localStorage.setItem('myUser', JSON.stringify([]))
    window.location.reload();
  };

  return (
    <div>
      <div className="footer__container">
        <div className="footer__second__container">
          <div className="foot">
            <div>
              <img
                src={logo}
                alt='Logo'
              />
            </div>
            {!isLogin
              ? (
                <div>
                  <Link to='/singin/'>
                    <button className="footer__button">
                      Log in
                    </button>
                  </Link>
                  <Link to='/login/'>
                    <button className="footer__button">
                      Sing in
                    </button>
                  </Link>
                </div>
              ) :
              <div>
                <button
                  className="footer__button"
                  onClick={islogout}
                >
                  Logout
                </button>
              </div>
            }
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
