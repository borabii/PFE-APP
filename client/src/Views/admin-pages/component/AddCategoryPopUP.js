import React from "react";

function AddCategoryPopUP() {
  return (
    <div className="addCategoryPopUP">
      <h3>Ajouter Catégorie</h3>
      <div className="img__holder">image holder</div>
      <form>
        <input type="file" accept="image/*" />
        <button className="btn" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddCategoryPopUP;
