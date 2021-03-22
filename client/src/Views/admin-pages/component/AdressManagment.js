import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddAddressPopUp from "./AddAddressPopUp";
function AdressManagment() {
  const [addAdressModalShow, setAddAdressModalShow] = useState(false);

  return (
    <div className="adressManagment">
      <div className="dataTable">
        <div className="dataTable__top">
          <div className="top__left">
            <div className="container px-0">
              <div className="row">
                <div className="col-6 ">
                  <div className="data-card ">
                    <div className="card-body px-1  ">
                      <h5 className="card-title data-cardTitle">
                        Nombre gouvernorat
                      </h5>
                      <p className="card-text">1000</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="data-card ">
                    <div className="card-body px-1  ">
                      <h5 className="card-title data-cardTitle">
                        Nombre ville
                      </h5>
                      <p className="card-text">1000</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 ">
                  <AddAddressPopUp
                    show={addAdressModalShow}
                    onHide={() => setAddAdressModalShow(false)}
                  />
                  <button
                    className="addButton"
                    onClick={() => setAddAdressModalShow(true)}
                  >
                    Ajouter localité
                  </button>
                </div>
              </div>
            </div>
          </div>

          <form id="form-1">
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
        <div className="dataTable__bottom">
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table  table-hover table-striped   text-center my-table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prenom</th>

                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Permission</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>114141414141414</td>
                  <td>dddddddddddddd</td>
                  <td>dddddddddddddd</td>
                  <td>eeeeeee@gmail.com</td>
                  <td>16/05/1999</td>
                  <td>ddddddddddddddddddddddddd</td>

                  <td id="icone-action">
                    <div>
                      <VisibilityIcon />
                    </div>
                    <div id="ff">
                      <EditIcon />
                    </div>
                    <div>
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

export default AdressManagment;
