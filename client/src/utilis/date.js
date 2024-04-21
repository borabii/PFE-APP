import moment from "moment";
//Global methods
const today = moment.utc().local().format();
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
//methood user to transform date stored in mongode(2021-04-28T02:04:26.063+00:00) to (2021-04-28)
export const getDate = (date) => {
  let newdate = "";
  var dateObj = new Date(date);
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  if (month < 10) {
    newdate = year + "-" + "0" + month + "-" + day;
  }
  if (day < 10) {
    newdate = year + "-" + "0" + month + "-" + "0" + day;
  } else newdate = year + "-" + month + "-" + day;

  return newdate;
};

//get cureent date(2020/05/16)
export const getNowDate = () => {
  var curr = today;
  var date = curr.substr(0, 10);
  return date;
};
//get cureent full date(2020/05/16)
export const getFullNowDate = () => {
  var curr = today;
  return curr;
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

//extrat only time(16:00) from date(2021-05-26T16:00:09.429Z)
export const getTime = () => {
  let date = new Date(today);
  let time = "";
  date.setMinutes(0);
  if (date.getHours() + 1 < 10) {
    time = "0" + (date.getHours() + 1) + ":" + "0" + date.getMinutes();
  } else time = date.getHours() + 1 + ":" + "0" + date.getMinutes();
  return time;
};
