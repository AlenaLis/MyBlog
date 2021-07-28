import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';

import prof from '../../assets/images/prof_photo.png';
import './ProfileInfo.scss';

const ProfileInfo = () => {

  const [local, setLocal] = useState({
    firstNameInput: {
      value: '',
      type: '',
    },
    secondNameInput: {
      value: '',
      type: '',
    },
    emailInput: {
      value: '',
      type: '',
    },
    descriptionInput: {
      value: '',
      type: '',
    },
    photoInput: {
      value: '',
      type: '',
    },
  });

  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')));

  const handleChange = (e, key) => {
    const {value, type} = e.target
    setLocal((prevState) => ({
      ...prevState,
      [key]: {
        value,
        type,
      },
    }))
  };

  let myUserInfo = JSON.parse(localStorage.getItem("myUser")) || [];

  useEffect(() => {
    if (myUserInfo.length > 0) {
      setLocal(myUserInfo[0])
    }
  }, [])

  const addNewInfo = () => {

    if (myUserInfo && myUserInfo.length > 0) {
      localStorage.setItem('myUser', JSON.stringify([local]))
    } else {
      localStorage.setItem('myUser', JSON.stringify(myUserInfo))
    }

  };

  return (
    <div>
      <div className="prof__content">
        <div>
          <h2 className="h2__text"> Profile </h2>
        </div>
        {myUserInfo.length > 0 ?
          <div className="prof__cont">
            <div className="prof__cont__photo">
            <span className="line">
              <div>
                <img
                  src={prof}
                  alt={'Profile user photo'}/>
              </div>
              <div>
                <button className='photo'>
                  Change photo
                </button>
              </div>
              <div>
                <p>Delete photo</p>
              </div>
            </span>
            </div>
            <div className="prof_edit">
              <form className="prof__form">
                <div className="form__content">
                  <div>
                    <p>First name</p>
                    <input
                      onChange={
                        (e) => {
                          handleChange(e, 'firstNameInput')
                        }}
                      value=
                        {local.firstNameInput ?
                          local.firstNameInput.value
                          :
                          ''
                        }
                      placeholder={myUserInfo[0].firstNameInput ?
                        myUserInfo[0].firstNameInput.value
                        :
                        ''
                      }
                      className="input"
                      type="text"
                    />
                  </div>
                  <div>
                    <p>Last name</p>
                    <input
                      onChange={
                        (e) => {
                          handleChange(e, 'secondNameInput')
                        }}
                      value=
                        {local.secondNameInput ?
                          local.secondNameInput.value
                          :
                          ''
                        }
                      placeholder=
                        {myUserInfo[0].secondNameInput.value ?
                          myUserInfo[0].secondNameInput.value
                          :
                          ''
                        }
                      className="input"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form__content__second">
                  <p>Description</p>
                  <td align="right" valign="top">
                    <input
                      value={local.descriptionInput
                        ?
                        local.descriptionInput.value
                        :
                        ''}
                      placeholder={myUserInfo[0].descriptionInput
                        ?
                        myUserInfo[0].descriptionInput.value
                        :
                        'Please enter your description'}
                      onChange={
                        (e) => {
                          handleChange(e, 'descriptionInput')
                        }}
                      className="input__desc"
                      type="text"
                    />
                  </td>
                </div>
                <div>
                  <button
                    className="save__button"
                    onClick={addNewInfo}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
          :
          <div/>
        }
      </div>
      {!isLogin && <Redirect to="/"/>}
    </div>
  );
}

export default ProfileInfo;
