import React from "react";
import axios from "axios";
//icons
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddAdminPopUp from "./AddAdminPopUp";
import EditAdminPopUp from "./EditAdminPopUp";
//call global method(getDate) from date.js
import { getDate } from "../../../utilis/date";

class AdminManagment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: null,
      editAdminModalShow: false,
      addAdminModalShow: false,
      admins: [],
    };
  }
  //this method is used to store in admin State which object is
  //selected in table to passe it like a props to the modal
  selectedItem = (index) => {
    this.setState({ admin: this.state.admins[index] });
  };
  //this method run when user click in action icon that delete admin
  deleteAdmin = (adminData) => {
    if (
      window.confirm(
        `Vous êtes sûre de supprimer :${
          adminData.firstName + " " + adminData.lastName
        } ?`
      )
    ) {
      axios
        .delete(`http://localhost:8000/api/users/deleteAdmin/${adminData._id}`)
        .then((response) => {
          this.setState({ admins: response.data.admins });
        });
    }
  };
  //run when compoenet is mounted to get all admin stored in db and set the state(admins)
  //with response data
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users/Admin/getadmin")
      .then((response) => {
        this.setState({ admins: response.data });
      });
  }

  render() {
    return (
      <div className="adminManagment">
        <div className="dataTable">
          <div className=" container  px-0 dataTable__top">
            <div className="container px-0 ">
              <div className="row">
                <div className="col-12 ">
                  <div className="data-card ">
                    <div className="card-body px-1  ">
                      <h5 className="card-title data-cardTitle">
                        Nombre admin
                      </h5>
                      <p className="card-text">{this.state.admins.length}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 ">
                  <AddAdminPopUp
                    show={this.state.addAdminModalShow}
                    onHide={() => this.setState({ addAdminModalShow: false })}
                  />
                  <button
                    className="addButton"
                    onClick={() => this.setState({ addAdminModalShow: true })}
                  >
                    Ajouter admin
                  </button>
                </div>
              </div>
            </div>
            <form id="form-1">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
              <div className="icon">
                <SearchIcon />
              </div>
            </form>
          </div>
          <div className="container px-0 dataTable__bottom">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
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
                  {this.state.admins.map((data, index) => {
                    return (
                      <tr>
                        <td>{data._id}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{getDate(data.inscriDate)}</td>
                        <td>{data.permission}</td>

                        <td id="icone-action">
                          <div id="ff" onClick={() => this.selectedItem(index)}>
                            <EditAdminPopUp
                              user={
                                this.state.admin
                                  ? this.state.admin
                                  : this.state.admins
                              }
                              show={this.state.editAdminModalShow}
                              onHide={() =>
                                this.setState({ editAdminModalShow: false })
                              }
                            />
                            <EditIcon
                              onClick={() =>
                                this.setState({ editAdminModalShow: true })
                              }
                            />
                          </div>
                          <div>
                            <DeleteIcon
                              onClick={() => this.deleteAdmin(data)}
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
export default AdminManagment;
