import React from "react";

function EditAdminPopUp() {
  return (
    <div className="editAdminPopUP">
      <h3>Modifier Admin</h3>
      <form>
        <input type="text" placeholder=" Permission" />
        <input type="password" placeholder=" Mots de passe" />
        <button className="btn" type="submit">
          Modifier
        </button>
      </form>
    </div>
  );
}

export default EditAdminPopUp;
