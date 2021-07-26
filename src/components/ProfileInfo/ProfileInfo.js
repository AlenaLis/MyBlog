import React, {useState} from "react";
import "./ProfileInfo.scss";
import prof from "../../assets/images/prof_photo.png";
import {Redirect} from "react-router-dom";

const ProfileInfo = (form) => {

  const [local, setLocal] = useState({
    firstName: {
      value: '',
      type: '',
    },
    secondName: {
      value: '',
      type: '',
    },
    description: {
      value: '',
      type: '',
    },
    photo: {
      value: '',
      type: '',

    },
  })
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')))
  const handleChange = (e, key) => {
    const {value, type} = e.target
    setLocal((prevState) => ({
      ...prevState,
      [key]: {
        value,
        type,
      },
    }))
  }

  const lastArray = JSON.parse(localStorage.getItem("users"));
  const newArray = lastArray[0];

  const addNewInfo = () => {
    if (newArray && newArray.length > 0) {
      localStorage.setItem('local', JSON.stringify(newArray))

    } else {
      localStorage.setItem('users', JSON.stringify([local]))
    }
  }

  return (
    <div>
      <div className="prof__content">
        <div>
          <h2 className="h2__text"> Profile </h2>
        </div>
        <div className="prof__cont">
          <div className="prof__cont__photo">
            <span className="line">
              <div>
                <img
                  src={prof}
                  alt={'photo'}/>
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
                      (e) => handleChange(e, 'firstName')
                    }
                    value={local.firstName.value}
                    placeholder={lastArray[0].firstName ? lastArray[0].firstName.value : lastArray[0].firstNameInput.value}
                    className="input"
                    type="text"
                    name="fname"
                  />
                </div>
                <div>
                  <p>Last name</p>
                  <input
                    onChange={
                      (e) => handleChange(e, 'secondName')
                    }
                    value={local.secondName.value}
                    placeholder={lastArray[0].secondName ? lastArray[0].secondName.value : lastArray[0].secondNameInput.value}
                    className="input"
                    type="text"
                    name="lname"
                  />
                </div>
              </div>
              <div className="form__content__second">
                <p>Description</p>
                <td align="right" valign="top">
                  <input
                    value={local.description.value}
                    placeholder={lastArray[0].description ? lastArray[0].description.value : 'Please enter your description'}
                    onChange={
                      (e) => handleChange(e, 'description')
                    }
                    className="input__desc"
                    type="text"
                    name="desc"/></td>
              </div>
              <div>
                <button
                  className="save__button"
                  onClick={addNewInfo}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {!isLogin && <Redirect to="/"/>}
    </div>
  );
}

export default ProfileInfo;
