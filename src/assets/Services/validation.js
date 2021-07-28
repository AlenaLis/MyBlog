import React from 'react';

const validation = (form) => {

  let object = {
    firstNameField: false,
    lastNameField: false,
    emailField: false,
    passField: false,
  };

  const regular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const english = /[a-zA-Z]/;
  const lower = /(?=.*?[a-z])/;
  const upper = /(?=.*?[A-Z])/;
  const num = /(?=.*?[0-9])/;
  const symbol = /(?=.*?[#?!@$%^&*-])/;

  if (form.firstNameInput.value.length < 6) {
    object.firstNameField = false;
  } else {
    if (!english.test(form.firstNameInput.value)) {
      object.firstNameField = false;
    }
    object.firstNameField = true;
  }

  object.lastNameField = form.secondNameInput.value.length >= 6;

  object.emailField = form.emailInput.value.length >= 6 && regular.test(form.emailInput.value);

  object.passField = form.passwordInput.value.length >= 6
    && lower.test(form.passwordInput.value)
    && upper.test(form.passwordInput.value)
    && num.test(form.passwordInput.value)
    && symbol.test(form.passwordInput.value);

  let isValid = object.firstNameField && object.lastNameField && object.passField && object.emailField;

  return ({object, isValid});

}

export default validation;
