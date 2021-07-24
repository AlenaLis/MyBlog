import React, {useState} from "react";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddArt.scss"
import draftToHtml from 'draftjs-to-html';
import {EditorState, convertToRaw} from "draft-js";

const AddArt = () => {

  const [dataForm, setDataForm] = useState({
    title:'',
    titleForShow: '',
    category: '',
    description: EditorState.createEmpty(),
    date: Date.now(),
  })

  const changeDataInput = (e, key) => {
    let dataText =  draftToHtml(convertToRaw(dataForm.description.getCurrentContent()))
    if (key === 'description') {
      setDataForm((prevState) => ({
        ...prevState,
        [key]: e,
        titleForShow: dataText,
      }))
    } else {
      const {value} = e.target
      setDataForm((prevState) => ({
        ...prevState,
        [key]: value,
        titleForShow: dataText,
      }))
    }

  }

  const lastArt = JSON.parse(localStorage.getItem("art"));

  const createNewArt = () => {
    if (lastArt && lastArt.length > 0) {
      lastArt.push(dataForm);
      localStorage.setItem('art', JSON.stringify(lastArt))
    } else {
      localStorage.setItem('art', JSON.stringify([dataForm]))
    }
  }

  return (
    <div>
      <div className='addArt__content'>
        <div>
          <h2 className="h2__text"> Add article </h2>
        </div>
        <div className="valid__form">
          <div>
            <input className="input" onChange={(e) => {
              changeDataInput(e, 'title')
            }} type="text"
                   value={dataForm.title}
            />
          </div>
          <div>

            <input className="input" onChange={
              (e) => {
                changeDataInput(e, 'category')
              }
            } type="text"
                   value={dataForm.category}
            />
          </div>
        </div>
        <div className="editor">
          <Editor
            editorState={dataForm.description}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            type="text"
            onEditorStateChange={(e) => {
              changeDataInput(e, 'description')
            }}
          />
        </div>
        <div className="valid__bottom">
          <button
            className='button__valid'
            onClick={createNewArt}
          >
            Create new article
          </button>
        </div>
        {/*<div dangerouslySetInnerHTML={dataText && {__html: dataText}}/>*/}
      </div>
    </div>
  )
}

export default AddArt;
