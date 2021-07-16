import React from "react";

function Header() {
  return (
    <div>
      <div className="wrapper__second__header">
        <div className="header">
          <div className="header__container">
            <div>
              <img src="../image/Logo.png"/>
            </div>
            <div>
              <button className="header__button">
                Log in
              </button>
              <button className="header__button">
                Sing in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
