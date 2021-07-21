import React from "react";

const userValid = (person) => {

  let isValidate;

  const usersArray = JSON.parse(localStorage.getItem("users"));
  const currentUser = usersArray?.filter((users) => users.thirdInput.value === person.firstInput.value)

  if (currentUser?.length > 0) {

    if (usersArray[0].fourInput.value === person.secondInput.value) {
      isValidate = true;
    } else {
      isValidate = false;
    }

  } else {
    isValidate = false;
  }

  return (isValidate)

}
export default userValid;
