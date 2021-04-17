const signInFormValidation = (values) => {
  let errorsMsg = {};
  let emailRegxs = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  if (!values.email) {
    errorsMsg.email = "Required";
  } else if (!emailRegxs.test(values.email)) {
    errorsMsg.email = "Invalid email ";
  }
  if (!values.password) {
    errorsMsg.password = "Required";
  } else if (values.password.length < 5) {
    errorsMsg.password = "minimun 8 caractere";
  }
  return errorsMsg;
};

export default signInFormValidation;
