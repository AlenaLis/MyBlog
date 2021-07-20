import React, {useEffect, useState} from "react";

import {blogs} from "../../assets/Services/mock";
import {Link, useParams} from 'react-router-dom';


import "./Artickle.scss"
import art from '../../assets/images/profArt1.png';
import art2 from '../../assets/images/ArtCont1.png';
import eyeicon from '../../assets/images/eye icon.png';
import human1 from '../../assets/images/human.png';


const Article = () => {
  let idParams = useParams();

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

  console.log('===>allBlogs', allBlogs);
  console.log('===>idParams', idParams);

  const oneBlog = allBlogs?.filter((blog => blog.id === Number(idParams.id)))[0]
  console.log('===>oneBlog', oneBlog);

  return (
    <div>
      <div className="Art__container">
        <button className="button">
          <Link to='/' style={{ textDecoration: 'none', color:'#8C8C8C'}}>
          All articles
          </Link>
        </button>
        <div className="coloum__content">
          <div className="prof__cont__art">
            <div className="main__bottom__art">
              <div className="main__bottom__new">
                <div>
                  <button>#Typography</button>
                </div>
                <h2 className="h2__text">
                  {oneBlog?.title}
                </h2>
                <div>
                  <img src={oneBlog?.img_art} className="art"/>
                </div>
                <div className="main__panel__bottom__art">
                  <div>
                    <p className="p__text">
                      {oneBlog?.text}
                    </p>
                    <p className="p__text">
                      {oneBlog?.text}
                    </p>
                    <p className="p__text">
                      {oneBlog?.text}
                    </p>
                  </div>
                  <div className="state">
                    <h3>
                      {oneBlog?.title}
                    </h3>
                    <p>
                      {oneBlog?.text}
                    </p>
                    <p>
                      {oneBlog?.text}
                    </p>
                    <img src={oneBlog?.img_art}/>
                    <figcaption>The 42–Line Bible, printed by Gutenberg.</figcaption>
                    <p>
                      {oneBlog?.text}
                    </p>
                  </div>
                  <div className="state">
                    <h3>
                      Chasing perfection
                    </h3>
                    <p>
                      {oneBlog?.text}
                    </p>
                  </div>
                  <div className="main__panel__bottom">
                    <div className="hum_cont">
                      <div className="main__panel__bottom__human">
                        <div>
                          <img src={oneBlog?.img_human}/>
                        </div>
                        <div>
                          <p className="p__human">{oneBlog?.name}</p>
                        </div>
                      </div>
                      <div>
                        <p className="p__human__second">{oneBlog?.date}</p>
                      </div>
                      <div className="main__panel__bottom__human__second">
                        <div>
                          <img src={oneBlog?.eye}/>
                        </div>
                        <div>
                          <p className="p__human__second">{oneBlog?.count_eye}</p>
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

export default Article;
