import React, {useState} from "react";
import "./AddArt.scss"

import {Editor, EditorState} from 'draft-js';

import 'draft-js/dist/Draft.css';

import {convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';



const AddArt = () => {

  const [newArticle, setNewArticle] = useState({
    title: EditorState.createEmpty(),
    category: EditorState.createEmpty(),
    text: EditorState.createEmpty(),
  })


  // const [text, setText] = useState("")
  const handleChange = (value, key) => {
    setNewArticle((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }
  const content = newArticle.text.getCurrentContent();
  const contentToSave = JSON.stringify(convertToRaw(content).blocks);
  const getCurrentContent = JSON.parse(contentToSave);

  const lastArt = JSON.parse(localStorage.getItem("art"));

  const createNewArt = () => {
    if (lastArt && lastArt.length > 0) {
      localStorage.setItem('newArticle', JSON.stringify(newArticle))
      lastArt.push(newArticle);
      localStorage.setItem('art', JSON.stringify(lastArt))
    } else {
      localStorage.setItem('art', JSON.stringify([newArticle]))
      console.log('===>newArticle', newArticle);
    }
  }

return (
  <div>

    <div className="addArt__content">
      <div>
        <h2 className="h2__text"> Add article </h2>
      </div>
      <div>
        <div className="func">
          <div className="left">
          </div>
          <div className="right">

          </div>
        </div>
        <form className="valid__form">
          <div className="text" style={{border: '1px solid #E1E1E1', padding: 20}}>
            <Editor
              editorState={newArticle.title}
              onChange={
                (value) => handleChange(value, 'title')
              }
              className="editorContainer"
              placeholder="New Titles"
            />
          </div>
          <div className="text" style={{border: '1px solid #E1E1E1', padding: 20}}>
            <Editor
              editorState={newArticle.category}
              onChange={
                (value) => handleChange(value, 'category')
              }
              className="editorContainer"
              placeholder="New Titles"
            />
          </div>
          <div className="descript" style={{border: '1px solid #E1E1E1', padding: 20}}>
            <Editor
              editorState={newArticle.text}
              onChange={
                (e) => handleChange(e, 'text')
              }
              className="editorContainer"
              placeholder="New Titles"

            />
          </div>
        </form>
      </div>
      <div>
        {/*{getCurrentContent[0].text}*/}
      </div>
      <div className="valid__bottom">
        <button className="button__valid" onClick={createNewArt}>Publish an article</button>
      </div>
    </div>
  </div>
);
}

export default AddArt;
