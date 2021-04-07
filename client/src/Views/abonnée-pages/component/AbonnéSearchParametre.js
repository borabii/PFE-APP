// import React from "react";
// import Slider from "react-rangeslider";
// import "react-rangeslider/lib/index.css";
// function AbonnéSearchParametre() {
//   const [distance, setdistance] = useState(10);

//   const handleChangeStart = () => {
//     console.log("Change event started");
//   };
//   const handleChange = (value) => {
//     setdistance(value);
//   };
//   const handleChangeComplete = () => {
//     console.log("Change event completed");
//   };
//   const { value } = distance;

//   return (
//     <div className="searchParametre">
//       <h2>Distance de recherche</h2>

//       <div className="slider">
//         <Slider
//           min={1}
//           max={100}
//           value={distance}
//           onChangeStart={handleChangeStart}
//           onChange={handleChange}
//           onChangeComplete={handleChangeComplete}
//         />
//         <div className="value">{distance} km</div>
//       </div>
//       <button className="btn-Distance" type="submit">
//         Enregistrer
//       </button>
//     </div>
//   );
// }

// export default AbonnéSearchParametre;
