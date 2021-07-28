import {Link, Redirect} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import human1 from '../../assets/images/human.png';
import eye from '../../assets/images/eye icon.png';
import prof from '../../assets/images/prof_photo.png';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MyArticlePage.scss';

const MyArticlePage = () => {

  const myArticle = JSON.parse(localStorage.getItem("art"));
  const myUser = JSON.parse(localStorage.getItem("myUser")) || [];

  useEffect(() => {
    if (!myArticle) {
      localStorage.setItem('art', JSON.stringify([]))
    }
  }, [])

  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')));

  return (
    <div>

      {myArticle && myArticle.length > 0
        ? (
          <div className="inProf__container">
            <div className="prof__cont__photo">
              {myUser.length > 0
                ? (
                  <span className="line">
                        <div>
                            <img
                              src={prof}
                              alt='User photo'
                            />
                        </div>
                        <div>
                            <h3>
                              {myUser[0].firstNameInput
                                ?
                                myUser[0].firstNameInput.value + ' ' +
                                myUser[0].secondNameInput.value
                                :
                                ''
                              }
                            </h3>
                        </div>
                        <div>
                            <p>
                              {myUser[0].descriptionInput
                                ?
                                myUser[0].descriptionInput.value
                                :
                                ''
                              }
                            </p>
                        </div>
                </span>
                )
                :
                ''
              }
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
                            <Link
                              to={`/fullart/${el.id}/`}
                              path="/fullart/:id/"
                            >
                              {el.title}
                            </Link>
                          </h2>
                          <div>
                            <div
                              dangerouslySetInnerHTML={{__html: el.titleForShow}}
                              className="p__text"
                            />
                          </div>
                        </div>
                        {myUser?.map((elUser) => (
                          <div className="main__panel__bottom">
                            <div className="main__panel__bottom__human">
                              <div>
                                <img
                                  src={human1}
                                  alt='profile photo'
                                />
                              </div>
                              <div>
                                <p className="p__human">
                                  {myUser[0].firstNameInput
                                    ?
                                    myUser[0].firstNameInput.value
                                    + ' ' +
                                    myUser[0].secondNameInput.value
                                    :
                                    ''
                                  }
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="p__human__second">{myArticle[0].data2}</p>
                            </div>
                            <div className="main__panel__bottom__human__second">
                              <div>
                                <img src={eye}/>
                              </div>
                              <div>
                                <p className="p__human__second">{el.watches}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {!isLogin && <Redirect to="/"/>}
              {!myArticle && <Redirect to="/"/>}
            </div>
          </div>
        )
        :
        <div className="inProf__container">
          <div className="prof__cont__photo">
              <span className="line">
                        <div>
                            <img
                              src={prof}
                              alt='User photo'
                            />
                        </div>
                        <div>
                            <h3>
                              {myUser[0].firstNameInput
                                ?
                                myUser[0].firstNameInput.value
                                + ' ' +
                                myUser[0].secondNameInput.value
                                :
                                ''
                              }
                            </h3>
                        </div>
                        <div>
                            <p>
                              {myUser[0].descriptionInput
                                ?
                                myUser[0].descriptionInput.value
                                :
                                ''
                              }
                            </p>
                        </div>
                    </span>
          </div>
          <div className="but">
            <Link to="/addarticle/">
              <button>Add new article</button>
            </Link>
          </div>
        </div>
      }
      {!isLogin && <Redirect to="/"/>}
    </div>
  );
}

export default MyArticlePage;
