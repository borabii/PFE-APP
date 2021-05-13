import React from "react";

function CatégorieCard(props) {
  return (
    <div className="catégorieCard">
      <img src={`http://localhost:8000/${props.data.imageCatégorie}`} alt="" />
    </div>
  );
}

export default CatégorieCard;
