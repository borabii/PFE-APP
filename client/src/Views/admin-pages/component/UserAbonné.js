import React from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailAbonnePopUp from "./DetailAbonnePopUp";
import { getDate } from "../../../utilis/date";

class UserAbonné extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abonné: null,
      detailReqModalShow: false,
      abonnés: [],
    };
  }
  //this method is used to store in abonné State which object is
  //selected in table to passe it like a props to the modal
  selectedItem = (index) => {
    this.setState({ abonné: this.state.abonnés[index] });
  };
  //this method run when user click in action icon that delete abonné
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
  //run when compoenet is mounted to get all abonnés stored in db and set the state(abonnés)
  //with response data
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users/Admin/getAbonnes")
      .then((response) => {
        this.setState({ abonnés: response.data });
      });
  }

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
                        <td>{getDate(data.inscriDate)}</td>

                        <td id="icone-action">
                          <div onClick={() => this.selectedItem(index)}>
                            <DetailAbonnePopUp
                              user={
                                this.state.abonné
                                  ? this.state.abonné
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
