import moment from "moment";
const addPubsFormValidation = (values) => {
  let errorsMsg = {};

  if (
    moment(
      moment(values.date_DebutPub + " " + values.heure_debutPub).format()
    ).isAfter(moment(values.date_FinPub + " " + values.heure_finPub).format())
  ) {
    errorsMsg.heurePub = "Heure fin pub doit étre supérieur à heure debut pub";
  } else if (
    moment(values.date_DebutPub).isSame(moment().format("YYYY-MM-DD")) &&
    moment(values.heure_debutPub, "HH:mm") < moment.utc().local()
  ) {
    errorsMsg.heurePub = "Heure doit etre superieur à l'heure actuelle";
  }

  return errorsMsg;
};

export default addPubsFormValidation;
