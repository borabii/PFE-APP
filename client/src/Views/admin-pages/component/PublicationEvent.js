import React from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailEventPopUp from "./DetailEventPopUp";
import swal from "sweetalert";
import { getDate } from "../../../utilis/date";

class PublicationEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null,
      detailReqModalShow: false,
      events: [],
      detailuser: {},
      data: [],
    };
  }

  updateItem = (index) => {
    const user = this.state.events[index];
    this.setState({ event: user });
    axios
      .get(`http://localhost:8000/api/users/Admin/getAnnonceur/${user.user}`)
      .then((response) => {
        this.setState({ detailuser: response.data });
      });
  };
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/Publication/Admin/getEvents")
      .then((response) => {
        this.setState({ events: response.data });
      });
  }
  //delete
  deletePub = (data) => {
    swal({
      title: "Voulez vous supprimer cette événement",
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
            .then((response) => {
              this.setState({ events: response.data.abonnes });
            }),
          swal({ icon: "success", title: "ÉVÉNEMENT SUPPRIME AVEC SUCCES !" })
        );
      } else {
        swal("Opération annuler! ");
      }
    });
  };
  //searsh methode
  handelSearshChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        data: this.state.events.filter((event) =>
          event.categorie.toUpperCase().includes(e.target.value.toUpperCase())
        ),
      });
    } else this.setState({ data: [] });

    console.log(this.state.data);
  };

  render() {
    return (
      <div className="publicationEvent">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className=" data-card ">
              <div className="card-body px-2  ">
                <h5 className="card-title data-cardTitle"> Nombre évenement</h5>
                <p className="card-text">{this.state.events.length}</p>
              </div>
            </div>

            <form>
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Chercher par nom catégorie"
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
              <table className="table  table-hover table-striped   text-center my-table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Categorie</th>
                    <th scope="col">adresse</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.length > 0
                    ? this.state.data.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.categorie}</td>
                            <td>aaaaaaaaa</td>
                            <td>{getDate(data.date_Pub)} </td>
                            <td
                              onClick={() => this.updateItem(index)}
                              id="icone-action"
                            >
                              <div>
                                <DetailEventPopUp
                                  data={
                                    this.state.event
                                      ? this.state.event
                                      : this.state.events
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
                      })
                    : this.state.events.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.categorie}</td>
                            <td>aaaaaaaaa</td>
                            <td>{getDate(data.date_Pub)} </td>
                            <td
                              onClick={() => this.updateItem(index)}
                              id="icone-action"
                            >
                              <div>
                                <DetailEventPopUp
                                  data={
                                    this.state.event
                                      ? this.state.event
                                      : this.state.events
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
                  {/* {this.state.events.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data._id}</td>
                        <td>{data.categorie}</td>
                        <td>aaaaaaaaa</td>
                        <td>{getDate(data.date_Pub)} </td>
                        <td
                          onClick={() => this.updateItem(index)}
                          id="icone-action"
                        >
                          <div>
                            <DetailEventPopUp
                              data={
                                this.state.event
                                  ? this.state.event
                                  : this.state.events
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
                  })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PublicationEvent;
