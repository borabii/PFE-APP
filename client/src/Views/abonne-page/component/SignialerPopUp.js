import React from "react";
import "./Abonne.css";

function SignialerPopUp() {
  return (
    <div className="signialerPopUp">
      <h2> Signialer</h2>

      <textarea placeholder="votre cause ..." />
      <button type="submit"> Signialer</button>
    </div>
  );
}

export default SignialerPopUp;
