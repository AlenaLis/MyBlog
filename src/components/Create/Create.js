import React, {useState} from "react";
import "./Create.scss"
import validation from "../../assets/Services/validation";

const Create = () => {

  const [form, setForm] = useState({
    firstInput: {
      value: '',
      type: '',
    },
    secondInput: {
      value: '',
      type: '',
    },
    thirdInput: {
      value: '',
      type: '',
    },
    fourInput: {
      value: '',
      type: '',
    },
  })
 const [valid, setValid] = useState({
   firstField: true,
   lastField: true,
   emailField: true,
   passField: true,
 })
  console.log('===>valid', valid);

  const handleChange = (e, key) =>  {
    const {value, type} = e.target
    setForm((prevState) => ({
      ...prevState,
      [key]: {
        value,
        type,
      },
    }))
  }
  const checkValid = () => {
    //setIsValid(Validation(form))
    setValid(validation(form))
  }
    return (
        <div>
            <div className="valid__content">
                <div>
                    <h2 className="h2__text"> Create your free account </h2>
                </div>
                <div>
                    <form className="valid__form">
                        <p>First name</p>
                      <input
                        value={form.firstInput.value}
                        onChange={
                          (e) => handleChange(e, 'firstInput')
                        }
                        className={valid.firstField  ? 'input': 'input error-input'}
                        id="firstname"
                        type="text"
                        name="firstname"
                      />
                        <p>Last name</p>
                      <input
                        value={form.secondInput.value}
                        onChange={
                          (e) => handleChange(e, 'secondInput')
                        }
                        className="input"
                        id="lastname"
                        type="text"
                        name="lastname"
                      />
                       <p>Email Address</p>
                      <input
                        value={form.thirdInput.value}
                        onChange={
                          (e) => handleChange(e, 'thirdInput')
                        }
                        className="input"
                        id="email"
                        type="text"
                        name="email"
                      />
                      <p>Password</p>
                      <input
                        value={form.fourInput.value}
                        onChange={
                          (e) => handleChange(e, 'fourInput')
                        }
                        className="input"
                        id="pass"
                        type="password"
                        name="pass"
                      />

                    </form>
                </div>
                <div className="valid__bottom">
                    <div className="marg">
                        <button className="button__valid" id="button" onClick={checkValid}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
