import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import DetailReqAnnonceurPopUp from "./DetailReqAnnonceurPopUp";

class DemandeManagment extends React.Component {
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
      items: [
        {
          demandeur: "",
          etatDemande: "",
          nomAnnonceur: "",
          adresseAnnonceur: "",
          numTelAnnonceur: "",
          emailProAnnonceur: "",
          catégorieAnnonceur: "",
          justificatifAnnonceur: "",
          demandeDate: "",
          __v: 0,
        },
      ],
    };
  }

  updateItem = (index) => {
    const user = this.state.items[index];
    this.setState({ id: user });
    axios
      .get(
        `http://localhost:8000/api/users/Admin/getDemandeur/${user.demandeur}`
      )
      .then((response) => this.setState({ DemandeurData: response.data }));
  };
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users/Admin/getDemandeAnnonceur")
      .then((response) => {
        this.setState({ items: response.data });
      });
  }

  render() {
    return (
      <div className="demande">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className="data-card ">
              <div className="card-body px-4  ">
                <h5 className="card-title data-cardTitle"> Nombre Demande</h5>
                <p className="card-text">{this.state.items.length}</p>
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
                    <th scope="col">id </th>
                    <th scope="col">nom Annonceur</th>
                    <th scope="col">Date</th>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Etat demande</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{data._id}</th>
                        <td>{data.nomAnnonceur}</td>
                        <td>{data.demandeDate}</td>
                        <td>{data.catégorieAnnonceur}</td>
                        <td>{data.etatDemande}</td>
                        <td
                          onClick={() => this.updateItem(index)}
                          id="icone-action"
                        >
                          <div>
                            <DetailReqAnnonceurPopUp
                              user={
                                this.state.id ? this.state.id : this.state.items
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
                          {/* <div id="ff">
                            <DeleteIcon
                              onClick={() => this.refusedemande(data)}
                            />
                          </div> */}
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
export default DemandeManagment;
