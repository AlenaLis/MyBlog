import React from "react";
import "./Artickle.scss"
import art from '../../assets/images/profArt1.png';
import art2 from '../../assets/images/ArtCont1.png';
import eyeicon from '../../assets/images/eye icon.png';
import human1 from '../../assets/images/human.png';
import {useParams} from 'react-router-dom';
const Article = () => {
  // const {id} = useParams()


  return (
    <div>
      <div className="Art__container">
        <button className="button">
          All articles
        </button>
        <div className="coloum__content">
          <div className="prof__cont__art">
            <div className="main__bottom__art">
              <div className="main__bottom__new">
                <div>
                  <button>#Typography</button>
                </div>
                <h2 className="h2__text">
                  Humane Typography in the Digital Age
                </h2>
                <div>
                  <img src={art}/>
                </div>
                <div className="main__panel__bottom__art">
                  <div>
                    <p className="p__text">
                      An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a
                      conflict between two worlds came to its term. The machines of the industrial world finally took
                      over the handicrafts.
                    </p>
                    <p className="p__text">
                      The typography of this industrial age was no longer handcrafted. Mass production and profit became
                      more important. Quantity mattered more than the quality. The books and printed works in general
                      lost a part of its humanity. The typefaces were not produced by craftsmen anymore. It was the
                      machines printing and tying the books together now. The craftsmen had to let go of their craft and
                      became a cog in the process. An extension of the industrial machine.
                    </p>
                    <p className="p__text">
                      But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. The
                      two worlds continued to coexist independently. Each recognising the good in the other — the power
                      of industrialism and the humanity of craftsmanship. This was the second transition that would
                      strip typography of a part of its humanity. We have to go 500 years back in time to meet the first
                      one.
                    </p>
                  </div>
                  <div className="state">
                    <h3>
                      The first transition
                    </h3>
                    <p>
                      A similar conflict emerged after the invention of the first printing press in Europe. Johannes
                      Gutenberg invented movable type and used it to produce different compositions. His workshop could
                      print up to 240 impressions per hour. Until then, the books were being copied by hand. All the
                      books were handwritten and decorated with hand drawn ornaments and figures. A process of copying a
                      book was long but each book, even a copy, was a work of art.
                    </p>
                    <p>
                      The first printed books were, at first, perceived as inferior to the handwritten ones. They were
                      smaller and cheaper to produce. Movable type provided the printers with flexibility that allowed
                      them to print books in languages other than Latin. Gill describes the transition to industrialism
                      as something that people needed and wanted. Something similar happened after the first printed
                      books emerged. People wanted books in a language they understood and they wanted books they could
                      take with them. They were hungry for knowledge and printed books satisfied this hunger.
                    </p>
                    <img src={art2} />
                    <figcaption>The 42–Line Bible, printed by Gutenberg.</figcaption>
                    <p>
                      But, through this transition, the book lost a large part of its humanity. The machine took over
                      most of the process but craftsmanship was still a part of it. The typefaces were cut manually by
                      the first punch cutters. The paper was made by hand. The illustrations and ornaments were still
                      being hand drawn. These were the remains of the craftsmanship that went almost extinct in the
                      times of Eric Gill.
                    </p>
                  </div>
                  <div className="state">
                    <h3>
                      Chasing perfection
                    </h3>
                    <p>
                      Human beings aren’t perfect. Perfection is something that will always elude us. There will always
                      be a small part of humanity in everything we do. No matter how small that part, we should make
                      sure that it transcends the limits of the medium. We have to think about the message first. What
                      typeface should we use and why? Does the typeface match the message and what we want to
                      communicate with it? What will be the leading and why? Will there be more typefaces in our design?
                      On what ground will they be combined? What makes our design unique and why? This is the part of
                      humanity that is left in typography. It might be the last part. Are we really going to give it up?
                    </p>
                  </div>
                  <div className="main__panel__bottom">
                    <div className="hum_cont">
                      <div className="main__panel__bottom__human">
                        <div>
                          <img src={human1}/>
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
