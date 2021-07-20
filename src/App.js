import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {routes} from "./routes/routes";
import {blogs} from "./assets/Services/mock";

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <div className="wrapper__header">
            <Header/>
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
