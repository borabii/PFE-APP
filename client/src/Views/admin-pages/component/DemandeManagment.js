import React from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailReqAnnonceurPopUp from "./DetailReqAnnonceurPopUp";

class DemandeManagment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demande: null,
      detailReqModalShow: false,
      demandeurData: {},
      demandes: [],
      data: [],
    };
  }
  //this method is used to store in demande State which object is
  //selected in table to passe it like a props to the modal
  selectdItem = (index) => {
    const item = this.state.demandes[index];
    this.setState({ demande: item });
    axios
      .get(
        `http://localhost:8000/api/users/Admin/getDemandeur/${item.demandeur}`
      )
      .then((response) => this.setState({ demandeurData: response.data }));
  };
  //run when compoenet is mounted to get all demande stored in db and set the state(demandes)
  //with response data
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users/Admin/getDemandeAnnonceur")
      .then((response) => {
        this.setState({ demandes: response.data });
      });
  }
  //searsh methode
  handelSearshChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        data: this.state.demandes.filter((demande) =>
          demande.nomAnnonceur
            .toUpperCase()
            .includes(e.target.value.toUpperCase())
        ),
      });
    } else this.setState({ data: [] });
  };
  render() {
    return (
      <div className="demande">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className="data-card ">
              <div className="card-body px-4  ">
                <h5 className="card-title data-cardTitle"> Nombre Demande</h5>
                <p className="card-text">{this.state.demandes.length}</p>
              </div>
            </div>

            <form>
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Chercher par nom annonceur"
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
                    <th scope="col">id </th>
                    <th scope="col">nom Annonceur</th>
                    <th scope="col">Date</th>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Etat demande</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.length > 0
                    ? this.state.data.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td scope="row">{data._id}</td>
                            <td>{data.nomAnnonceur}</td>
                            <td>{data.demandeDate}</td>
                            <td>{data.catégorieAnnonceur}</td>
                            <td>{data.etatDemande}</td>
                            <td
                              onClick={() => this.selectdItem(index)}
                              id="icone-action"
                            >
                              <div>
                                <VisibilityIcon
                                  onClick={() =>
                                    this.setState({ detailReqModalShow: true })
                                  }
                                  id="dataTable-viewIcon"
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : this.state.demandes.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td scope="row">{data._id}</td>
                            <td>{data.nomAnnonceur}</td>
                            <td>{data.demandeDate}</td>
                            <td>{data.catégorieAnnonceur}</td>
                            <td>{data.etatDemande}</td>
                            <td
                              onClick={() => this.selectdItem(index)}
                              id="icone-action"
                            >
                              <div>
                                <VisibilityIcon
                                  onClick={() =>
                                    this.setState({ detailReqModalShow: true })
                                  }
                                  id="dataTable-viewIcon"
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  {/* {this.state.demandes.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td scope="row">{data._id}</td>
                        <td>{data.nomAnnonceur}</td>
                        <td>{data.demandeDate}</td>
                        <td>{data.catégorieAnnonceur}</td>
                        <td>{data.etatDemande}</td>
                        <td
                          onClick={() => this.selectdItem(index)}
                          id="icone-action"
                        >
                          <div>
                            <VisibilityIcon
                              onClick={() =>
                                this.setState({ detailReqModalShow: true })
                              }
                              id="dataTable-viewIcon"
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
          <DetailReqAnnonceurPopUp
            user={this.state.demande ? this.state.demande : this.state.demandes}
            demandeur={this.state.demandeurData}
            show={this.state.detailReqModalShow}
            onHide={() => this.setState({ detailReqModalShow: false })}
          />
        </div>
      </div>
    );
  }
}
export default DemandeManagment;
