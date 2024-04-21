import React from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailAbonnePopUp from "./DetailAbonnePopUp";
import { getDate } from "../../../utilis/date";
import swal from "sweetalert";
import Switch from "react-switch";
class UserAbonné extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abonné: {},
      detailReqModalShow: false,
      abonnés: [],
      checked: false,
      data: [],
    };
  }
  //this method is used to store in abonné State which object is
  //selected in table to passe it like a props to the modal
  selectedItem = (index) => {
    this.setState({ abonné: this.state.abonnés[index] });
  };
  //run when user activate user Status(switch checked)
  activateAbonné = (id) => {
    axios
      .post(`http://localhost:8000/api/users/Admin/activateAbonne/${id}`)
      .then((response) => {
        this.setState({ abonnés: response.data.abonnes });
      });
  };
  //run when user desactivate user Status(switch unchecked)
  desactivateAbonné = (id) => {
    axios
      .post(`http://localhost:8000/api/users/Admin/desactivateAbonne/${id}`)
      .then((response) => {
        this.setState({ abonnés: response.data.abonnes });
      });
  };
  //handel status change (true/false)
  //run when user click on the switch
  changeStatusAbonné = (e, data) => {
    if (data.status == true) {
      swal({
        title: `Vous êtes sûre de désactiver :${
          data.firstName + " " + data.lastName
        } ?`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal(
            this.desactivateAbonné(data._id),
            swal({ icon: "success", title: "COMPTE DESACTIVER AVEC SUCCES !" })
          );
        } else {
          swal("Opération annuler! ");
        }
      });
    } else {
      swal({
        title: `Vous êtes sûre d'activer :${
          data.firstName + " " + data.lastName
        } ?`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal(
            this.activateAbonné(data._id),
            swal({ icon: "success", title: "COMPTE ACTIVER AVEC SUCCES !" })
          );
        } else {
          swal("Opération annuler! ");
        }
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
  //searsh methode
  handelSearshChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        data: this.state.abonnés.filter((abonné) =>
          abonné.email.toUpperCase().includes(e.target.value.toUpperCase())
        ),
      });
    } else this.setState({ data: [] });

    console.log(this.state.data);
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
                placeholder="Chercher par email"
                onChange={this.handelSearshChange}
              />
              <div className="icon">
                <SearchIcon />
              </div>
            </form>
          </div>
          {/* data table */}
          <div className="dataTable__bottom">
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-hover table-striped text-center my-table">
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
                  {this.state.data.length > 0
                    ? this.state.data.map((data, index) => {
                        return (
                          <tr>
                            <td>{data._id}</td>
                            <td>
                              <p>{data.firstName}</p>
                            </td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{getDate(data.inscriDate)}</td>

                            <td id="icone-action">
                              <div onClick={() => this.selectedItem(index)}>
                                <VisibilityIcon
                                  onClick={() =>
                                    this.setState({ detailReqModalShow: true })
                                  }
                                  id="dataTable-viewIcon"
                                />
                              </div>
                              <div id="ff">
                                <Switch
                                  height={25}
                                  width={45}
                                  onChange={(e) =>
                                    this.changeStatusAbonné(e, data)
                                  }
                                  checked={data.status}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : this.state.abonnés.map((data, index) => {
                        return (
                          <tr>
                            <td>{data._id}</td>
                            <td>
                              <p>{data.firstName}</p>
                            </td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{getDate(data.inscriDate)}</td>

                            <td id="icone-action">
                              <div onClick={() => this.selectedItem(index)}>
                                <VisibilityIcon
                                  onClick={() =>
                                    this.setState({ detailReqModalShow: true })
                                  }
                                  id="dataTable-viewIcon"
                                />
                              </div>
                              <div id="ff">
                                <Switch
                                  height={25}
                                  width={45}
                                  onChange={(e) =>
                                    this.changeStatusAbonné(e, data)
                                  }
                                  checked={data.status}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  {/* {this.state.abonnés.map((data, index) => {
                    return (
                      <tr>
                        <td>{data._id}</td>
                        <td>
                          <p>{data.firstName}</p>
                        </td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{getDate(data.inscriDate)}</td>

                        <td id="icone-action">
                          <div onClick={() => this.selectedItem(index)}>
                            <VisibilityIcon
                              onClick={() =>
                                this.setState({ detailReqModalShow: true })
                              }
                              id="dataTable-viewIcon"
                            />
                          </div>
                          <div id="ff">
                            <Switch
                              height={25}
                              width={45}
                              onChange={(e) => this.changeStatusAbonné(e, data)}
                              checked={data.status}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </table>
            </div>
            <DetailAbonnePopUp
              user={this.state.abonné}
              show={this.state.detailReqModalShow}
              onHide={() => this.setState({ detailReqModalShow: false })}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default UserAbonné;
