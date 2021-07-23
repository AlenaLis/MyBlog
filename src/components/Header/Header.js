import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Header.scss"
import logo from '../../assets/images/Logo.png';


const Header = () => {


  // if (!localStorage.getItem('isLogin')) {
  //   localStorage.setItem('isLogin', 'false');
  //
  // } else {
  //         localStorage.setItem('isLogin', 'true');
  //       }


  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')))
  return (
    <div>
      <div className="wrapper__second__header">
        <div className="header">
          <div className="header__container">
            <Link
              to='/'
              style={{ textDecoration: 'none'}}
            >
              <img src={logo}/>
            </Link>

            <div>
              {!isLogin
                ? (
                  <div>
                    <Link to='/singin/'>
                    <button className="header__button">
                       Log in
                    </button></Link>
                    <Link to='/login/'>
                    <button className="header__button">
                       Sing in
                    </button></Link>
                  </div>
                )
                : <div className="link">
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
                      onClick={() => {
                        localStorage.setItem('isLogin', JSON.stringify(false))
                        setIsLogin(JSON.parse(localStorage.getItem('isLogin')))
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
