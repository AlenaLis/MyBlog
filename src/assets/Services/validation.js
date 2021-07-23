import React from "react";

const validation = (form) => {

  let object = {
    firstField: true,
    lastField: true,
    emailField: true,
    passField: true,
  };

  const regular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const english = /[a-zA-Z]/;
  const lower = /(?=.*?[a-z])/;
  const upper = /(?=.*?[A-Z])/;
  const num = /(?=.*?[0-9])/;
  const symbol = /(?=.*?[#?!@$%^&*-])/;

  if (form.firstInput.value.length < 6) {
    object.firstField = false;
  } else {
    object.firstField = true;
  }

  if (english.test(form.firstInput.value) === false) {
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

  if (regular.test(form.thirdInput.value) === false) {
    object.emailField = false;
  } else {
    object.emailField = true;
  }

  // if (form.fourInput.value.length < 6) {
  //   object.passField = false;
  // } else {
  //   object.passField = true;
  // }
  //
  // if (lower.test(form.fourInput.value) === false) {
  //   object.passField = false;
  //   console.log('===>1 lower');
  // } else {
  //   object.passField = true;
  // }
  //
  // if (upper.test(form.fourInput.value) === false) {
  //   object.passField = false;
  //   console.log('===>1 upper');
  // } else {
  //   object.passField = true;
  // }
  //
  // if (num.test(form.fourInput.value) === false) {
  //   object.passField = false;
  //   console.log('===>1 num');
  // } else {
  //   object.emailField = true;
  // }

  // if (symbol.test(form.fourInput.value) === false) {
  //   object.passField = false;
  //   console.log('===>1 sym');
  // } else {
  //   object.passField = true;
  // }
  return (object);
}

export default validation;
