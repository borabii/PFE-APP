import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailReclamationPopUp from "./DetailReclamationPopUp";
function Reclamation() {
  const [reclamationModalShow, setReclamationModalShow] = useState(false);

  return (
    <div className="reclamation">
      <div className="dataTable">
        <div className="dataTable__top">
          <div className="data-card">
            <div className="card-body px-2   ">
              <h5 className="card-title data-cardTitle"> Nombre réclamation</h5>
              <p className="card-text">1000</p>
            </div>
          </div>

          <form>
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
            />
            <div className="icon">
              <SearchIcon />
            </div>
          </form>
        </div>
        {/* data table */}
        <div className="dataTable__bottom">
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table  table-hover table-striped   text-center my-table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">ID reclameur</th>
                  <th scope="col">Nom annonceur</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Nombre signal</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>ID</td>
                  <td>ID annonceur</td>
                  <td> Nom annonceur</td>
                  <td>Catégorie</td>
                  <td>Catégorie</td>

                  <td id="icone-action">
                    <div>
                      <DetailReclamationPopUp
                        show={reclamationModalShow}
                        onHide={() => setReclamationModalShow(false)}
                      />
                      <VisibilityIcon
                        onClick={() => setReclamationModalShow(true)}
                      />
                    </div>
                    <div id="ff">
                      <DeleteIcon />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reclamation;
