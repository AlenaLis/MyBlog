import React from "react";
import "./AddArt.scss"
import b from '../../assets/images/B.png';
import i from '../../assets/images/I.png';
import u from '../../assets/images/Underline.png';
import s from '../../assets/images/S.png';
import y from '../../assets/images/{}.png';
import x1 from '../../assets/images/X2.png';
import x2 from '../../assets/images/X-2.png';
import f3 from '../../assets/images/3.png';
import f4 from '../../assets/images/f4.png';
import f5 from '../../assets/images/f5.png';
import f6 from '../../assets/images/f6.png';
import f7 from '../../assets/images/f7.png';
import f8 from '../../assets/images/f8.png';
import f9 from '../../assets/images/f9.png';
import f10 from '../../assets/images/f10.png';
const AddArt = () => {
  return (
    <div>
      <div className="addArt__content">
        <div>
          <h2 className="h2__text"> Add article </h2>
        </div>
        <div>
          <div className="func">
            <div className="left">
              <img src={b}/>
              <img src={i}/>
              <img src={u}/>
              <img src={s}/>
              <img src={y}/>
              <img src={x1}/>
              <img src={x2}/>
              <img src={f3}/>
              <img src={f4}/>
              <img src={f5}/>
              <img src={f6}/>
            </div>
            <div className="right">
              <img src={f7}/>
              <img src={f8}/>
              <img src={f9}/>
              <img src={f10}/>
            </div>
          </div>
          <form className="valid__form">
            <input className="input" type="text" name="title"/>
            <input className="input" type="text" name="category"/>
            <input className="input__text" type="text" name="art"/>
          </form>
        </div>
        <div className="valid__bottom">
          <button className="button__valid">Publish an article</button>
        </div>
      </div>
    </div>
  );
}

export default AddArt;
