import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {blogs} from "../../assets/Services/mock";

import eyeicon from '../../assets/images/eye icon.png';
import mainpic from '../../assets/images/pictureMain1.png';
import mainhuman from '../../assets/images/human.png';
import human1 from "../../assets/images/human.png";
import eye from "../../assets/images/eye icon.png";
import art from "../../assets/images/art4.png";
import "./Main.scss";

const Main = () => {
  let {id} = useParams();
  const [allBlogs, setAllBlogs] = useState([])
  const isBlogs = localStorage.getItem('blogs')
  useEffect(() => {

    if (!isBlogs) {
      localStorage.setItem('blogs', JSON.stringify(blogs))
      setAllBlogs(blogs)
    } else {
      setAllBlogs(JSON.parse(localStorage.getItem('blogs')))
    }
  }, [])
  const myArticle = JSON.parse(localStorage.getItem("art"));
  const [allArts, setAllArts] = useState([])
  useEffect(() => {
    if (!myArticle) {
      localStorage.setItem('art', JSON.stringify([]))
      setAllArts('art')
    } else {
      setAllArts(JSON.parse(localStorage.getItem('art')))
    }
  }, [])
  const myUser = JSON.parse(localStorage.getItem("users"));
  console.log('===>myArticle', myArticle);
  return (
    <div>

      <div className="main">
        <div className="main__top">
          <div>
            <img src={mainpic}/>
          </div>

          <div className="main__panel">
            <div>
              <button>#Typography</button>
            </div>
            <div>
              <h2 className="h2__text">
                Humane Typography in the Digital Age
              </h2>
              <p className="p__text">
                Human beings aren’t perfect. Perfection is something that will always elude us. There
                will always be a small part of humanity in everything we do. No matter how small that
                part, we should make sure that it transcends the limits of the medium. We have to think
                about the message first. What typeface should we use and why? Does the typeface match
                the message and what?
              </p>
            </div>
            <div className="main__panel__bottom">
              <div className="main__panel__bottom__human">
                <div>
                  <img src={mainhuman}/>
                </div>
                <div>
                  <p className="p__human">Janay Wright</p>
                </div>
              </div>
              <div>
                <p className="p__human__second">Jun 13 · 5 min read</p>
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
          </div>
        </div>
        <div className="main__bottom">
          <div>
            <h1 className="h1__main">Popular articles</h1>
          </div>
          {myArticle?.map((el) => (
            <div className="main__bottom__art">
              <div className="main__bottom__new">
                <div>
                  <img src={art}/>
                </div>
                  <div className="main__panel__bottom__art">
                    <div>
                      <button>{el.category}</button>
                    </div>
                    <div>
                      <h2 className="h2__text">
                        <Link to={`/fullart/${el.id}/`} path="/fullart/:id/"
                              style={{textDecoration: 'none', color: '#242424'}}>{el.title}</Link>
                      </h2>
                      <p className="p__text">
                        <div dangerouslySetInnerHTML={{__html: el.titleForShow}} className="p__text"/>
                      </p>
                    </div>
                  </div>
                  <div className="main__panel__bottom">
                    <div className="main__panel__bottom__human">
                      <div>
                        <img src={human1}/>
                      </div>
                      <div>
                        <p className="p__human">
                          {myUser[0].firstName ?
                            myUser[0].firstName.value + ' ' + myUser[0].secondName.value
                            :
                            myUser[0].firstNameInput.value + ' ' + myUser[0].secondNameInput.value}
                        </p>
                      </div>

                      <div>
                        <p className="p__human__second">
                          {el.data2}
                        </p>
                      </div>
                      <div className="main__panel__bottom__human__second">
                        <div>
                          <img src={eye}/>
                        </div>
                        <div>
                          <p className="p__human__second">
                            {el.watches}
                          </p>
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

export default Main;
