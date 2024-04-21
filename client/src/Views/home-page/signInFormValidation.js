const signInFormValidation = (values) => {
  let errorsMsg = {};
  let emailRegxs = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  if (!values.email) {
    errorsMsg.email = "Obligatoire";
  } else if (!emailRegxs.test(values.email)) {
    errorsMsg.email = "email invalides";
  }
  if (!values.password) {
    errorsMsg.password = "Obligatoire";
  } else if (values.password.length < 5) {
    errorsMsg.password = "minimun 8 caractere";
  }
  return errorsMsg;
};

export default signInFormValidation;
