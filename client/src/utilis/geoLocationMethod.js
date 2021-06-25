import axios from "axios";

export const getAdress = (adresse) => {
  console.log(adresse.coordinates[0]);
  const resault = "";
  axios
    .get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${adresse.coordinates[0]}&longitude=${adresse.coordinates[1]}&localityLanguage=fr`
    )
    .then((response) => (resault = response.data));
  console.log(resault);
  return resault;
};
