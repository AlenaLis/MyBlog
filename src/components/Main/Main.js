import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {blogs} from "../../assets/Services/mock";

import eyeicon from '../../assets/images/eye icon.png';
import mainpic from '../../assets/images/pictureMain1.png';
import mainhuman from '../../assets/images/human.png';
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
                  <img src={eyeicon}/>
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
          {allBlogs?.map((blog) => (
            <div className="main__bottom__art">
              <div className="main__bottom__new">
                <div>
                  <img src={blog.img_art}/>
                </div>

                <div className="main__panel__bottom__art">
                  <div>
                    <button>{blog.link}</button>
                  </div>
                  <div>
                    <h2 className="h2__text">
                      <Link to={`/art/${blog.id}/`} path="/posts/:id" style={{ textDecoration: 'none', color:'#242424'}}>{blog.title}</Link>
                    </h2>
                    <p className="p__text">
                      {blog.text}
                    </p>
                  </div>

                  <div className="main__panel__bottom">
                    <div className="main__panel__bottom__human">
                      <div>
                        <img src={blog.img_human}/>
                      </div>
                      <div>
                        <p className="p__human">
                          {blog.name}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="p__human__second">
                        {blog.date}
                      </p>
                    </div>
                    <div className="main__panel__bottom__human__second">
                      <div>
                        <img src={blog.eye}/>
                      </div>
                      <div>
                        <p className="p__human__second">
                          {blog.count_eye}
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
