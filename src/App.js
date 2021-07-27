import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, { useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {routes} from "./routes/routes";

import './App.scss';

const App = () => {

  const [isAuth, setIsAuth] = useState(false)
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')));

  if (!isLogin) {
    localStorage.setItem('isLogin', JSON.stringify(false));
  }

  const changeIsAuth = () => {
    setIsAuth(!isAuth)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <div className="wrapper__header">
            <Header changeIsAuth={changeIsAuth}/>
          </div>
          <Switch>
            <div className="wrapper__all">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </div>
          </Switch>
          <div className="wrapper__footer">
            <Footer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
