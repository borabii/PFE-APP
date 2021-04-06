import React from "react";
import Select from "react-select";
function AbonnéCenterOfInterest() {
  const options = [
    { value: "football", label: "football" },
    { val1ue: "fifa", label: "fifa" },
    { value: "handball", label: "handball" },
  ];
  return (
    <div className="abonneIntert">
      <div className="abonneIntert__top">
        <Select options={options} />
      </div>

      <div className="abonneIntert__bottom">
        <h2> Mes centre d'intert </h2>
      </div>
    </div>
  );
}

export default AbonnéCenterOfInterest;
