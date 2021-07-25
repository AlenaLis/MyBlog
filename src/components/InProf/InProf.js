import "./InProf.scss";
import prof1 from "../../assets/images/profArt1.png";
import human1 from "../../assets/images/human.png";
import eyeicon from "../../assets/images/eye icon.png";
import prof2 from "../../assets/images/profArt2.png";
import prof3 from "../../assets/images/profArt3.png";
import prof4 from "../../assets/images/profArt4.png";
import React, {useEffect, useState} from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState, convertToRaw} from "draft-js";


import prof from "../../assets/images/prof_photo.png";
import draftToHtml from 'draftjs-to-html';


const InProf = () => {


  const myArticle = JSON.parse(localStorage.getItem("art"));

  return (
    <div>
      <div className="inProf__container">
        <div className="prof__cont__photo">
                    <span className="line">
                        <div>
                            <img src={prof}/>
                        </div>
                        <div>
                            <h3>Janay Wright</h3>
                        </div>
                        <div>
                            <p>Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.</p>
                        </div>
                    </span>
        </div>
        <div className="coloum__content">
          {myArticle?.map((el) => (
            <div className="prof__cont__art">
              <div className="main__bottom__art">
                <div className="main__bottom__new">


                  <div className="main__panel__bottom__art">
                    <div>
                      <button>{el.category}</button>
                    </div>
                    <div>
                      <h2 className="h2__text">
                        {el.title}
                      </h2>
                      <div dangerouslySetInnerHTML={{__html: el.titleForShow}}/>
                    </div>

                    <div className="main__panel__bottom">
                      <div className="main__panel__bottom__human">
                        <div>
                          <div/>
                        </div>
                        <div>
                          <p className="p__human">{el.name}</p>
                        </div>
                      </div>
                      <div>
                        <p className="p__human__second">{el.data2}</p>
                      </div>
                      <div className="main__panel__bottom__human__second">
                        <div>
                          <img src={el.eye}/>
                        </div>
                        <div>
                          <p className="p__human__second">{el.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="bottom__button">
            <div>
              <button className="prev__next__button">Prev</button>
            </div>
            <div>
              <button className="prev__next__button">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InProf;
