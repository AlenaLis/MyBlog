import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Header.scss"
import logo from '../../assets/images/Logo.png';
const Header = () => {
  if (!localStorage.getItem('isLogin')) {
    localStorage.setItem('isLogin', 'true');
  }

  const [select, setSelect] = useState(localStorage.getItem('isLogin'))
console.log('===>select', select);
  return (
    <div>
      <div className="wrapper__second__header">
        <div className="header">
          <div className="header__container">
            <img src={logo}/>
            <div>
              {select === 'true'
                ? (
                  <div>
                    <Link to='/login/'>
                    <button className="header__button">
                       Log in
                    </button></Link>
                    <Link to='/singin/'>
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
                        localStorage.setItem('isLogin', 'true')
                        setSelect(localStorage.getItem('isLogin'))
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
