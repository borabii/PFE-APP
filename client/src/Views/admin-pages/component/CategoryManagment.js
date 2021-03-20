import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
function CategoryManagment() {
  return (
    <div className="categoryManagment">
      <div className="dataTable">
        <div className="dataTable__top">
          <div className="card data-card ">
            <div className="card-body px-2  ">
              <h5 className="card-title data-cardTitle"> Nombre Catégorie</h5>
              <p className="card-text">1000</p>
            </div>
          </div>
          <button>feeeeeeee</button>

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

                  <th scope="col"> Nom Catégorie</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>ffff</td>

                  <td>
                    <VisibilityIcon />
                    <DeleteIcon />
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
