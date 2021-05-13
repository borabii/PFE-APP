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
  const newdate = year + "/" + month + "/" + day;
  return newdate;
};
