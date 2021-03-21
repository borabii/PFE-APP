import React from "react";

function AddAdminPopUp() {
  return (
    <div className="addAdminPopUP">
      <h3>Ajouter admin</h3>
      <form>
        <input type="text" placeholder=" Nom" />
        <input type="email" placeholder=" Email" />
        <input type=" number" placeholder=" Tel" />
        <input type="text" placeholder=" Permission" />
        <input type="password" placeholder=" Mots de passe" />
        <button className="btn" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddAdminPopUp;
