import React from "react";

const userValid = (person) => {

  let isValidate;

  const usersArray = JSON.parse(localStorage.getItem("users"));
  const currentUser = usersArray?.filter((usersArray) => usersArray.emailInput.value === person.inputForEmail.value)[0]
console.log('===>currentUsercurrentUser', currentUser);



  if (currentUser) {
    isValidate = currentUser.passwordInput.value === person.inputForPassword.value;
    console.log('===>isValidate111111', isValidate);

  } else {
    isValidate = false;
  }
  console.log('===>isValidate222222', isValidate);
  return (isValidate)
}
export default userValid;
