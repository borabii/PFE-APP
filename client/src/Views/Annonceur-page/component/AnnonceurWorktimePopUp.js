import React from "react";

function AnnonceurWorktimePopUp() {
  return (
    <div className="annonceurWorktimePopUp">
      <h2>Temps de travail</h2>
      <table className="worktime">
        <tr>
          <th>Lundi</th>
          <td> 07:00</td>
          <td>21:00</td>
        </tr>
        <tr>
          <th>Mardi</th>
          <td> 07:00</td>
          <td>21:00</td>
        </tr>
        <tr>
          <th>Mercreudi</th>
          <td> 07:00</td>
          <td>21:00</td>
        </tr>
        <tr>
          <th>Vendredi</th>
          <td> 07:00</td>
          <td>21:00</td>
        </tr>
        <tr>
          <th>Samdi</th>
          <td> 08:00</td>
          <td>16:00</td>
        </tr>
        <tr>
          <th>Dimanche</th>
          <td> 08:00</td>
          <td>16:00</td>
        </tr>
      </table>
    </div>
  );
}

export default AnnonceurWorktimePopUp;
