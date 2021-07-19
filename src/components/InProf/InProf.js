import React from "react";
import "./InProf.scss";
import prof1 from "../../assets/images/profArt1.png";
import human1 from "../../assets/images/human.png";
import eyeicon from "../../assets/images/eye icon.png";
import prof2 from "../../assets/images/profArt2.png";
import prof3 from "../../assets/images/profArt3.png";
import prof4 from "../../assets/images/profArt4.png";
import prof from "../../assets/images/prof_photo.png";

const InProf = () => {
  const obj = [
    {
      img_art: prof1,
      link: '#Typography',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.',
      img_human: human1,
      name: 'Janay Wright',
      date: 'Jun 13 · 5 min read',
      eye: eyeicon,
      count_eye: '1690'
    },
    {
      img_art: prof2,
      link: '#Typography',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.',
      img_human: human1,
      name: 'Janay Wright',
      date: 'Jun 13 · 5 min read',
      eye: eyeicon,
      count_eye: '1690'
    },
    {
      img_art: prof3,
      link: '#Typography',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.',
      img_human: human1,
      name: 'Janay Wright',
      date: 'Jun 13 · 5 min read',
      eye: eyeicon,
      count_eye: '1690'
    },
    {
      img_art: prof4,
      link: '#Typography',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.',
      img_human: human1,
      name: 'Janay Wright',
      date: 'Jun 13 · 5 min read',
      eye: eyeicon,
      count_eye: '1690'
    },
  ]
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
                  {obj.map((el) => (
                    <div className="prof__cont__art">
                        <div className="main__bottom__art">
                            <div className="main__bottom__new">
                                <div>
                                    <img src={el.img_art}/>
                                </div>

                                <div className="main__panel__bottom__art">
                                    <div>
                                        <button>{el.link}</button>
                                    </div>
                                    <div>
                                        <h2 className="h2__text">
                                          {el.title}
                                        </h2>
                                        <p className="p__text">{el.text}</p>
                                    </div>

                                    <div className="main__panel__bottom">
                                        <div className="main__panel__bottom__human">
                                            <div>
                                                <img src={el.img_human}/>
                                            </div>
                                            <div>
                                                <p className="p__human">{el.name}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="p__human__second">{el.date}</p>
                                        </div>
                                        <div className="main__panel__bottom__human__second">
                                            <div>
                                                <img src={el.eye}/>
                                            </div>
                                            <div>
                                                <p className="p__human__second">{el.count_eye}</p>
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
