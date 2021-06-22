import React from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailAnnonceurPopUp from "./DetailAnnonceurPopUp";
import { getDate } from "../../../utilis/date";
import swal from "sweetalert";
import Switch from "react-switch";

class UserAnnonceur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annonceur: null,
      detailReqModalShow: false,
      DemandeurData: {},
      annonceurs: [],
    };
  }

  //this method is used to store in annonceur State which object is
  //selected in table to passe it like a props to the modal
  selectdAnnonceur = (index) => {
    const user = this.state.annonceurs[index];
    this.setState({ annonceur: user });
    axios
      .get(
        `http://localhost:8000/api/users/Admin/getDemandeur/${user.abonnéId}`
      )
      .then((response) => this.setState({ DemandeurData: response.data }));
  };
  //run when user activate user Status(switch checked)
  activateAnnonceur = (id) => {
    axios
      .post(`http://localhost:8000/api/users/Admin/activateAnnonceur/${id}`)
      .then((response) => {
        this.setState({ annonceurs: response.data.annonceurs });
      });
  };
  //run when user desactivate user Status(switch unchecked)
  desactivateAnnonceur = (id) => {
    axios
      .post(`http://localhost:8000/api/users/Admin/desactivateAnnonceur/${id}`)
      .then((response) => {
        this.setState({ annonceurs: response.data.annonceurs });
      });
  };
  //handel status change (true/false)
  //run when user click on the switch
  changeStatusAnnonceur = (e, data) => {
    if (data.status == true) {
      swal({
        title: `Vous êtes sûre de désactiver :${data.nomAnnonceur} ?`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal(
            this.desactivateAnnonceur(data._id),
            swal({ icon: "success", title: "COMPTE DESACTIVER AVEC SUCCES !" })
          );
        } else {
          swal("Opération annuler! ");
        }
      });
    } else {
      swal({
        title: `Vous êtes sûre d'activer :${data.nomAnnonceur} ?`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal(
            this.activateAnnonceur(data._id),
            swal({ icon: "success", title: "COMPTE ACTIVER AVEC SUCCES !" })
          );
        } else {
          swal("Opération annuler! ");
        }
      });
    }
  };

  //run when compoenet is mounted to get all annonceur stored in db and set the state(annonceurs)
  //with response data
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users/Admin/getAnnonceur")
      .then((response) => {
        this.setState({ annonceurs: response.data });
      });
  }
  render() {
    return (
      <div className="userAnnonceur">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className=" data-card ">
              <div className="card-body px-2  ">
                <h5 className="card-title data-cardTitle"> Nombre annonceur</h5>
                <p className="card-text">{this.state.annonceurs.length}</p>
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
                    <th scope="col">Email</th>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.annonceurs.map((data, index) => {
                    return (
                      <tr>
                        <td scope="row">{data._id}</td>
                        <td>{data.nomAnnonceur}</td>
                        <td> {data.emailProAnnonceur}</td>
                        <td>{data.catégorieAnnonceur}</td>
                        <td>{getDate(data.aceptationDate)}</td>
                        <td id="icone-action">
                          <div onClick={() => this.selectdAnnonceur(index)}>
                            <DetailAnnonceurPopUp
                              user={
                                this.state.annonceur
                                  ? this.state.annonceur
                                  : this.state.annonceurs
                              }
                              demandeur={this.state.DemandeurData}
                              show={this.state.detailReqModalShow}
                              onHide={() =>
                                this.setState({ detailReqModalShow: false })
                              }
                            />
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

export default UserAnnonceur;
