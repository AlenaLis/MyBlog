import React, {useState} from "react";

import validation from "../../assets/Services/validation";

import "./SignIn.scss"

const SignIn = () => {

  const [form, setForm] = useState({
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
    passwordInput: {
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

  const handleChange = (e, key) => {
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

    const tempValid = validation(form)
    setValid(tempValid)
    const lastArray = JSON.parse(localStorage.getItem("users"));

    if (tempValid) {

      if (lastArray && lastArray.length > 0) {
        localStorage.setItem('form', JSON.stringify(form))
        lastArray.push(form);
        localStorage.setItem('users', JSON.stringify(lastArray))
      } else {
        localStorage.setItem('users', JSON.stringify([form]))
      }

    }
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
              value={form.firstNameInput.value}
              onChange={
                (e) => handleChange(e, 'firstNameInput')
              }
              className={valid.firstField ? 'input' : 'input error-input'}
              id="firstname"
              type="text"
              name="firstname"
            />
            {!valid.firstField && <p className="validation">
              Please enter other variant of the first name.
            </p>}
            <p>Last name</p>
            <input
              value={form.secondNameInput.value}
              onChange={
                (e) => handleChange(e, 'secondNameInput')
              }
              className={valid.lastField ? 'input' : 'input error-input'}
              id="lastname"
              type="text"
              name="lastname"
            />
            {!valid.lastField && <p className="validation">
              Please enter other variant of the second name.
            </p>}
            <p>Email Address</p>
            <input
              value={form.emailInput.value}
              onChange={
                (e) => handleChange(e, 'emailInput')
              }
              className={valid.emailField ? 'input' : 'input error-input'}
              id="email"
              type="text"
              name="email"
            />
            {!valid.emailField && <p className="validation">
              Please enter other variant of the email.
            </p>}
            <p>Password</p>
            <input
              value={form.passwordInput.value}
              onChange={
                (e) => handleChange(e, 'passwordInput')
              }
              className={valid.passField ? 'input' : 'input error-input'}
              id="pass"
              type="password"
              name="pass"
            />
            {!valid.passField && <p className="validation">
              Please enter other variant of the password.
            </p>}
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

export default SignIn;
