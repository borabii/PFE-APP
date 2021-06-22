import React from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailReclamationPopUp from "./DetailReclamationPopUp";
import BlockIcon from "@material-ui/icons/Block";

class Reclamation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailReqModalShow: false,
      listeReclamation: [],
      reclamations: [],
      reportedUser: {},
    };
  }
  //this method is used to store in demande State which object is
  //selected in table to passe it like a props to the modal
  selectdItem = (index) => {
    const item = this.state.reclamations[index];
    this.setState({ reportedUser: item.accounts });
    axios
      .get(
        `http://localhost:8000/api/Reclamation/Admin/getUserReport/${item._id}
        `
      )
      .then((response) => this.setState({ listeReclamation: response.data }));
  };
  //run when compoenet is mounted to get all demande stored in db and set the state(demandes)
  //with response data
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/Reclamation/Admin/getReports")
      .then((response) => {
        this.setState({ reclamations: response.data });
      });
  }
  //run when user desactivate user Status(switch unchecked)
  desactivateAbonné = (e, id) => {
    axios
      .post(`http://localhost:8000/api/users/Admin/desactivateAbonne/${id}`)
      .then((response) => {
        window.location.reload(true);
      });
  };
  render() {
    return (
      <div className="reclamation">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className="data-card">
              <div className="card-body px-2   ">
                <h5 className="card-title data-cardTitle">
                  {" "}
                  Nombre réclamation
                </h5>
                <p className="card-text">{this.state.reclamations.length}</p>
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
                    <th scope="col">Prénom</th>
                    <th scope="col">Nombre Signale</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.reclamations.map((data, index) => {
                    return (
                      <tr>
                        <th scope="row">{data._id}</th>
                        <td>{data.accounts[0].firstName}</td>
                        <td>{data.accounts[0].lastName}</td>
                        <td>{data.count}</td>

                        <td id="icone-action">
                          <div onClick={() => this.selectdItem(index)}>
                            <VisibilityIcon
                              id="dataTable-viewIcon"
                              onClick={() =>
                                this.setState({ detailReqModalShow: true })
                              }
                            />
                          </div>
                          <div id="ff">
                            {data.accounts[0].status === true ? (
                              <BlockIcon
                                id="dataTable-delteIcon"
                                onClick={(e) =>
                                  this.desactivateAbonné(e, data._id)
                                }
                              />
                            ) : (
                              "bloqué"
                            )}
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
        <DetailReclamationPopUp
          listeReclamation={this.state.listeReclamation}
          reportedUser={
            this.state.reportedUser !== null && this.state.reportedUser
          }
          show={this.state.detailReqModalShow}
          onHide={() => this.setState({ detailReqModalShow: false })}
        />
      </div>
    );
  }
}
export default Reclamation;
