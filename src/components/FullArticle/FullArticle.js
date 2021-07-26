import React, {useEffect, useState} from "react";
import img_human from "../../assets/images/human.png"
import eye from "../../assets/images/eye icon.png"
import {Link, useParams} from 'react-router-dom';

import "./FullArticle.scss";

const FullArticle = () => {

  let {id} = useParams();
  const myArticle = JSON.parse(localStorage.getItem("art"));

  const oneArt = myArticle?.filter((myArticle => myArticle.id === +id))[0]
  const user = JSON.parse(localStorage.getItem("users"));
  console.log('===>user', user[0].firstNameInput);
  return (
    <div>
      <div className="Art__container">
        <button className="button">
          <Link to='/inprof/' style={{textDecoration: 'none', color: '#8C8C8C'}}>
            My profile
          </Link>
        </button>
        <div className="coloum__content">
          <div className="prof__cont__art">
            <div className="main__bottom__art">

              <div className="main__bottom__new">

                <div>
                  <button>{oneArt?.category}</button>
                </div>
                <h2 className="h2__text">
                  {oneArt?.title}
                </h2>
                <div className="main__panel__bottom__art">
                  <div>
                    <p className="p__text">
                      <div dangerouslySetInnerHTML={{__html: oneArt.titleForShow}} className="p__text"/>
                    </p>
                  </div>
                  <div className="state">

                  </div>

                  <div className="main__panel__bottom">
                    <div className="hum_cont">
                      <div className="main__panel__bottom__human">
                        <div>
                          <img src={img_human}/>
                        </div>
                        <div>
                          <p className="p__human">{user[0].firstNameInput.value + ' ' + user[0].secondNameInput.value}</p>
                        </div>
                      </div>
                      <div>
                        <p className="p__human__second">{oneArt?.data2}</p>
                      </div>
                      <div className="main__panel__bottom__human__second">
                        <div>
                          <img src={eye}/>
                        </div>
                        <div>
                          <p className="p__human__second">1690</p>
                        </div>
                      </div>
                    </div>
                    <div className="bot">
                      <button className="but">Typography</button>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullArticle;