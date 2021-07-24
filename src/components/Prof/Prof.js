import React, {useState} from "react";
import "./Prof.scss";
import prof from "../../assets/images/prof_photo.png";


const Prof = (form) => {

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
                  src={local.photo.value}
                  onChange={
                    (e) => handleChange(e, 'photo')
                  }
                 alt={'photo'}/>

              </div>
              <div>
                <input
                  onChange={
                    (e) => handleChange(e, 'photo')
                  }
                  className="photo"
                  type="file"
                  value={local.photo.value}
                />
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
                    placeholder={lastArray[0].firstName.value}
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
                    placeholder={lastArray[0].secondName.value}
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
                    placeholder={lastArray[0].description.value}
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
    </div>
  );
}

export default Prof;
