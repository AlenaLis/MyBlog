import React from "react";

const userValid = (person) => {

  let isValidate;

  const usersArray = JSON.parse(localStorage.getItem("users"));
  console.log('===>usersArray', usersArray);
  const currentUser = usersArray?.filter((users) => users.thirdInput.value === person.firstInput.value)
  console.log('===>currentUser', currentUser);
  if (currentUser?.length > 0) {

    isValidate = usersArray[0].fourInput.value === person.secondInput.value;

  } else {
    isValidate = false;
  }

  return (isValidate)

}
export default userValid;
