import { getTime } from "../utilis/date";
const addPubsFormValidation = (values) => {
  let errorsMsg = {};

  if (
    new Date("1/1/1999 " + values.heure_finPub) <
      new Date("1/1/1999 " + values.heure_debutPub) &&
    parseInt(values.heure_debutPub) - parseInt(values.heure_finPub) < 24
  ) {
    errorsMsg.heurePub = "Heure fin pub doit étre supérieur à heure debut pub";
  } else if (values.heure_debutPub < getTime()) {
    errorsMsg.heurePub = "Heure doit etre superieur à l'heure actuelle";
  }

  return errorsMsg;
};

export default addPubsFormValidation;
