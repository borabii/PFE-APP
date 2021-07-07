const addUserFormValidation = (values) => {
  const stringRegxs = "^[A-Za-z]+$";
  let emailRegxs =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  let phoneRegxs = /^[0-9]*$/;
  let errorsMsg = {};
  if (values.firstName === "" || !values.firstName.match(stringRegxs)) {
    errorsMsg.firstName = "nom est obligatoire";
  }
  if (values.lastName === "" || !values.lastName.match(stringRegxs)) {
    errorsMsg.lastName = "prénom est obligatoire ";
  }
  if (!values.email) {
    errorsMsg.email = "Obligatoire";
  } else if (!values.email.match(emailRegxs)) {
    errorsMsg.email = "email invalides";
  }
  if (values.number.length < 7 || !values.number.match(phoneRegxs)) {
    errorsMsg.number = "nompre de tel invalide ";
  }
  return errorsMsg;
};

export default addUserFormValidation;
