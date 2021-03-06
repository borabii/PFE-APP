import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddCategoryPopUP from "./AddCategoryPopUP";
import DetailCatégoriePopUp from "./DetailCatégoriePopUp";
function CategoryManagment() {
  const [addAddCatégorieModalShow, setAddAddCatégorieModalShow] = useState(
    false
  );
  const [detailCatégorieModalShow, setDetailCatégorieModalShow] = useState(
    false
  );

  return (
    <div className="categoryManagment">
      <div className="dataTable">
        <div className="dataTable__top">
          <div className="container px-0">
            <div className="row">
              <div className="col-12 ">
                <div className="data-card ">
                  <div className="card-body px-1  ">
                    <h5 className="card-title data-cardTitle">
                      Nombre catégorie
                    </h5>
                    <p className="card-text">1000</p>
                  </div>
                </div>
              </div>

              <div className="col-12 ">
                <AddCategoryPopUP
                  show={addAddCatégorieModalShow}
                  onHide={() => setAddAddCatégorieModalShow(false)}
                />
                <button
                  className=" addButton"
                  onClick={() => setAddAddCatégorieModalShow(true)}
                >
                  Ajouter catégorie
                </button>
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
        {/* data table */}
        <div className="dataTable__bottom">
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table  table-hover table-striped   text-center my-table">
              <thead>
                <tr>
                  <th scope="col">id</th>

                  <th scope="col"> Nom Catégorie</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>ffff</td>

                  <td id="icone-action">
                    <div>
                      <DetailCatégoriePopUp
                        show={detailCatégorieModalShow}
                        onHide={() => setDetailCatégorieModalShow(false)}
                      />
                      <VisibilityIcon
                        onClick={() => setDetailCatégorieModalShow(true)}
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

export default CategoryManagment;
