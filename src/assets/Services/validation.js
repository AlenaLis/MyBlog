import React from "react";

const validation = (form) => {
console.log('===>form', form);
  let object = {
    firstField: true,
    lastField: true,
    emailField: true,
    passField: true,
  };

  const regular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const english = /[a-zA-Z]/;


  if (form.firstInput.value.length < 6) {
    object.firstField = false;
  } else {
    object.firstField = true;
  }

  if (form.secondInput.value.length < 6) {
    object.lastField = false;

  } else {
    object.lastField = true;
  }

  if (form.thirdInput.value.length < 6) {
    object.emailField = false;
  } else {
    object.emailField = true;
  }

  if (form.fourInput.value.length < 6) {
    object.passField = false;
  } else {
    object.passField = true;
  }

  return (object);
}

export default validation;
