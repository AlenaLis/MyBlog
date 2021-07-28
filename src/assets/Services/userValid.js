import React from 'react';

const userValid = (person) => {

  let isValidate;

  const usersArray = JSON.parse(localStorage.getItem("users"));
  const currentUser = usersArray?.filter((usersArray) => usersArray.emailInput.value === person.inputForEmail.value)[0];

  if (currentUser) {
    isValidate = currentUser.passwordInput.value === person.inputForPassword.value;
    localStorage.setItem('myUser', JSON.stringify([currentUser]))
  } else {
    isValidate = false;
  }

  return (isValidate)
}

export default userValid;
