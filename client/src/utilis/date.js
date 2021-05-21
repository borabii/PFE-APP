//Global methods

//methode used to calcule age from given date
export const calucleAge = (date) => {
  let dob = new Date(date);
  //calculate month difference from current date in time
  let month_diff = Date.now() - dob.getTime();
  //convert the calculated difference in date format
  let age_dt = new Date(month_diff);

  //extract year from date
  let year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  let age = Math.abs(year - 1970);
  return age;
};
//methood user to transform date stored in mongode(2021-04-28T02:04:26.063+00:00) to (2021/4/28)
export const getDate = (date) => {
  var dateObj = new Date(date);
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  const newdate = year + "-" + month + "-" + day;
  return newdate;
};

//get cureent date
export const getNowDate = () => {
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substr(0, 10);
  return date;
};

//this methode is used for display monthName from date Sting
export const getMonthName = (date) => {
  let d = new Date(date);
  let month = d.getUTCMonth() + 1;
  let monthNames = [
    "Janv",
    "Févr",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juill",
    "Août",
    "Sept",
    "Oct",
    "Nov",
    "Déc",
  ];
  let dateStr = monthNames[month - 1];
  return dateStr;
};
//this methode is used for display day from date Sting
export const getDay = (date) => {
  let d = new Date(date);
  var day = d.getUTCDate();
  return day;
};

//this methode is used for display monthName from date Sting
export const getDayName = (date) => {
  let d = new Date(date);
  let day = d.getUTCDay();
  let dayNames = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  let dayStr = dayNames[day];
  return dayStr;
};
