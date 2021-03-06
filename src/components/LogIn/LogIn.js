import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";

import {users} from "../../assets/Services/users";

import "./LogIn.scss"
import userValid from "../../assets/Services/userValid";

const LogIn = () => {

  const [person, setPerson] = useState({
    firstInput: {
      value: '',
      type: '',
    },
    secondInput: {
      value: '',
      type: '',
    },
  })

  const [allPersons, setAllPersons] = useState(false)
  console.log('===>allPersons', allPersons);
  const isPerson = localStorage.getItem('users')
  useEffect(() => {

    if (!isPerson) {
      localStorage.setItem('users', JSON.stringify(users))
    }
  }, [])

  const checkPerson = () => {
    setAllPersons(userValid(person))

  }

  const handleChange = (e, key) => {
    const {value, type} = e.target
    setPerson((prevState) => ({
      ...prevState,
      [key]: {
        value,
        type,
      },
    }))
  }

if(allPersons === true ){

  localStorage.setItem('isLogin', JSON.stringify('true'))
}
  return (
    <div>
      <div className="valid__content">
        <div>
          <h2 className="h2__text"> Log in to your account </h2>
        </div>
        <div>
          <form className="valid__form">
            <p>Email Address</p>
            <input
              className="input"
              value={person.firstInput.value}
              onChange={
                (e) => handleChange(e, 'firstInput')
              }
              id="firstname"
              type="text"
              name="email"
            />
            <p>Password</p>
            <input
              className="input"
              value={person.secondInput.value}
              onChange={
                (e) => handleChange(e, 'secondInput')
              }
              id="pass"
              type="password"
              name="pass"
            />
          </form>
        </div>
        <div className="valid__bottom">
          <div>
            <button className="button__valid" onClick={checkPerson}>
              Create Account
            </button>
          </div>
          <div>
            <p> Don???t have a Times account?
              <Link
                to='/login/'
                style={{textDecoration: 'none', color: '#000'}}
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
      {allPersons && <Redirect to="/"/>}
    </div>
  );
}
export default LogIn;
