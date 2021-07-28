import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import mainhuman from '../../assets/images/human.png';
import human1 from '../../assets/images/human.png';
import eye from '../../assets/images/eye icon.png';
import art from '../../assets/images/art4.png';
import question from '../../assets/images/question.png';
import './Main.scss';

const Main = () => {

  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(6);

  const myArticle = JSON.parse(localStorage.getItem("art")) || [];
  const myUser = JSON.parse(localStorage.getItem("myUser")) || [];
  const newArray = myArticle?.slice(startIndex, endIndex);
  let mainArticle = JSON.parse(localStorage.getItem("art"));

  const goToPreviousPage = () => {
    if (startIndex !== 0) {
      setStartIndex(startIndex - 6);
      setEndIndex(endIndex - 6);
    }
  };

  const goToNextPage = () => {
    if (myArticle.length > 6) {
      setStartIndex(startIndex + 6);
      setEndIndex(endIndex + 6);
    }
  };

  useEffect(() => {
    if (!myArticle) {
      localStorage.setItem('art', JSON.stringify([]))
    }
  }, [])

  if (myArticle.length > 1) {
    for (let i = 0; i < myArticle.length - 1; i++) {

      if (myArticle[i].watches > myArticle[i + 1].watches) {
        mainArticle = myArticle[i];
      } else {
        mainArticle = myArticle[i + 1];
      }
    }
  } else {
    mainArticle = myArticle[0];
  }

  return (
    <div>
      {(myArticle.length > 0) && (myUser.length > 0) ?
        <div className="main">
          <div className="main__top">
            <div>
              <img
                src={question}
                alt='Image from the most popular art'
                className='main__art'
              />
            </div>
            <div className="main__panel">
              <div>
                <button>{mainArticle?.category}</button>
              </div>
              <div>
                <h2 className="h2__text">
                  {mainArticle?.title}
                </h2>
                <p className="p__text">
                  <div
                    dangerouslySetInnerHTML={{__html: mainArticle?.titleForShow}}
                    className="p__text"
                  />
                </p>
              </div>
              <div className="main__panel__bottom">
                <div className="main__panel__bottom__human">
                  <div>
                    <img
                      src={mainhuman}
                      alt='User photo'
                    />
                  </div>
                  <div>
                    <p className="p__human">
                      {myUser.length > 0
                      &&
                      (myUser[0].firstNameInput
                        ?
                        myUser[0].firstNameInput.value + ' ' +
                        myUser[0].secondNameInput.value
                        :
                        '')
                      }
                    </p>
                  </div>
                </div>
                <div>
                  <p className="p__human__second">{mainArticle?.data2}</p>
                </div>
                <div className="main__panel__bottom__human__second">
                  <div>
                    <img
                      src={eye}
                      alt='Eye icon'
                    />
                  </div>
                  <div>
                    <p className="p__human__second">
                      {mainArticle?.watches}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__bottom">
            <div>
              <h1 className="h1__main">Popular articles</h1>
            </div>
            {newArray?.map((el) => (
              <div className="main__bottom__art">
                <div className="main__bottom__new">
                  <div>
                    <img
                      src={question}
                      alt='Image from the most popular art'
                      className='second__arts'
                    />
                  </div>
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
                      <p className="p__text">
                        <div
                          dangerouslySetInnerHTML={{__html: el.titleForShow}}
                          className="p__text"
                        />
                      </p>
                    </div>
                    <div className="main__panel__bottom">
                      <div className="main__panel__bottom__human">
                        <div>
                          <img src={human1}/>
                        </div>
                        <div>
                          <p className="p__human">
                            {myUser[0].firstNameInput
                              ?
                              myUser[0].firstNameInput.value + ' ' +
                              myUser[0].secondNameInput.value
                              :
                              ''
                            }
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="p__human__second">
                          {el.data2}
                        </p>
                      </div>
                      <div className="main__panel__bottom__human__second">
                        <div>
                          <img
                            src={eye}
                            alt='Eye icon'
                          />
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
                <button
                  className="prev__next__button"
                  onClick={goToPreviousPage}
                >
                  Prev
                </button>
              </div>
              <div>
                <button
                  className="prev__next__button"
                  onClick={goToNextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        :
        <div>
          <h2 className="h2__no__articles">
            Log in to see all articles
          </h2>
        </div>
      }
    </div>
  );
}

export default Main;
