import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailActivityPopUp from "./DetailActivityPopUp";

function PublicationActivity() {
  const [addAdminModalShow, setAddAdminModalShow] = useState(false);

  return (
    <div className="publicationActivity">
      <div className="dataTable">
        <div className="dataTable__top">
          <div className=" data-card ">
            <div className="card-body px-4  ">
              <h5 className="card-title data-cardTitle"> Nombre Activité</h5>
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
                  <th scope="col">ID annonceur</th>
                  <th scope="col">Nom annonceur</th>
                  <th scope="col">Catégorie</th>
                  <th scope="col">Date</th>
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

                  <td id="icone-action">
                    <div>
                      <DetailActivityPopUp
                        show={addAdminModalShow}
                        onHide={() => setAddAdminModalShow(false)}
                      />
                      <VisibilityIcon
                        onClick={() => setAddAdminModalShow(true)}
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

export default PublicationActivity;
