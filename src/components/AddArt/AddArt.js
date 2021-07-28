import React, {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './AddArt.scss';

const AddArt = () => {

  const [dataForm, setDataForm] = useState({
    title: '',
    titleForShow: '',
    category: '',
    description: EditorState.createEmpty(),
    date: Date.now(),
    date2: '',
    id: '',
    watches: '14',
    image: '',
  });

  let newDate = dataForm.date;
  newDate = new Date().toLocaleDateString();

  const changeDataInput = (e, key) => {

    let dataText = draftToHtml(convertToRaw(dataForm.description.getCurrentContent()));
    if (key === 'description') {
      setDataForm((prevState) => ({
        ...prevState,
        [key]: e,
        titleForShow: dataText,
        data2: newDate,
        id: Date.now(),
        image: '',
      }))
    } else {
      const {value} = e.target
      setDataForm((prevState) => ({
        ...prevState,
        [key]: value,
        titleForShow: dataText,
        data2: newDate,
        id: Date.now(),
        image: '',
      }))
    }
  }

  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')))
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
            <input
              className="input"
              onChange={(e) => {
                changeDataInput(e, 'title')
              }}
              type="text"
              value={dataForm.title}
            />
          </div>
          <div>
            <input
              className="input"
              onChange={(e) => {
                changeDataInput(e, 'category')
              }}
              type="text"
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
          <Link to="/inprof/">
            <button
              className='button__publish'
              onClick={createNewArt}
            >
              Publish an article
            </button>
          </Link>

          <button
            className='button__create_image'
            onClick={createNewArt}
          >
            Publish an article
          </button>
        </div>
      </div>
      {!isLogin && <Redirect to="/"/>}
    </div>
  )
}

export default AddArt;
