import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailBoiteMessagePopUp from "./DetailBoiteMessagePopUp";
let Datas = [
  {
    firstName: "Home",
    lastName: "ff",
  },
  {
    firstName: "Home",
    lastName: "ff",
  },
];
function BoiteMessage() {
  const [detailReqModalShow, setDetailReqModalShowModalShow] = useState(false);

  return (
    <div className="boiteMessage">
      <div className="dataTable">
        <div className="dataTable__top">
          <div className=" data-card ">
            <div className="card-body px-4  ">
              <h5 className="card-title data-cardTitle"> Nombre Message</h5>
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
        <div className="dataTable__bottom">
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table  table-hover table-striped   text-center my-table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Datas.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">1</th>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>{data.firstName}</td>

                      <td>
                        <DetailBoiteMessagePopUp
                          show={detailReqModalShow}
                          onHide={() => setDetailReqModalShowModalShow(false)}
                        />
                        <VisibilityIcon
                          onClick={() => setDetailReqModalShowModalShow(true)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoiteMessage;
