import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/Logo.png';
import "./Header.scss"

const Header = () => {

  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')));

  const islogout = () => {
    localStorage.setItem('isLogin', JSON.stringify(false))
    setIsLogin(JSON.parse(localStorage.getItem('isLogin')))
    localStorage.setItem('myUser', JSON.stringify([]))
    window.location.reload();
  };

  return (
    <div>
      <div className="wrapper__second__header">
        <div className="header">
          <div className="header__container">
            <Link to='/'>
              <img
                src={logo}
                alt='Logo'
              />
            </Link>
            <div>
              {isLogin
                ? (<div className="link">
                    <p>
                      <Link to='/'>All articles</Link>
                    </p>
                    <p>
                      <Link to='/inprof/'>My articles</Link>
                    </p>
                    <p>
                      <Link to='/addarticle/'>Add article</Link>
                    </p>
                    <p>
                      <Link to='/profile/'>Profile</Link>
                    </p>
                    <div>
                      <button
                        className="header__button__second"
                        onClick={islogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )
                :
                <div>
                  <Link to='/singin/'>
                    <button className="header__button">
                      Log in
                    </button>
                  </Link>
                  <Link to='/login/'>
                    <button className="header__button">
                      Sing in
                    </button>
                  </Link>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
