import React from "react";

function AddAddressPopUp() {
  return (
    <div className="addAdressPopUP">
      <h3>Ajouter Localité</h3>
      <form>
        <input type="text" placeholder=" Gouverorat" />
        <input type="text" placeholder=" Ville" />
        <button className="btn" type="submit">
          Modifier
        </button>
      </form>
    </div>
  );
}

export default AddAddressPopUp;
