// import React, { useState } from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import SearchIcon from "@material-ui/icons/Search";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import DetailAbonnePopUp from "./DetailAbonnePopUp";
// function UserAbonné() {
//   const [detailAbonneModalShow, setdetailAbonneModalShow] = useState(false);

//   return (
//     <div className="userAbonné">
//       <div className="dataTable">
//         <div className="dataTable__top">
//           <div className="data-card">
//             <div className="card-body px-4">
//               <h5 className="card-title data-cardTitle"> Nombre abonné</h5>
//               <p className="card-text">1000</p>
//             </div>
//           </div>

//           <form>
//             <input
//               className="form-control mr-sm-2 "
//               type="search"
//               placeholder="Search"
//             />
//             <div className="icon">
//               <SearchIcon />
//             </div>
//           </form>
//         </div>
//         {/* data table */}
//         <div className="dataTable__bottom">
//           <div class="table-wrapper-scroll-y my-custom-scrollbar">
//             <table className="table  table-hover table-striped   text-center my-table">
//               <thead>
//                 <tr>
//                   <th scope="col">id</th>
//                   <th scope="col">Nom </th>
//                   <th scope="col">Prénom </th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Date</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td>ID</td>
//                   <td>ID annonceur</td>
//                   <td> Nom annonceur</td>
//                   <td>Catégorie</td>

//                   <td id="icone-action">
//                     <div>
//                       <DetailAbonnePopUp
//                         show={detailAbonneModalShow}
//                         onHide={() => setdetailAbonneModalShow(false)}
//                       />
//                       <VisibilityIcon
//                         onClick={() => setdetailAbonneModalShow(true)}
//                       />
//                     </div>
//                     <div id="ff">
//                       <DeleteIcon />
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserAbonné;

import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailAbonnePopUp from "./DetailAbonnePopUp";

class UserAbonné extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      detailReqModalShow: false,
      abonnés: [
        {
          typePub: "Activity",
          _id: "6089f86bfcf1b64cd0974cfd",
          firstName: "tezedzed",
          lastName: "tezedzed",
          email: "wdfgh@dsg",
          adresse: "aaaaa",
          nbr_place: 2,
          user: "607e141dc0fb704f84df1b46",
          inscriDate: "2021-04-29T00:06:03.199Z",
          __v: 0,
        },
      ],
    };
  }
  //
  selectAbonné = (index) => {
    const abonné = this.state.abonnés[index];
    this.setState({ id: abonné });
  };
  deletabonné = (data) => {
    if (
      window.confirm(
        `Vous êtes sûre de supprimer :${data.firstName + " " + data.lastName} ?`
      )
    ) {
      axios
        .delete(
          `http://localhost:8000/api/users/Admin/deleteAbonne/${data._id}`
        )

        .then((response) => {
          this.setState({ abonnés: response.data.abonnes });

          console.log(response.data.msg);
        });
    }
  };
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users/Admin/getAbonnes")
      .then((response) => {
        this.setState({ abonnés: response.data });
      });
  }

  getDate = (date) => {
    var dateObj = new Date(date);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    const newdate = year + "/" + month + "/" + day;
    return newdate;
  };
  render() {
    return (
      <div className="userAbonné">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className="data-card">
              <div className="card-body px-4">
                <h5 className="card-title data-cardTitle"> Nombre abonné</h5>
                <p className="card-text">{this.state.abonnés.length}</p>
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
                    <th scope="col">Nom </th>
                    <th scope="col">Prénom </th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.abonnés.map((data, index) => {
                    return (
                      <tr>
                        <th scope="row">{data._id}</th>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{this.getDate(data.inscriDate)}</td>

                        <td id="icone-action">
                          <div onClick={() => this.selectAbonné(index)}>
                            <DetailAbonnePopUp
                              user={
                                this.state.id
                                  ? this.state.id
                                  : this.state.abonnés
                              }
                              show={this.state.detailReqModalShow}
                              onHide={() =>
                                this.setState({ detailReqModalShow: false })
                              }
                            />
                            <VisibilityIcon
                              onClick={() =>
                                this.setState({ detailReqModalShow: true })
                              }
                            />
                          </div>
                          <div id="ff">
                            <DeleteIcon
                              onClick={() => this.deletabonné(data)}
                            />
                          </div>
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
}
export default UserAbonné;
