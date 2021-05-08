import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailAnnonceurPopUp from "./DetailAnnonceurPopUp";

class UserAnnonceur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      detailReqModalShow: false,
      DemandeurData: {
        firstName: "",
        lastName: "",
        email: "",
        imageProfile: "",
        inscriDate: "",
      },
      annonceurs: [
        {
          _id: "6089f86bfcf1b64cd0974cfd",
          firstName: "tezedzed",
          lastName: "tezedzed",
          email: "wdfgh@dsg",
          description: "tezedzed",
          adresse: "aaaaa",
          user: "607e141dc0fb704f84df1b46",
          categorie: "foot",
          inscriDate: "2021-04-29T00:06:03.199Z",
          __v: 0,
        },
      ],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users/Admin/getAnnonceur")
      .then((response) => {
        this.setState({ annonceurs: response.data });
      });
  }
  selectAnnonceur = (index) => {
    const user = this.state.annonceurs[index];
    this.setState({ id: user });
    axios
      .get(
        `http://localhost:8000/api/users/Admin/getDemandeur/${user.abonnéId}`
      )
      .then((response) => this.setState({ DemandeurData: response.data }));
  };
  deletannonceur = (data) => {
    if (window.confirm(`Vous êtes sûre de supprimer :${data.nomAnnonceur} ?`)) {
      axios
        .delete(
          `http://localhost:8000/api/users/Admin/deleteAnnonceure/${data._id}`
        )

        .then((response) => {
          this.setState({ annonceurs: response.data.annonceurs });

          console.log(response.data);
        });
    }
  };

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
                        <th scope="row">{data._id}</th>
                        <td>{data.nomAnnonceur}</td>
                        <td> {data.emailProAnnonceur}</td>
                        <td>{data.catégorieAnnonceur}</td>
                        <td>{data.aceptationDate}</td>
                        <td id="icone-action">
                          <div onClick={() => this.selectAnnonceur(index)}>
                            <DetailAnnonceurPopUp
                              user={
                                this.state.id
                                  ? this.state.id
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
                            />
                          </div>
                          <div id="ff">
                            <DeleteIcon
                              onClick={() => this.deletannonceur(data)}
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
