import React from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailActivityPopUp from "./DetailActivityPopUp";
import swal from "sweetalert";
import { getDate } from "../../../utilis/date";
class PublicationActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activité: null,
      detailReqModalShow: false,
      activités: [],
      detailuser: {},
    };
  }
  //
  updateItem = (index) => {
    const user = this.state.activités[index];
    this.setState({ activité: user });
    axios
      .get(`http://localhost:8000/api/users/Admin/getDemandeur/${user.user}`)
      .then((response) => {
        this.setState({ detailuser: response.data });
      });
  };
  //
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/Publication/Admin/getActivities")
      .then((response) => {
        this.setState({ activités: response.data });
      });
  }
  //
  deletePub = (data) => {
    swal({
      title: "Vous êtes sûre de supprimer ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          axios
            .delete(
              `http://localhost:8000/api/Publication/deletepub/${data._id}`
            )
            .then(
              this.setState({
                activités: this.state.activités.filter(
                  (item) => item._id !== data._id
                ),
              })
            ),
          swal({ icon: "success", title: "ACTIVITÉ SUPPRIME AVEC SUCCES !" })
        );
      } else {
        swal("Opération annuler! ");
      }
    });
  };

  render() {
    return (
      <div className="publicationActivity">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className=" data-card ">
              <div className="card-body px-4  ">
                <h5 className="card-title data-cardTitle"> Nombre Activité</h5>
                <p className="card-text">{this.state.activités.length}</p>
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
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table  table-hover table-striped   text-center my-table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Categorie</th>
                    <th scope="col">Date</th>
                    <th scope="col">Nombre participants</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>{" "}
                <tbody>
                  {this.state.activités.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data._id}</td>
                        <td>{data.categorie}</td>

                        <td>{getDate(data.date_Pub)} </td>
                        <td>{data.participants.length} </td>

                        <td
                          onClick={() => this.updateItem(index)}
                          id="icone-action"
                        >
                          <div>
                            <DetailActivityPopUp
                              user={
                                this.state.activité
                                  ? this.state.activité
                                  : this.state.activités
                              }
                              show={this.state.detailReqModalShow}
                              onHide={() =>
                                this.setState({ detailReqModalShow: false })
                              }
                              organisateur={this.state.detailuser}
                            />
                            <VisibilityIcon
                              onClick={() =>
                                this.setState({ detailReqModalShow: true })
                              }
                              id="dataTable-viewIcon"
                            />
                          </div>
                          <div id="ff">
                            <DeleteIcon
                              onClick={() => this.deletePub(data)}
                              id="dataTable-delteIcon"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    );
  }
}
export default PublicationActivity;
